import React from 'react';
import './Certifications.css';
import certification1 from '../assets/certification1.png'; // Adjust the path as needed
import certification2 from '../assets/certification2.jpg'; // Adjust the path as needed 
import certification3 from '../assets/certification3.jpg'; // Adjust the path as needed
import certification4 from '../assets/certification4.jpg'; // Adjust the path as needed

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                <div className="certification-item">
                    <img src={certification2} alt="Certification 1" className="certification-image" />
                    <h3>Oracle Certified OCI Foundation Associate</h3>
                    <p>Oracle</p>
                    <p className="date">June 2023</p>
                </div>
                <div className="certification-item">
                    <img src={certification3} alt="Certification 2" className="certification-image" />
                    <h3>Cybersecurity Engineering Virtual Internship Program</h3>
                    <p>CFSS Cyber & Forensics Security Solutions</p>
                    <p className="date">November 2023</p>
                </div>
                <div className="certification-item">
                    <img src={certification1} alt="Certification 2" className="certification-image" />
                    <h3>CCNP: Core Networking</h3>
                    <p>Cisco</p>
                    <p className="date">June 2025</p>
                </div>
                <div className="certification-item">
                    <img src={certification1} alt="Certification 3" className="certification-image" />
                    <h3>CCNP: Advanced network</h3>
                    <p>Cisco</p>
                    <p className="date">June 2025</p>
                </div>
                <div className="certification-item">
                    <img src={certification4} alt="Certification 3" className="certification-image" />
                    <h3>Certified Chaos Engineering</h3>
                    <p>Gremlin</p>
                    <p className="date">September 2023</p>
                </div>
                <div className="certification-item">
                    <img src={certification1} alt="Certification 4" className="certification-image" />
                    <h3>Cisco Certified Network Associate </h3>
                    <p>Cisco</p>
                    <p className="date">March 2019</p>
                </div>
            </div>
        </section>
    );
};

export default Certifications;