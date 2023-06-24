import * as Discord from "discord.js";


const MSG_INSTRUCTIONS = "Hi, Please go to the following link to verify that you participated in pre-sale\nhttps://discord-bot.muon.net/verify-presale";

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
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log("messageCreate");
    if (message.channel.type != Discord.ChannelType.DM)
        return;
    if (message.author.bot)
        return;
    message.reply(MSG_INSTRUCTIONS);
});

export async function assignRole(guildId, userId, roleName) {
    let guild = await client.guilds.fetch(guildId);
    console.log("guild");
    console.log(guild);
    let member = await guild.members.fetch(userId);
    console.log(member);
    const role = guild.roles.cache.find(role => role.name === roleName);
    console.log(role);
    member.roles.add(role);
}

export function init() {
    console.log("init discord bot");
}

// assignRole(GUILD_ID,"1066815385472602113",ROLE_NAME);