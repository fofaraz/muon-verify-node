import {ethers} from 'ethers';
import {list} from '../presale-list.js';
import * as DiscordBot from '../DiscordBot.js';
import PresaleVerify from "../models/PresaleVerify"

const ROLE_NAME = "Presale Participant";

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    // @ts-ignore
    let presaleVerify = await PresaleVerify.findOne({discordUserId: body.discordId});
    if (presaleVerify)
        return {success: false, message: "Role already assigned to your discord user"};


    const message = `I have participated in the Muon presale using ${body.address} address.`;
    let recoveredAddress = ethers.verifyMessage(message, body.signature);
    recoveredAddress = recoveredAddress.toLowerCase();
    console.log("recoveredAddress " + recoveredAddress);
    console.log("list length " + list.length);
    let addressExistsInList = list.includes(recoveredAddress);
    console.log("search result " + addressExistsInList);
    if (!addressExistsInList)
        return {success: false, message: "This address has not participated in the presale."};

    presaleVerify = await PresaleVerify.findOne({address: recoveredAddress});
    if (presaleVerify)
        return {success: false, message: "A discord user already verified with your address"};

    let assignRoleResult = await DiscordBot.assignRole(process.env.GUILD_ID, body.discordId, ROLE_NAME)
        .then(() => {
            return {success: true, message: ""}
        })
        .catch((err => {
            console.log(err);
            return {success: false, message: err.message}
        }));
    if (!assignRoleResult.success)
        return {success: false, message: assignRoleResult.message};

    // @ts-ignore
    await PresaleVerify.create({
        discordUserId: body.discordId,
        address: recoveredAddress
    });

    return {success: true};
})

// DiscordBot.assignRole(process.env.GUILD_ID,"1066815385472602113",ROLE_NAME);