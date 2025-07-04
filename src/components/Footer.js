import React from 'react';
import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><FaEnvelope size={24} color="#fff" /> Email: <a href="mailto:symphorienlipandza@gmail.com">symphorienlipandza@gmail.com</a></p>
                    <p><FaLinkedin size={24} color="#fff" /> LinkedIn: <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank" rel="noopener noreferrer">Symphorien Lipandza</a></p>
                    <p><FaGithub size={24} color="#fff" /> GitHub: <a href="https://github.com/symphorienlipandza" target="_blank" rel="noopener noreferrer">symphorienlipandza</a></p>
                </div>
                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="social-icons">
                        <a href="https://github.com/symphorienlipandza" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} color="#fff" />
                        </a>
                        <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color="#fff" />
                        </a>
                        <a href="https://medium.com/@symphorienlipandza_95403" target="_blank" rel="noopener noreferrer">
                            <FaMedium size={24} color="#fff" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Symphorien Lipandza. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;