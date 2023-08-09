import {Schema, model} from "mongoose"

let schema = new Schema(
    {
        message: String,
        discordUserId: String,
        hasError: {type: Boolean, default: false},
        hasMessage: String
    },
    {timestamps: true}
);


export default model<any>("message_logs", schema);