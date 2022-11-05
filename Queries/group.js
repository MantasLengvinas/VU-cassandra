let execute = require("./executeQuery.js")

module.exports = {

    getGroupById: async () => {
        let query = "SELECT * FROM group_by_id WHERE group_id = 1";
        
        console.log("\nExecuting get groups by id (id = 1):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getGroupByPrivacy: async () => {
        let query = "SELECT * FROM group_by_privacy WHERE is_public = false";

        console.log("\nExecuting get groups by privacy (private groups only):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getAllMembersInGroup: async () => {
        let query = "SELECT * FROM grouping_by_group WHERE group_id = 1";

        console.log("\nExecuting get all members in group (group id = 1):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    }
}
