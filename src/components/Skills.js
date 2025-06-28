import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Database Management</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Cybersecurity</h3>
                    <ul>
                        <li>Network Security</li>
                        <li>Digital Forensics</li>
                        <li>Incident Response</li>
                        <li>Threat Detection</li>
                        <li>Secure API Development</li>
                        <li>Authentication</li>
                        <li>Role-Based Access Control</li>
                        <li>Cryptography</li>
                        <li>Cloud Security</li>
                        <li>Secure Software Development</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Networking</h3>
                    <ul>
                        <li>Network Administration</li>
                        <li>Network Design</li>
                        <li>Access Control</li>
                        <li>User Rights Management</li>
                        <li>Centralized Platform Management</li>
                        <li>Secure Remote Access</li>
                        <li>High Availability</li>
                        <li>Service Continuity</li>
                        <li>Attack Detection</li>
                        <li>Prevention Systems</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Cloud Computing</h3>
                    <ul>
                        <li>Oracle Cloud Infrastructure</li>
                        <li>Cloud Computing Fundamentals</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Cross-Functional Team Collaboration</li>
                        <li>Advanced English Communication Skills</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;