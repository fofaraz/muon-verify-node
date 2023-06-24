import {ethers} from 'ethers';
import {list} from '../presale-list.js';
import * as DiscordBot from '../DiscordBot.js';
DiscordBot.init();


// const GUILD_ID = "830888887253073920";//muon
const GUILD_ID = "1066816255488692255";//test
const ROLE_NAME = "ALICE Node Operator";

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const message = `I have participated in pre-sale`;
    const recoveredAddress = ethers.verifyMessage(message, body.signature);
    console.log("recoveredAddress " + recoveredAddress);
    console.log("list length " + list.length);
    let addressExistsInList = list.includes(recoveredAddress);
    console.log("search result " + addressExistsInList);
    if (addressExistsInList){
        return {success: true};
        assignRole(GUILD_ID,"1066815385472602113",ROLE_NAME);
    }

    return {success: false, message: "Address verification failed."};
})
