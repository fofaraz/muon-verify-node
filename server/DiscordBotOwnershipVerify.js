import * as Discord from "discord.js";
import PresaleVerify from "./models/PresaleVerify"


const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        // Discord.GatewayIntentBits.GuildMessages,
    ],
    partials: [Discord.Partials.Channel]
});
console.log("logn discord bot ");
client.login(process.env.BOT_TOKEN_OWNERSHIP_VERIFY);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

export async function assignRole(guildId, userId, roleName) {
    console.log("assignRole " + userId);
    let guild = await client.guilds.fetch(guildId);
    let member = await guild.members.fetch(userId);
    const role = guild.roles.cache.find(role => role.name === roleName);
    await member.roles.add(role);
    let message = ":white_check_mark: Verification successful";
    message += "\nFrom now on, I will monitor the status of your node and inform you when it goes offline or online.";
    message += "\nCurrent node status: Online";
    sendMessage(userId, message)
}

export function init() {
    console.log("init discord bot");
}

export async function sendMessage(discordUserId, message) {
    return await client.users.fetch(discordUserId, false)
        .then((user) => {
            return user.send(message);
        })
}

// assignRole(GUILD_ID,"1066815385472602113",ROLE_NAME);