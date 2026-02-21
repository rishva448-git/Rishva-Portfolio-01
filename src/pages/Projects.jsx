import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-stack e-commerce solution with dynamic product filtering, seamless checkout, and integrated payment gateways.',
        tags: ['React', 'Node.js', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Fintech Dashboard',
        category: 'UI/UX Design',
        description: 'Modern financial dashboard for an enterprise client focusing on real-time data visualization and clean aesthetics.',
        tags: ['Figma', 'React', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Social Connect App',
        category: 'App Development',
        description: 'A cross-platform mobile application enabling secure networking and seamless media sharing for professionals.',
        tags: ['React Native', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        title: 'Tech Startup Branding',
        category: 'Branding',
        description: 'Complete brand identity including logo creation, typography system, and marketing collateral for an AI startup.',
        tags: ['Illustrator', 'Photoshop'],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 5,
        title: 'Digital Marketing Campaign',
        category: 'Content Creation',
        description: 'A high-converting video and poster campaign series that boosted client engagement by over 300%.',
        tags: ['Premiere Pro', 'After Effects'],
        image: 'https://images.unsplash.com/photo-1432888117426-11b3bc2e2a01?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 6,
        title: 'Corporate Portfolio',
        category: 'Web Development',
        description: 'A sleek, premium portfolio website designed to showcase enterprise services with stunning scroll animations.',
        tags: ['Vanilla CSS', 'React'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section padding-top-lg">
            <div className="container">
                <div className="text-center animate-fade-in">
                    <h1 className="section-title">
                        Featured <span>Projects</span>
                    </h1>
                    <p className="services-subtitle">
                        A curated selection of our best work across web development, design, and branding.
                    </p>
                </div>

                <div className="projects-grid animate-fade-in delay-200">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <button className="icon-btn" aria-label="View Project"><ExternalLink size={20} /></button>
                                        <button className="icon-btn" aria-label="Source Code"><Github size={20} /></button>
                                    </div>
                                </div>
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
