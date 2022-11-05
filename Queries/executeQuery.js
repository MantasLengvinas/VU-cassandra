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
    },

    executeQueryWithStatusAsync: async (query, table) => {
        client.connect();

        await client.execute(query, (err, result) => {
            if(err) {
                this.incrementID(table, -1);
                console.log("Failed to insert \n-----------------------");
                console.log(err);
                return;
            }
            else {
                console.log(`Record in ${table} has been created`);
            }
        })
    },

    incrementID: async (table, increment) => {
        client.connect();

        let query = `SELECT latest_id FROM table_ids WHERE table_ = '${table}';`;
        let result = await client.execute(query);
        let id = result.first()['latest_id'];
        let newId = parseInt(id) + parseInt(increment);
        query = `UPDATE table_ids SET latest_id = ${parseInt(newId)} WHERE table_ = '${table}' IF latest_id = ${id};`;
        client.execute(query);
        return newId;
    }
}
