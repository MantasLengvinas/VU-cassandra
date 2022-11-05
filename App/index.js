let groupsQueries = require("../Queries/group.js");
let userQueries = require("../Queries/user.js");
let messageQueries = require("../Queries/message.js");

let main = async () => {

    try {
    
        await groupsQueries.getGroupById();
        await groupsQueries.getGroupByPrivacy();
        await groupsQueries.getAllMembersInGroup();
        await userQueries.getUserById();
        await userQueries.getUserByEmail();
        await userQueries.getUserByPhone();
        await messageQueries.getMessageById();
        await messageQueries.getMessageByAuthor();
        await messageQueries.getMessageByChatroom();
        await messageQueries.getMessageBetween();
    }
    catch(err) {
        console.log(err);
    }
}

main();
