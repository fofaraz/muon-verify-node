import axios from "axios"
import DiscordUser from "./models/DiscordUser";
import StatusLogs from "./models/StatusLogs";
import * as MessageManager from "./MessageManager";
import * as DiscordBotOwnershipVerify from "./DiscordBotOwnershipVerify";
import Promise from "bluebird";

let nodeResponseLoaded = false;
let nodesResponse = [];
let onlineNodes = [];

async function loadNodes() {
    axios.get(`${process.env.ALICE_V2_MONITOR}/nodes?filter=all`)
        .then(({data}) => {
            if (data.success) {
                nodeResponseLoaded = true;
                nodesResponse = data.result;
            }
        })
        .catch((e) => {
            console.log("error checkActiveNodes: " + e.message);
            return false;
        });


    axios.get(`${process.env.ALICE_V2_MONITOR}/nodes`)
        .then(({data}) => {
            if (data.success) {
                onlineNodes = data.result;
            }
        })
        .catch((e) => {
            console.log("error checkActiveNodes: " + e.message);
            return false;
        });
}

loadNodes();
setInterval(loadNodes, 60000);

export function getOnlineNodesCount() {
    return onlineNodes.length;
}


let inProgress = false;

async function checkAll() {
    // if (process.env.BUILD_MODE == 'development')
    //     return;
    if (inProgress)
        return;
    if (!nodeResponseLoaded)
        return;
    inProgress = true;

    let discordUsers = await DiscordUser.find({verified: true, muonVersion: 2});
    Promise.map(discordUsers, async (discordUser) => {
        let lastPeerState = discordUser.lastPeerState;
        try {
            let newState = await getNewState(discordUser.nodeId);
            discordUser.lastPeerState = newState;
            discordUser.lastCheck = Date.now();
            await discordUser.save();
            if (lastPeerState != newState) {
                await StatusLogs.create({
                    nodeId: discordUser.nodeId,
                    status: newState,
                    discordUserId: discordUser.discordUserId
                });
                discordUser.lastStateChange = Date.now();
                await discordUser.save();

                let message = "Your node status: " + discordUser.lastPeerState;
                MessageManager.sendMessageToDiscordId(DiscordBotOwnershipVerify.client, discordUser.discordUserId, message)
                    .catch(e => {
                        console.log(e.message);
                    });
            }
        } catch (e) {
            console.log(e);
        }
    }, {concurrency: 10})
        .catch(e => {
            console.log(e);
        })
        .finally(function () {
            // console.log("==== ping all finished ====");
            inProgress = false;
        });
}

export function getNodeInfo(peerId) {
    let nodeInfo = nodesResponse.find(element => element.id == peerId);
    return nodeInfo;
}


export async function getNewState(peerId) {
    let nodeInfo = onlineNodes.find(element => element.id == peerId);
    let newState = nodeInfo ? "Online" : "Offline";
    return newState;
}


checkAll();
setInterval(checkAll, 30000);

async function reminder() {
    let findQuery = {
        createdAt: {
            $lt: new Date(new Date() - 60 * 60 * 1000),
            $gt: new Date(new Date() - 2 * 60 * 60 * 1000)
        },
        isReminderSent: false
    };

    let statusLogs = await StatusLogs.aggregate([
        {$match: findQuery},
        {$sort: {"_id": -1}},
        {$group: {_id: '$nodeId', doc: {$first: '$$ROOT'}}},
        {$replaceRoot: {newRoot: '$doc'}},
    ]);

    let nodeIds = [];
    for (let i = 0; i < statusLogs.length; i++) {
        let statusLog = statusLogs[i];
        nodeIds.push(statusLog.nodeId);

        let newState = await getNewState(statusLog.nodeId);
        if (newState == statusLog.status) {
            let message = "Reminder. Your node status is: " + statusLog.status;
            if (statusLog.status == "Online")
                message = "✅ Everything is looking good. Your node is up and running";
            else if (statusLog.status == "Offline")
                message = "This is a reminder to inform you that your node has been offline for some time.";

            MessageManager.sendMessageToDiscordId(DiscordBotOwnershipVerify.client, statusLog.discordUserId, message)
                .catch(e => {
                    console.log(e.message);
                });
        }
    }
    await StatusLogs.updateMany({nodeId: {$in: nodeIds}}, {isReminderSent: true});
}

reminder();
setInterval(reminder, 10 * 60 * 1000);
