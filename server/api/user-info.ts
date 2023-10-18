import DiscordUser from "../models/DiscordUser";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let query = {};

    if (body && body.query)
        query = body.query;

    let discordUser = DiscordUser.find(query);
    return discordUser;
})