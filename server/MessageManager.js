import MessageLogs from "./models/MessageLogs";

export async function sendMessageToDiscordId(client, discordUserId, message) {
    let messageLog = await MessageLogs.create({discordUserId, message});
    return await client.users.fetch(discordUserId, false)
        .then((user) => {
            return user.send(message);
        })
        .catch(async e => {
            messageLog.hasError = true;
            messageLog.hasMessage = e.message;
            await messageLog.save();
        });
};