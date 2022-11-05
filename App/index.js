let groupsQueries = require("../Queries/group.js");
let userQueries = require("../Queries/user.js");
let messageQueries = require("../Queries/message.js");
let groupsQueries = require("../Queries/group.js")
let chatroomQueries = require("../Queries/chatroom.js")


let main = async () => {

    try {
    
        await groupsQueries.getGroupById();
        await groupsQueries.getGroupByPrivacy();
        await groupsQueries.getAllMembersInGroup();
        await groupsQueries.getAllGroupsOfUser();
        //await groupsQueries.createGroup();
        
        await userQueries.getUserById();
        await userQueries.getUserByEmail();
        await userQueries.getUserByPhone();
        await messageQueries.getMessageById();
        await messageQueries.getMessageByAuthor();
        await messageQueries.getMessageByChatroom();
        await messageQueries.getMessageBetween();

        await chatroomQueries.getAllChatRooms();
        await chatroomQueries.getChatRoomsOfGroup();
        await chatroomQueries.getTextOnlyChatRooms();

    }
    catch(err) {
        console.log(err);
    }
}

main();
