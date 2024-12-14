const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'mywebsiteDB';

const connectDB = async () => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
