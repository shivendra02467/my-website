const getProjects = async (db) => {
    return await db.collection('projects').find().toArray();
};

module.exports = getProjects;