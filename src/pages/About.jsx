import { User, Briefcase, Zap, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section padding-top-lg">
            <div className="container">
                <div className="about-content">
                    <div className="about-text animate-fade-in">
                        <h1 className="section-title text-left">
                            <span>About</span>
                        </h1>
                        <h2 className="about-subtitle">
                            17-Year-Old Entrepreneur & Tech Visionary
                        </h2>
                        <div className="about-paragraphs">
                            <p>
                                As the Founder and CEO of Techveons Creations, I am deeply passionate about
                                the intersection of technology, business, and creativity. At just 17 years old,
                                I set out to build a company that delivers premium digital solutions to brands
                                worldwide.
                            </p>
                            <p>
                                My journey started with a fascination for code and design. Over the years, I've
                                honed my skills in web development, application creation, and digital branding.
                                Techveons Creations is the realization of my vision: to provide cutting-edge IT
                                services that help businesses scale in the digital era.
                            </p>
                            <p>
                                Beyond the code, I believe in leading with innovation and continuously exploring
                                the frontiers of emerging technologies. When I'm not architecting new platforms,
                                I explore the creative intersections of graphic design, video production, and content creation.
                            </p>
                        </div>
                    </div>

                    <div className="about-visual animate-fade-in delay-200">
                        <div className="about-cards-grid">
                            <div className="about-card">
                                <div className="card-icon"><Briefcase size={28} /></div>
                                <h3>Leadership</h3>
                                <p>Guiding Techveons with strategic vision</p>
                            </div>
                            <div className="about-card mt-card">
                                <div className="card-icon"><User size={28} /></div>
                                <h3>Entrepreneur</h3>
                                <p>Building businesses since age 17</p>
                            </div>
                            <div className="about-card">
                                <div className="card-icon"><Zap size={28} /></div>
                                <h3>Innovation</h3>
                                <p>Passionate about bleeding-edge tech</p>
                            </div>
                            <div className="about-card mt-card">
                                <div className="card-icon"><Globe size={28} /></div>
                                <h3>Creativity</h3>
                                <p>Fusing design with technical logic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
