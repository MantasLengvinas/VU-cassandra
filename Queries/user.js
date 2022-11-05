let execute = require("./executeQuery.js")

module.exports = {

    getUserById: async () => {
        let query = "SELECT * FROM user WHERE user_id = 1";
        
        console.log("\nExecuting get users by id (id = 1):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getUserByEmail: async () => {
        let query = "SELECT * FROM user_by_email WHERE email = 'kitsmnts@mnts.com'";

        console.log("\nExecuting get users by email (email = kitsmnts@mnts.com):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    },

    getUserByPhone: async () => {
        let query = "SELECT * FROM user_by_phone WHERE phone = '+37000000004'";

        console.log("\nExecuting get users by phone (phone = +37000000004):");
        console.log("-----------------------");
        await execute.executeQueryAsync(query);
    }
}
