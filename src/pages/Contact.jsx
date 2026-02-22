import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus({ type: 'error', message: 'Failed to connect to the server.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section padding-top-lg">
            <div className="container">
                <div className="text-center animate-fade-in">
                    <h1 className="section-title">
                        Get In <span>Touch</span>
                    </h1>
                    <p className="services-subtitle">
                        Have a project in mind? Let's discuss how we can help you achieve your goals.
                    </p>
                </div>

                <div className="contact-container animate-fade-in delay-200">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="sidebar-title">Contact Information</h3>
                        <p className="contact-description">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <ul className="contact-list">
                            <li>
                                <div className="contact-icon"><Mail size={20} /></div>
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a
                                        href="mailto:techveons.creation.official@gmail.com"
                                        className="contact-link contact-light"
                                        style={{ fontSize: '0.9rem' }}
                                        onClick={(e) => {
                                            // let mailto work as normal but also focus form email input
                                            const emailInput = document.getElementById('email');
                                            if (emailInput) {
                                                e.preventDefault();
                                                const formTop = document.querySelector('.contact-form-wrapper');
                                                if (formTop) {
                                                    window.scrollTo({ top: formTop.offsetTop - 80, behavior: 'smooth' });
                                                }
                                                emailInput.focus();
                                                // also set value if empty
                                                if (!emailInput.value) emailInput.value = 'rishva@example.com';
                                            }
                                        }}
                                    >techveons.creation.official@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon"><Phone size={20} /></div>
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+918270532283" className="contact-link">+91 8270532283</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon"><MapPin size={20} /></div>
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span className="contact-link">Tiruppur, Tamil Nadu, India</span>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon"><Mail size={20} /></div>
                                <div>
                                    <span className="contact-label">Representative</span>
                                    <button
                                        className="contact-link contact-light contact-name-button"
                                        onClick={(e) => {
                                            const nameInput = document.getElementById('name');
                                            if (nameInput) {
                                                e.preventDefault();
                                                const formTop = document.querySelector('.contact-form-wrapper');
                                                if (formTop) {
                                                    window.scrollTo({ top: formTop.offsetTop - 80, behavior: 'smooth' });
                                                }
                                                nameInput.focus();
                                                if (!nameInput.value) nameInput.value = 'Rishva';
                                            }
                                        }}
                                    >Rishva</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required></textarea>
                            </div>

                            {status.message && (
                                <div className={`form-status ${status.type}`} style={{ marginBottom: '1rem', color: status.type === 'error' ? 'red' : 'green' }}>
                                    {status.message}
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
