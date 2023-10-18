import {Schema, model} from "mongoose"

let schema = new Schema(
    {
        nodeId: Number,
        lastPeerState: String,
        discordUserId: String,
        lastStateChange: Date,
        lastCheck: Date,
        verified: {type: Boolean, default: false},
        sendMessage: {type: Number, default: 0},
        muonVersion: {type: Number, default: 0}
    },
    {timestamps: true}
);


export default model<any>("discord_users_pion", schema);