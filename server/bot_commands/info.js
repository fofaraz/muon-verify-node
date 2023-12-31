import DiscordUser from "../models/DiscordUser";


export async function myInfoCommand(interaction) {
    console.log("myInfoCommand");
    await interaction.reply('Collecting your info...');

    let discordUserId = interaction.user.id;
    let discordUser = await DiscordUser.findOne({discordUserId: discordUserId});
    if (!discordUser)
        return interaction.followUp("No data registered for you. To get started, you can use </setid:1142717723407822930> command to set your node's ID");

    let message = "";
    message += "Node ID: " + discordUser.nodeId + "\n";
    message += "Peer Status: " + discordUser.lastPeerState + "\n";
    message += "Verified Node: " + (discordUser.verified ? ":white_check_mark:" : ":warning:") + "\n";
    return interaction.followUp(message);
};