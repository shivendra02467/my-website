import React, { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Shivendra Sharma';
    }, []);
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
        </div>
    );
};

export default HomePage;

