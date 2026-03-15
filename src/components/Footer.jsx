import { Code2, Github, Twitter, Linkedin, Mail, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="footer-logo">
                            <span>Gurudharanitharan<span>.</span></span>
                        </a>
                        <p className="footer-description">
                            Innovative technology solutions, web development, and digital services led by Gurudharanitharan.
                        </p>
                        <div className="social-links hero-socials" style={{ marginBottom: 0 }}>
                            <a href="https://www.instagram.com/techveons.creation.official?igsh=MXNweGZ1cDN0YzZjZg==" className="social-icon-glow instagram" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/guru-j-9b2b223a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon-glow linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                            <a href="https://www.facebook.com/profile.php?id=61587879343997" className="social-icon-glow facebook" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
                            <a href="https://youtube.com/@techveons?si=Vv9lbqZosytiUBXz" className="social-icon-glow youtube" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
                            <a href="https://github.com/gurudev-ops" className="social-icon-glow github" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
                            <a href="https://wa.me/9894808756" className="social-icon-glow whatsapp" aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Gurudharanitharan</a></li>
                            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>IT Services</a></li>
                            <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Our Works</a></li>
                            <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Web Development</a></li>
                            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>App Development</a></li>
                            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Graphic Design</a></li>
                            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Video Editing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Techveons Creations. All rights reserved.</p>
                    <p>Co-Founder &amp; CTO: Gurudharanitharan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
