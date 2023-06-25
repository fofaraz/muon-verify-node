import {Schema, model} from "mongoose"

let schema = new Schema(
    {
        discordUserId: String,
        address: String
    },
    {timestamps: true}
);


export default model<any>("presale_verify", schema);