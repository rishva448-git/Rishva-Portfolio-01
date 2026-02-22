import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
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

    // initialize theme from localStorage or system preference
    useEffect(() => {
        const root = document.documentElement;
        const stored = localStorage.getItem('theme');
        if (stored === 'light') root.classList.add('light');
        else if (stored === 'dark') root.classList.remove('light');
        else {
            const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
            if (prefersLight) root.classList.add('light');
        }
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
                    <button
                        className="theme-toggle"
                        onClick={() => {
                            const root = document.documentElement;
                            const isLight = root.classList.toggle('light');
                            localStorage.setItem('theme', isLight ? 'light' : 'dark');
                        }}
                        aria-label="Toggle theme"
                    >
                        <Sun size={18} className="icon-sun" />
                        <Moon size={18} className="icon-moon" />
                    </button>
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
