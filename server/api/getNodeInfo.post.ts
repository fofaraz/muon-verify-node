export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let nodeInfo = {
        nodeId: body.nodeId,
        address: "0xaA9751eEC583683897b24301a18507590e107b9e"
    };
    return nodeInfo;
})