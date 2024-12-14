const getProjects = require('../models/projectModel');

const fetchProjects = async (req, res) => {
    const db = req.app.locals.db;
    try {
        const projects = await getProjects(db);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

module.exports = fetchProjects;
