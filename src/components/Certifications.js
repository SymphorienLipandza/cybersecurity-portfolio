import React from 'react';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                <div className="certification-item">
                    <h3>Oracle Certified OCI Foundation Associate</h3>
                    <p>Oracle</p>
                    <p className="date">June 2024</p>
                </div>
                <div className="certification-item">
                    <h3>Cybersecurity Engineering Virtual Internship Program</h3>
                    <p>CFSS Cyber & Forensics Security Solutions</p>
                    <p className="date">November 2023</p>
                </div>
                <div className="certification-item">
                    <h3>CCNP: Core Networking</h3>
                    <p>Cisco</p>
                    <p className="date">October 2023</p>
                </div>
                <div className="certification-item">
                    <h3>EF SET English Certificate 70/100 (C1 Advanced)</h3>
                    <p>EF Standard English Test</p>
                    <p className="date">September 2023</p>
                </div>
                <div className="certification-item">
                    <h3>Cisco Certified Network Associate (CCNA I)</h3>
                    <p>Cisco</p>
                    <p className="date">July 2023</p>
                </div>
            </div>
        </section>
    );
};

export default Certifications;