import DiscordUser from "../models/DiscordUser";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    let discordUser = DiscordUser.find(query);
    return discordUser;
})