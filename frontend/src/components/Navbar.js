import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={styles.nav}>
        <div style={styles.leftAligned}>
            <h1 style={styles.name}>Shivendra Sharma</h1>
        </div>
        <div style={styles.rightAligned}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <Link to="/cv" style={styles.link}>CV</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
    </nav>
);

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
        color: 'white',
        padding: '10px 20px',
    },
    leftAligned: {
        flex: 1,
    },
    name: {
        margin: 0,
        fontSize: '24px',
    },
    rightAligned: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Navbar;

