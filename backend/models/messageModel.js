const addMessage = async (db, messageData) => {
    const result = await db.collection('messages').insertOne(messageData);
    return result.insertedId;
};

module.exports = addMessage;