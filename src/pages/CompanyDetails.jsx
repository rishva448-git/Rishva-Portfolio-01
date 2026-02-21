import { CheckCircle2, TrendingUp, Users, Shield } from 'lucide-react';
import './CompanyDetails.css';

const CompanyDetails = () => {
    return (
        <section id="company" className="section padding-top-lg bg-tertiary">
            <div className="container">
                <div className="company-hero animate-fade-in">
                    <div className="company-badge">About The Company</div>
                    <h1 className="section-title">
                        Techveons <span>Creations</span>
                    </h1>
                    <p className="company-mission">
                        "To deliver innovative, scalable, and beautifully designed technology solutions
                        that empower businesses to thrive in the digital age."
                    </p>
                </div>

                <div className="company-details-grid animate-fade-in delay-200">
                    {/* Left Column: Quick Facts */}
                    <div className="company-facts">
                        <h3 className="sidebar-title">Company Overview</h3>
                        <ul className="facts-list">
                            <li>
                                <span className="fact-label">Company Name:</span>
                                <span className="fact-value">Techveons Creations</span>
                            </li>
                            <li>
                                <span className="fact-label">Founder &amp; CEO:</span>
                                <span className="fact-value">Rishva ArunKumar</span>
                            </li>
                            <li>
                                <span className="fact-label">Industry:</span>
                                <span className="fact-value">IT &amp; Digital Services</span>
                            </li>
                            <li>
                                <span className="fact-label">Founded:</span>
                                <span className="fact-value">2026</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Core Values */}
                    <div className="company-values">
                        <h3 className="values-title">Why Choose Us?</h3>
                        <div className="values-grid">
                            <div className="value-item">
                                <div className="value-icon"><TrendingUp size={24} /></div>
                                <div>
                                    <h4>Future-Ready Solutions</h4>
                                    <p>We build with scalability and the future in mind.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon"><Shield size={24} /></div>
                                <div>
                                    <h4>Premium Quality</h4>
                                    <p>Uncompromising standards in code and design.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon"><Users size={24} /></div>
                                <div>
                                    <h4>Client-Centric Approach</h4>
                                    <p>Your success is our primary metric.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon"><CheckCircle2 size={24} /></div>
                                <div>
                                    <h4>End-to-End Delivery</h4>
                                    <p>From concept to deployment, we handle it all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyDetails;
