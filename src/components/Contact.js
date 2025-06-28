import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <p>Feel free to reach out to me via email or connect with me on my professional profiles.</p>
            <div className="contact-info">
                <a href="mailto:symphorienlipandza@gmail.com" className="contact-link">
                    <i className="fas fa-envelope"></i> symphorienlipandza@gmail.com
                </a>
                <br />
                <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank" className="contact-link">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <br />
                <a href="https://github.com/symphorienlipandza" target="_blank" className="contact-link">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <br />
                {/* Add other profiles or contact methods here */}
            </div>
        </section>
    );
};

export default Contact;