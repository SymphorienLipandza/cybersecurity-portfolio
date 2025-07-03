import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: <a href="mailto:symphorienlipandza@gmail.com">symphorienlipandza@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank">Symphorien Lipandza</a></p>
                    <p>GitHub: <a href="https://github.com/symphorienlipandza" target="_blank">symphorienlipandza</a></p>
                </div>
                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="social-icons">
                        <a href="https://github.com/symphorienlipandza" target="_blank" rel="noreferrer">
                            <FaGithub size={24} color="#fff" />
                        </a>
                        <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank" rel="noreferrer">
                            <FaLinkedin size={24} color="#fff" />
                        </a>
                        <a href="https://medium.com/@symphorienlipandza_95403" rel="noreferrer" target="_blank">
                            <FaMedium size={24} color="#fff" />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/experience">Experience</a></li>
                        <li><a href="/education">Education</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/certifications">Certifications</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Symphorien Lipandza. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;