import React from 'react';
import './Projects.css';
import elderee from '../assets/elderee.jpg';
import cyberForensics from '../assets/cyber-forensics.jpg';
import bloodBank from '../assets/blood-bank.png';
import dataAnalytics from '../assets/data-analytics.png';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project">
                    <img src={elderee}  alt="backend development for Elderee" />
                    <h3>Secure Backend Development for Elderee</h3>
                    <p>Built secure APIs using TypeScript and NestJS, designed MongoDB schemas for health tracking and social features, and implemented authentication and role-based access control.</p>
                    <p className="tech-stack">Technologies: TypeScript, NestJS, MongoDB, JWT</p>
                    <a href="https://github.com/symphorienlipandza/elderee-backend" target="_blank" className="project-link">View Details</a>
                </div>
                <div className="project">
                    <img src={cyberForensics} alt="Dital Forensics Internship" />
                    <h3>Cybersecurity and Digital Forensics Internship</h3>
                    <p>Assisted in conducting digital forensics investigations and cybersecurity assessments, contributing to the identification and mitigation of security threats.</p>
                    <p className="tech-stack">Technologies: Wireshark, Kali Linux, Forensic Toolkit</p>
                    <a href="https://github.com/symphorienlipandza/cyber-forensics" target="_blank" className="project-link">View Details</a>
                </div>
                <div className="project">
                    <img src={bloodBank} alt="Gamified Task Management App" />
                    <h3>Blood Bank Application Development</h3>
                    <p>Developed a Django-based application for managing blood donations, including user authentication, donation tracking, and inventory management.</p>
                    <p className="tech-stack">Technologies: Django, Python, PostgreSQL</p>
                    <a href="https://github.com/symphorienlipandza/blood-bank-app" target="_blank" className="project-link">View Details</a>
                </div>
                <div className="project">
                    <img src={dataAnalytics} alt="Data Analytics and Visualization" />
                    <h3>Data Analytics and Visualization</h3>
                    <p>Completed a data analytics course covering data modeling, business fundamentals, data visualization, and SQL. Utilized tools like Lucid Chart, Dbdiagram.io, and Excel.</p>
                    <p className="tech-stack">Technologies: Lucid Chart, Dbdiagram.io, Excel, SQL</p>
                    <a href="https://github.com/symphorienlipandza/data-analytics" target="_blank" className="project-link">View Details</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;