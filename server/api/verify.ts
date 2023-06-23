import {ethers} from 'ethers';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    return {success: true}

    const body = await readBody(event);

    let {data: nodeInfo} = await axios.get(`https://monitor1.muon.net/nodes/${body.nodeId}`);
    console.log(nodeInfo);

    if (!nodeInfo)
        return {success: false, message: "Node info not found."};

    if (!nodeInfo.success)
        return {success: false, message: "Node info request failed."};

    let nodeAddress = nodeInfo.result.node.nodeAddress;

    const message = `I am the owner of node ID ${body.nodeId}`;
    const recoveredAddress = ethers.verifyMessage(message, body.signature);
    if (recoveredAddress != nodeAddress)
        return {success: false, message: "Address verification failed."};

    return {success: true}
})