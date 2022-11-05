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

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
          if (err) {
            onError(err);
            return;
          }
          onFileContent(filename, content);
        });
      });
    });
  }