import {Schema, model} from "mongoose"

let schema = new Schema(
    {
        nodeId: Number,
        discordUserId: String,
        status: String,
        isReminderSent: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);


export default model<any>("status_logs", schema);