import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'Projects - Shivendra Sharma';
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log('Error fetching projects: ', err));
    }, []);

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsPage;