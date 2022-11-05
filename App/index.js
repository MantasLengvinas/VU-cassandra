let groupsQueries = require("../Queries/group.js")

let main = async () => {

    try {
    
        await groupsQueries.getGroupById();
        await groupsQueries.getGroupByPrivacy();
        await groupsQueries.getAllMembersInGroup();
    }
    catch(err) {
        console.log(err);
    }
}

main();
