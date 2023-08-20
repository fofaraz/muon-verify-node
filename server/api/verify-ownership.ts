import {ethers} from 'ethers';
import axios from 'axios';
import DiscordUser from "../models/DiscordUser"
import * as DiscordBotOwnershipVerify from "../DiscordBotOwnershipVerify";


const ROLE_NAME = "ALICE V2 Node Operator";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    let nodeInfo = await axios.get(`${process.env.ALICE_V2_MONITOR}/nodes/${body.nodeId}`);
    nodeInfo = nodeInfo.data;
    // console.log("nodeInfo", nodeInfo);
    if (!nodeInfo || !nodeInfo.success)
        return {success: false, message: "Node info not found."};

    const message = `I am the owner of the node #${body.nodeId} on the ALICE network.`;
    let recoveredAddress = ethers.verifyMessage(message, body.signature);
    recoveredAddress = recoveredAddress.toLowerCase();
    console.log("recoveredAddress " + recoveredAddress);
    console.log("compare to", nodeInfo.result.node.stakerAddress.toLowerCase());

    // if (nodeInfo.result.node.stakerAddress.toLowerCase() != recoveredAddress)
    //     return {success: false, message: "The signer address is not the same as node's staker address."};


    let discordUserId = body.discordId;

    let discordUser = await DiscordUser.findOne({discordUserId});
    if (!discordUser)
        return {
            success: false,
            message: "Your Node ID not Found! Please get back to discord and send message to the bot"
        };
    if (discordUser.verified)
        return {success: false, message: "This Node ID already owned by another discord user"};

    let assignRoleResult = await DiscordBotOwnershipVerify.assignRole(process.env.GUILD_ID, body.discordId, ROLE_NAME)
        .then(() => {
            return {success: true, message: ""}
        })
        .catch((err => {
            console.log(err);
            return {success: false, message: err.message}
        }));
    if (!assignRoleResult.success)
        return {success: false, message: assignRoleResult.message};

    discordUser.verified = true;
    await discordUser.save();


    return {success: true};
})
