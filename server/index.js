import * as DiscordBot from './DiscordBot.js';
import * as DiscordBotOwnershipVerify from './DiscordBotOwnershipVerify.js';
import * as DiscordBotPrice from './DiscordBotPrice.js';
import mongoose from "mongoose"


export default async (_nitroApp) => {
    DiscordBot.init();
    DiscordBotOwnershipVerify.init();
    DiscordBotPrice.init();
    mongoose.connect(process.env.DB)
        .then(() => {
            console.log("Connected to Mongodb")
        })
        .catch((err) => {
            console.error("Error connecting to Mongodb\n\n", err)
        });
}