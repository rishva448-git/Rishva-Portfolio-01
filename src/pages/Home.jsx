import { ArrowRight, Code, Gem, Rocket, Instagram, Linkedin, Facebook, Youtube, MessageCircle, Github } from 'lucide-react';
import './Home.css';

const Home = () => {
    const scrollToProjects = (e) => {
        e.preventDefault();
        const element = document.querySelector('#projects');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-background">
                    <div className="glow-orb orb-1"></div>
                    <div className="glow-orb orb-2"></div>
                </div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge animate-fade-in">
                            <span className="live-dot"></span> Techveons Creations
                        </div>
                        <h1 className="hero-title animate-fade-in delay-100">
                            Hi, I'm <span className="highlight">Rishva</span>
                        </h1>
                        <h2 className="hero-subtitle animate-fade-in delay-200">
                            Founder & CEO — Techveons Creations
                        </h2>
                        <p className="hero-description animate-fade-in delay-300">
                            Building innovative technology solutions with a passion for web development,
                            digital branding, and scalable applications. Let's create something extraordinary.
                        </p>

                        <div className="hero-socials animate-fade-in delay-300">
                            <a href="https://www.instagram.com/techveons.creation.official?igsh=MXNweGZ1cDN0YzZjZg==" className="social-icon-glow instagram" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/techveons-creation-0184193ab/" className="social-icon-glow linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                            <a href="https://www.facebook.com/profile.php?id=61587879343997" className="social-icon-glow facebook" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
                            <a href="https://youtube.com/@techveons?si=Vv9lbqZosytiUBXz" className="social-icon-glow youtube" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
                            <a href="https://github.com/rishva448-git" className="social-icon-glow github" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
                            <a href="https://wa.me/918270532283" className="social-icon-glow whatsapp" aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
                        </div>

                        <div className="hero-actions animate-fade-in delay-400">
                            <a href="https://whatsapp.com/channel/0029Vb7hcnoEVccIiDl8kY2B" target="_blank" rel="noreferrer" className="btn btn-primary btn-glow whatsapp-btn">
                                Join channel <ArrowRight size={18} />
                            </a>
                            <a href="#contact" onClick={scrollToContact} className="btn btn-secondary">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual animate-fade-in delay-300">
                        <img src="/techveons-logo-main.jpg" alt="Techveons Logo" className="hero-image-no-frame" />
                    </div>
                </div>
            </div>

            {/* Quick Stats/Info Section */}
            <div className="section bg-tertiary">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3 className="stat-number">17</h3>
                            <p className="stat-label">Years Old Entrepreneur</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">6+</h3>
                            <p className="stat-label">Core Digital Services</p>
                        </div>
                        <div className="stat-card">
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
