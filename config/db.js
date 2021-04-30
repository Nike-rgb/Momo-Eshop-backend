const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb+srv://nike:nike@cluster1.vr80o.gcp.mongodb.net/Pizza?retryWrites=true&w=majority', {
    useUnifiedTopology : true,
});

module.exports = async function () {
    try {
        await client.connect();
        console.log("Connected to the database");
        //create a new database
        const database = client.db('MongoDbNative');
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }   
}