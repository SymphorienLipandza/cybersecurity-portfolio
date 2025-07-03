import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">Symphorien Lipandza</Link>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/certifications">Certifications</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </header>
    );
};

export default Header;