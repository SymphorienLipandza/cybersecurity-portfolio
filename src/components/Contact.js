import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://formspree.io/f/xanjazkd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        if (response.ok) {
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message!');
            setName('');
            setEmail('');
            setMessage('');
        }
        else {
            console.error('Error submitting form:', response.statusText);
            alert('There was an error submitting your message. Please try again later.');
        }
    
    };

    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <p>Feel free to reach out to me via email or connect with me on my professional profiles.</p>
            <div className="contact-info">
                <a href="mailto:symphorienlipandza@gmail.com" className="contact-link">
                    <FaEnvelope className="contact-icon" /> symphorienlipandza@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/symphorienlipandza" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaLinkedin className="contact-icon" /> LinkedIn
                </a>
                <a href="https://github.com/symphorienlipandza" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaGithub className="contact-icon" /> GitHub
                </a>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;