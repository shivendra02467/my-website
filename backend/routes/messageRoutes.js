const express = require('express');
const createMessage = require('../controllers/messageController');

const router = express.Router();

router.post('/messages', express.json(), createMessage);

module.exports = router;