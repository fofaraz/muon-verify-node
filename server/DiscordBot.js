import * as Discord from "discord.js";


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

    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel('Verify')
                .setStyle(Discord.ButtonStyle.Link)
                .setURL(`https://discord-bot.muon.net/verify-presale?id=${message.author.id}`)
        );

    const MSG_INSTRUCTIONS = `Hey ${message.author.username}\nUse the following button to verify that you have participated in the Muon presale.`

    message.reply({
        content: MSG_INSTRUCTIONS,
        components: [row],
    });
});

export async function assignRole(guildId, userId, roleName) {
    console.log("assignRole " + userId);
    let guild = await client.guilds.fetch(guildId);
    let member = await guild.members.fetch(userId);
    const role = guild.roles.cache.find(role => role.name === roleName);
    member.roles.add(role);
}

export function init() {
    console.log("init discord bot");
}

// assignRole(GUILD_ID,"1066815385472602113",ROLE_NAME);