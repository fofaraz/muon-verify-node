import * as DiscordBot from './DiscordBot.js';
import mongoose from "mongoose"

export default async (_nitroApp) => {
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
    })
        .then(() => {
            console.log("Connected to Mongodb")
        })
        .catch((err) => {
            console.error("Error connecting to Mongodb\n\n", err)
        });
}