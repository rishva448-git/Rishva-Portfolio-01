import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Projects', path: '#projects' },
        { name: 'Company', path: '#company' },
        { name: 'Contact', path: '#contact' },
    ];

    const scrollToSection = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-logo">
                    <span>Rishva ArunKumar<span>.</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.path}
                                    onClick={(e) => scrollToSection(e, link.path)}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-actions">
                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.path}
                                onClick={(e) => scrollToSection(e, link.path)}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
