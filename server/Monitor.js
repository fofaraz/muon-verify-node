import axios from "axios"
import DiscordUser from "./models/DiscordUser";
import * as MessageManager from "./MessageManager";
import * as DiscordBotOwnershipVerify from "./DiscordBotOwnershipVerify";
import Promise from "bluebird";

let nodeResponseLoaded = false;
let nodesResponse = [];

async function loadNodes() {
    axios.get(`${process.env.ALICE_V2_MONITOR}/nodes`)
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
}

loadNodes();
setInterval(loadNodes, 60000);

export function getNodesCount() {
    return nodesResponse.length;
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
            if (lastPeerState != discordUser.lastPeerState) {
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
    let nodeInfo = getNodeInfo(peerId);
    let newState = nodeInfo ? "Online" : "Offline";
    return newState;
}


checkAll();

setInterval(checkAll, 30000);
