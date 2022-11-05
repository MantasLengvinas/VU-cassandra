let execute = require("./executeQuery.js")

module.exports = {
    getAllChatRooms: async () => {
        let query = "SELECT * FROM chatRoom";
        
        console.log("\nExecuting get all chat rooms:");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getChatRoomsOfGroup: async () => {
        let query = "SELECT * FROM chatroom_by_group WHERE group_id = 1";
        
        console.log("\nExecuting get chat rooms of group (group id = 1):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getTextOnlyChatRooms: async () => {
        let query = "SELECT * FROM chatroom_by_type WHERE text_only = true";
        
        console.log("\nExecuting text only chat rooms:");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    }
}