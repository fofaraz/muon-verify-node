import PresaleVerify from "../models/PresaleVerify"
export default defineEventHandler(async(event) => {
    let presaleVerify = await PresaleVerify.find({});
    return presaleVerify
})

