let execute = require("./executeQuery.js")

module.exports = {

    getMessageById: async () => {
        let query = "SELECT * FROM message WHERE message_id = 1";
        
        console.log("\nExecuting get messages by id (id = 1):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getMessageByAuthor: async () => {
        let query = "SELECT * FROM message_by_author WHERE author_id = 3";

        console.log("\nExecuting get messages by author (author_id = 3):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getMessageByChatroom: async () => {
        let query = "SELECT * FROM message_by_chatroom WHERE chatroom_id = 2";

        console.log("\nExecuting get messages by chatroom (chatroom_id = 2):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getMessageBetween: async () => {
        let query = "SELECT * FROM message_by_timestamp WHERE chatroom_id = 1 AND sent > '2022-11-05 13:00' AND sent < '2022-11-05 14:00'";

        console.log("\nExecuting get messages in chatroom between times (chatroom_id = 1 and messages sent between 2022-11-05 13:00 and 2022-11-05 14:00 (not inclusive)):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    }
}
