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
    },

    getAllGroupsOfUser: async () => {
        let query = "SELECT * FROM grouping_by_user WHERE user_id = 4";

        console.log("\nExecuting get all groups of group (user id = 4):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    createGroup: async () => {

        let id = await execute.incrementID('group', 1);

        console.log(`\nExecuting creating new group (new id = ${id}):`);
        console.log("-----------------------");

        let query = `INSERT INTO group_by_id (group_id, group_name, is_public) VALUES (${id}, 'Nauja grupe', true) IF NOT EXISTS`

        await execute.executeQueryWithStatusAsync(query);

        query = `INSERT INTO group_by_privacy (group_id, group_name, is_public) VALUES (${id}, 'Nauja grupe', true) IF NOT EXISTS`

        await execute.executeQueryWithStatusAsync(query);
    }
}
