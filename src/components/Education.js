import React from 'react';
import './Education.css';
import school1 from '../assets/school1.jpg'; // Adjust the path as needed
import school2 from '../assets/school2.png'; // Adjust the path as needed
import school3 from '../assets/school3.png'; // Adjust the path as needed

const Education = () => {
    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="education-item">
                <img src={school1} alt="Collège de Paris" className="school-image" />
                <h3>Master of Technology - MTech, Cybersecurity</h3>
                <p>Collège de Paris- Tunis, Tunisia</p>
                <p className="date">September 2023 - June 2025</p>
            </div>
            <div className="education-item">
                <img src={school3} alt="TEK-UP" className="school-image" />
                <h3>Diplôme d'ingénieur, Technologie informatique / technologie des systèmes informatiques</h3>
                <p>TEK-UP- Ariana, Tunisia </p>
                <p className="date">October 2020 - June 2023</p>
            </div>
            <div className="education-item">
                <img src={school2} alt="Faculté Privée des Sciences de Gestion et de Technologie" className="school-image" />
                <h3>Licence, Administration réseaux et service</h3>
                <p>Faculté Privée des Sciences de Gestion et de Technologie- Ben Arous, Tunisia</p>
                <p className="date">2016 - 2020</p>
            </div>
        </section>
    );
};

export default Education;