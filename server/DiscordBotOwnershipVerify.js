import * as Discord from "discord.js";
import * as setid from "./bot_commands/setid";
import * as info from "./bot_commands/info";
import * as MessageManager from "./MessageManager";
import * as Monitor from "./Monitor";


const MSG_INSTRUCTIONS = "Hi, I am Muon's Network Bot." +
    "\nTo monitor the status of your Muon node, use the </setid:1142717723407822930> command to provide me with your Muon node's ID number." +
    "\nOnce you've provided me with this information, I will periodically check your node's status and notify you when it goes offline or online." +
    "\nThis way, you can stay informed about the health of your Muon node and take appropriate actions if needed.";

const commands = [
    {name: 'ping', description: 'Replies with Pong!'},
    setid.setIdCommand,
    {name: 'info', description: 'Replies your current settings and info!'},
];
const rest = new Discord.REST({version: '10'}).setToken(process.env.BOT_TOKEN_OWNERSHIP_VERIFY);
(async () => {
    try {
        await rest.put(Discord.Routes.applicationCommands(process.env.CLIENT_ID_OWNERSHIP_VERIFY), {body: commands});
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

export const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        // Discord.GatewayIntentBits.GuildMessages,
    ],
    partials: [Discord.Partials.Channel]
});
client.login(process.env.BOT_TOKEN_OWNERSHIP_VERIFY);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('ALICE Network', {type: Discord.ActivityType.Watching});
});

client.on('messageCreate', message => {
    if (message.author.id == 1066815385472602113)
        console.log("messageCreate");
    if (message.channel.type != Discord.ChannelType.DM)
        return;
    if (message.author.bot)
        return;
    message.reply(MSG_INSTRUCTIONS);
});

client.on('interactionCreate', async (interaction) => {
    try {
        if (!interaction.isChatInputCommand() && !interaction.isButton()) return;
        if (interaction.channel.type != Discord.ChannelType.DM)
            return await interaction.reply("This command can only be used in DMs");
        if (interaction.commandName === 'ping') {
            await interaction.reply('Pong!');
        } else if (interaction.commandName === 'setid') {
            setid.setidCommandHandler(interaction)
        } else if (interaction.commandName === 'info') {
            console.log("123");
            info.myInfoCommand(interaction)
        }
    } catch (e) {
        console.log(e);
    }
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
    MessageManager.sendMessageToDiscordId(client, userId, message)
}

export function init() {
    console.log("init discord bot");
}

async function setNickname() {
    let nodesCount = Monitor.getNodesCount();
    if (!nodesCount) return;
    let nickname = nodesCount + " Running Nodes";
    client.guilds.cache.forEach((guild) => {
        guild.members.cache.get(client.user.id).setNickname(nickname);
    });
}

setInterval(setNickname, 60000);