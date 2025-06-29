import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.jpg'; // Adjust the path as needed

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content">
                <img src={profilePhoto} alt="Symphorien Lipandza" className="profile-photo" />
                <h1>Symphorien Lipandza</h1>
                <h2>Cybersecurity Analyst | Network Administrator | IT Support | Backend Developer</h2>
                <p>Cybersecurity professional with hands-on experience in network security, backend development, and system architecture.</p>
                <a href="#experience" className="cta-button">View My Experience</a>
            </div>
        </section>
    );
};

export default Hero;