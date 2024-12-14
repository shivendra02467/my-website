import React, { useEffect } from 'react';

const CVPage = () => {
    useEffect(() => {
        document.title = 'CV - Shivendra Sharma';
    }, []);
    return (
        <div>
            <h1>Curriculum Vitae</h1>
            <p>Download my CV <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    );
};

export default CVPage;

