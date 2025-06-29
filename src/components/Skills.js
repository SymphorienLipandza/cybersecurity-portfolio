import React from 'react';
import './Skills.css';
import programming from '../assets/programming.png';
import cybersecurity from '../assets/cybersecurity.png';
import networking from '../assets/networking.png';
import cloud from '../assets/cloud.png';
import softSkills from '../assets/soft-skills.png';
import database from '../assets/database.png'; // Added database image

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <img src={programming} alt="Programming Languages" className="skill-image" />
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>Bash</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <img src={cybersecurity} alt="Cybersecurity" className="skill-image" />
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
                        <li>Penetration Testing</li>
                        <li>Vulnerability Assessment</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <img src={networking} alt="Networking" className="skill-image" />
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
                        <li>VPN Configuration</li>
                        <li>Firewall Management</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <img src={cloud} alt="Cloud Computing" className="skill-image" />
                    <h3>Cloud Computing</h3>
                    <ul>
                        <li>Oracle Cloud Infrastructure</li>
                        <li>AWS (Amazon Web Services)</li>
                        <li>Microsoft Azure</li>
                        <li>Google Cloud Platform</li>
                        <li>Cloud Security</li>
                        <li>DevOps</li>
                        <li>CI/CD Pipelines</li>
                        <li>Serverless Architecture</li>
                        <li>Containerization (Docker, Kubernetes)</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <img src={database} alt="Database Management" className="skill-image" />
                    <h3>Database Management</h3>
                    <ul>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Oracle Database</li>
                        <li>Database Design</li>
                        <li>Database Optimization</li>
                        <li>Data Warehousing</li>
                        <li>Data Mining</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <img src={softSkills} alt="Soft Skills" className="skill-image" />
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Cross-Functional Team Collaboration</li>
                        <li>Advanced English Communication Skills</li>
                        <li>Problem Solving</li>
                        <li>Project Management</li>
                        <li>Time Management</li>
                        <li>Leadership</li>
                        <li>Adaptability</li>
                        <li>Attention to Detail</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;