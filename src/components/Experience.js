import React from 'react';
import './Experience.css';
import company1 from '../assets/company1.jpg'; // Adjust the path as needed
import company2 from '../assets/company2.jpg'; // Adjust the path as needed
import company3 from '../assets/company3.jpg'; // Adjust the path as needed
import company4 from '../assets/company4.jpg'; // Adjust the path as needed
import company5 from '../assets/company5.jpg'; // Adjust the path as needed


const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experience-item">
                <img src={company4} alt="Elderee" className="Elderee" />
                <h3>Backend Developer</h3>
                <p>Elderee</p>
                <p className="date">March 2025 - Present</p>
                <ul>
                    <li>Contributing to the back-end of a wellness and telehealth platform for retirees.</li>
                    <li>Built secure APIs using TypeScript and NestJS.</li>
                    <li>Designed MongoDB schemas for health tracking and social features.</li>
                    <li>Implemented authentication and role-based access control.</li>
                    <li>Supported SOS alerts and geofencing for elder safety.</li>
                    <li>Collaborated cross-functionally with the front-end and design teams.</li>
                </ul>
            </div>
            <div className="experience-item">
                <img src={company2} alt="Headstarter AI" className="Headstarter AI" />
                <h3>Software Engineering Fellow</h3>
                <p>Headstarter AI</p>
                <p className="date">July 2024 - August 2024</p>
                <ul>
                    <li>Created a  gamified task management app powered by AI </li>
                </ul>
            </div>
            <div className="experience-item">
                <img src={company5} alt="CFSS" className="company-image" />
                <h3>SOC Analyst Intern</h3>
                <p>CFSS Cyber & Forensics Security Solutions</p>
                <p className="date">November 2023</p>
                <ul>
                    <li>Monitored and analyzed security events to identify potential threats.</li>
                </ul>
            </div>
            <div className="experience-item">
                <img src={company1} alt="Company 1" className="company-image" />
                <h3>Cyber Security and Digital Forensics Intern</h3>
                <p>Cyber Secured India</p>
                <p className="date">August 2023 - October 2023</p>
                <ul>
                    <li>Assisted in conducting digital forensics investigations and cybersecurity assessments.</li>
                </ul>
            </div>
            <div className="experience-item">
                <img src={company3} alt="Company 1" className="company-image" />
                <h3>Analyste sécurité système</h3>
                <p>Tunisie Télécom</p>
                <p className="date">February 2020 - May 2020</p>
                <ul>
                    <li>Implemented access restrictions and secure internet access to minimize security risks.</li>
                    <li>Established user rights limitations based on user groups.</li>
                    <li>Set up centralized platform management and secure resource sharing for common projects.</li>
                    <li>Enabled secure remote access to company resources.</li>
                    <li>Ensured high availability and service continuity.</li>
                    <li>Implemented attack detection and prevention systems.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;