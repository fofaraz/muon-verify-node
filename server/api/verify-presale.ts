import {ethers} from 'ethers';
import {list} from '../presale-list.js';


export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const message = `I have participated in pre-sale`;
    const recoveredAddress = ethers.verifyMessage(message, body.signature);
    console.log("recoveredAddress " + recoveredAddress);
    let addressExistsInList = list.includes(recoveredAddress);
    console.log("search result " + addressExistsInList);
    if (addressExistsInList)
        return {success: true};
    return {success: false, message: "Address verification failed."};
})
