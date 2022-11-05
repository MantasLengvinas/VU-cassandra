const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'Chat',
});

module.exports = {
    executeQueryAsync: async (query) => {
        client.connect();
    
        let result = await client.execute(query);
        result.rows.forEach((row) => console.log({ ...row }));
    }
}
