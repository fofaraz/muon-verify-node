import {ethers} from 'ethers';
import axios from 'axios';
import DiscordUser from "../models/DiscordUser"
import * as DiscordBotOwnershipVerify from "../DiscordBotOwnershipVerify";
const ROLE_NAME = "ALICE Node Operator";


export default defineEventHandler(async (event) => {
    return {success: true};
    const body = await readBody(event);

    let nodeInfo = await axios.get(`http://monitor1.muon.net/nodes/${body.nodeId}`);
    nodeInfo = nodeInfo.data;
    console.log("nodeInfo",nodeInfo);
    if (!nodeInfo || !nodeInfo.success)
        return {success: false, message: "Node info not found."};

    const message = `I am the owner of node with ID ${body.nodeId}`;
    let recoveredAddress = ethers.verifyMessage(message, body.signature);
    recoveredAddress = recoveredAddress.toLowerCase();
    console.log("recoveredAddress " + recoveredAddress);

    //todo double check if we should compare to stakerAddress
    if (nodeInfo.result.node.stakerAddress != recoveredAddress)
        return {success: false, message: "The signer address is not the same as node's staker address."};


    let discordUserId = body.discordId;

    let discordUser = await DiscordUser.findOne({discordUserId});
    if (!discordUser)
        return {success: false, message: "Your Node ID not Found!"};
    if (discordUser.verified)
        return {success: false, message: "This Node ID already owned by another discord user"};

    discordUser.verified = true;
    await discordUser.save();

    DiscordBotOwnershipVerify.assignRole(process.env.GUILD_ID, body.discordId, ROLE_NAME);


    return {success: true};
})
