import StatusLogs from "../models/StatusLogs";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    let logs = StatusLogs.find(query).sort("-_id");
    return logs;
})