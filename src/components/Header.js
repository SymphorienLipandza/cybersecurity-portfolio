import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="logo">Symphorien Lipandza</Link>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;