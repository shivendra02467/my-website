const addMessage = require('../models/messageModel');

const createMessage = async (req, res) => {
    const db = req.app.locals.db;

    try {
        const newMessage = req.body;
        const messageId = await addMessage(db, newMessage);
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
};

module.exports = createMessage;