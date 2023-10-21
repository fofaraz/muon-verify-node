import * as Discord from "discord.js";
import axios from "axios";


export function init() {
    console.log("init discord bot price");
}

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
});
client.login(process.env.BOT_TOKEN_PRICE);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('PION Network', {type: Discord.ActivityType.Watching});
});

async function setNickname() {
    let price = await axios.get("http://mexc.com/open/api/v2/market/ticker?symbol=PION_USDT")
        .then(({data}) => {
            if (data.code == 200)
                return data.data[0].last
        })
        .catch(e => {
            console.log(e);
        });
    if (!price) return;
    let nickname = `PION $${price}`;
    client.guilds.cache.forEach((guild) => {
        guild.members.cache.get(client.user.id).setNickname(nickname);
    });
}

setInterval(setNickname, 5 * 60000);

setNickname();