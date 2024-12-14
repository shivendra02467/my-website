const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = 5000;

(async () => {
    const db = await connectDB();

    app.locals.db = db;

    app.use('/api', projectRoutes);
    app.use('/api', messageRoutes);

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})();
