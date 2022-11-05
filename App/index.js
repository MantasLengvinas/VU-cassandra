const cassandra = require('cassandra-driver');
const fs = require('fs');

const queryPath = '../CQL/';
const querySubFolders = ['Message', 'ChatRoom', 'User', 'Group', 'Grouping'];

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'Chat',
});

let main = async () => {
    
    var data = {};
    readFiles(queryPath + querySubFolders[0], 
    function(filename, content) {
        data[filename] = content;
        }, function(err) {
            throw err;
            });
    console.log(data);
    try {
    
    client.connect();

    // Cia tik testuo, tai krc reikia funkcijos, kuri callina querius, 
    // ir tada queriai bus funkcijos, kurios tures param client tada grazint tsg rezultata ir printins cia
    
    const result = await client.execute("SELECT * FROM user");
    result.rows.forEach((row) => console.log({ ...row }));

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