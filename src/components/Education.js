import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="education-item">
                <h3>Master of Technology - MTech, Cybersecurity</h3>
                <p>Collège de Paris</p>
                <p className="date">September 2023 - June 2025</p>
            </div>
            <div className="education-item">
                <h3>Diplôme d'ingénieur, Technologie informatique / technologie des systèmes informatiques</h3>
                <p>TEK-UP</p>
                <p className="date">October 2020 - June 2023</p>
            </div>
            <div className="education-item">
                <h3>Licence, Administration réseaux et service</h3>
                <p>Faculté Privée des Sciences de Gestion et de Technologie</p>
                <p className="date">2016 - 2020</p>
            </div>
        </section>
    );
};

export default Education;