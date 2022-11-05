let groupsQueries = require("../Queries/group.js")
let chatroomQueries = require("../Queries/chatroom.js")

let main = async () => {

    try {
    
        await groupsQueries.getGroupById();
        await groupsQueries.getGroupByPrivacy();
        await groupsQueries.getAllMembersInGroup();
        await groupsQueries.getAllGroupsOfUser();
        //await groupsQueries.createGroup();

        await chatroomQueries.getAllChatRooms();
        await chatroomQueries.getChatRoomsOfGroup();
        await chatroomQueries.getTextOnlyChatRooms();
    }
    catch(err) {
        console.log(err);
    }
}

main();
