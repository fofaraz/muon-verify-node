import {ethers} from 'ethers';
import {list} from '../presale-list.js';
import * as DiscordBot from '../DiscordBot.js';

DiscordBot.init();

interface UserMap {
    [userId: string]: boolean;
}
let addRoleLogs:UserMap = {};


// const GUILD_ID = "830888887253073920";//muon
const GUILD_ID = "1066816255488692255";//test
const ROLE_NAME = "ALICE Node Operator";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const message = `I have participated in the Muon presale using ${body.address} address.`;
    let recoveredAddress = ethers.verifyMessage(message, body.signature);
    recoveredAddress = recoveredAddress.toLowerCase();
    console.log("recoveredAddress " + recoveredAddress);
    console.log("list length " + list.length);
    let addressExistsInList = list.includes(recoveredAddress);
    console.log("search result " + addressExistsInList);
    if (!addressExistsInList)
        return {success: false, message: "This address have not participated in the presale."};

    if(addRoleLogs[`recoveredAddress`])
        return {success: false, message: "Role already assigned to your discord user"};
    addRoleLogs[`recoveredAddress`] = true;

    DiscordBot.assignRole(GUILD_ID, body.discordId, ROLE_NAME);
    return {success: true};
})
