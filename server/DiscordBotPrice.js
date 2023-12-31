import * as Discord from "discord.js";
import axios from "axios";


export function init() {
    console.log("init discord bot price");
}

const clientPrice = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
clientPrice.login(process.env.BOT_TOKEN_PRICE);
clientPrice.on('ready', () => {
    console.log(`Logged in as ${clientPrice.user.tag}!`);
    clientPrice.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

const clientMCAP = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
clientMCAP.login(process.env.BOT_TOKEN_MCAP);
clientMCAP.on('ready', () => {
    console.log(`Logged in as ${clientMCAP.user.tag}!`);
    clientMCAP.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

const clientAPR = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
clientAPR.login(process.env.BOT_TOKEN_APR);
clientAPR.on('ready', () => {
    console.log(`Logged in as ${clientAPR.user.tag}!`);
    clientAPR.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

const clientSTAKED = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
clientSTAKED.login(process.env.BOT_TOKEN_STAKED);
clientSTAKED.on('ready', () => {
    console.log(`Logged in as ${clientSTAKED.user.tag}!`);
    clientSTAKED.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

const clientSUPPLY = new Discord.Client({intents: [Discord.GatewayIntentBits.Guilds]});
clientSUPPLY.login(process.env.BOT_TOKEN_SUPPLY);
clientSUPPLY.on('ready', () => {
    console.log(`Logged in as ${clientSUPPLY.user.tag}!`);
    clientSUPPLY.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

async function setNicknameMarket() {
    let marketInfo = await axios.get("https://app.muon.net/stats/data.json")
        .then(({data}) => {
            return data;
        })
        .catch(e => {
            console.log(e);
        });
    if (!marketInfo) return;


    clientPrice.guilds.cache.forEach((guild) => {
        let price = marketInfo.pion_price;
        if (price)
            price = Math.round(price * 10000) / 10000;
        else
            price = "_";
        guild.members.cache.get(clientPrice.user.id).setNickname(`PION $${price}`);
    });
    clientMCAP.guilds.cache.forEach((guild) => {
        guild.members.cache.get(clientMCAP.user.id).setNickname(`${marketInfo.market_cap} MCAP`);
    });
    clientAPR.guilds.cache.forEach((guild) => {
        guild.members.cache.get(clientAPR.user.id).setNickname(`${marketInfo.annual_percentage_yield} APR`);
    });
    clientSTAKED.guilds.cache.forEach((guild) => {
        guild.members.cache.get(clientSTAKED.user.id).setNickname(`${marketInfo.pion_staked_in_staking} STAKED`);
    });
    clientSUPPLY.guilds.cache.forEach((guild) => {
        guild.members.cache.get(clientSUPPLY.user.id).setNickname(`${marketInfo.pion_in_circulation} SUPPLY`);
    });
}

setInterval(setNicknameMarket, 5 * 60000);
setNicknameMarket();