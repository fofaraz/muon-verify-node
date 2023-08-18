import DiscordUser from "../models/DiscordUser";
import * as Monitor from "../Monitor";
import * as Discord from "discord.js";

export const setIdCommand = new Discord.SlashCommandBuilder()
    .setName('setid')
    .setDescription("Set your node's ID")
    .addStringOption(option =>
        option.setName('id')
            .setDescription("Your node's ID number")
            .setRequired(true));

export async function setidCommandHandler(interaction) {
    await interaction.reply('Setting your node ID ...');
    let id = interaction.options.get("id").value;
    let userId = interaction.user.id;

    id = id.trim();

    if (!id || id != parseInt(id)) {
        await interaction.followUp("Please enter your node's ID number");
        return;
    }

    await interaction.followUp('Your node ID is set to ' + id);
    let nodeInfo = await Monitor.getNodeInfo(id);
    if (!nodeInfo)
        return await interaction.followUp(":warning: Node not found");

    let message = ":white_check_mark: Your node successfully discovered." +
        "\nAddress: " + nodeInfo.nodeAddress +
        "\nPeer ID: " + nodeInfo.peerId +
        "\nStaker: " + nodeInfo.stakerAddress;


    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel('Verify')
                .setStyle(Discord.ButtonStyle.Link)
                .setURL(`https://discord-bot.muon.net/verify-ownership?nodeId=${id}&discordId=${userId}`)
        );

    message += "\n\nUse the following button to verify ownership of your node";
    await interaction.followUp({
        content: message,
        components: [row]
    });


    let newState = await Monitor.getNewState(id);
    let query = {discordUserId: userId};
    let update = {nodeId: id, lastPeerState: newState, muonVersion: 2, verified: false};
    let options = {upsert: true, new: true, setDefaultsOnInsert: true};
    await DiscordUser.findOneAndUpdate(query, update, options);

};