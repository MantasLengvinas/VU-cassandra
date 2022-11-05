const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'Chat',
});

let main = async () => {
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