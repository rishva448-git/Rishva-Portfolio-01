import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Custom, responsive, and high-performance websites built with modern frameworks to elevate your digital presence.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 2,
        title: 'App Development',
        description: 'Native and cross-platform mobile applications tailored for intuitive user experiences and scalability.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 3,
        title: 'Video Editing',
        description: 'Professional video production, seamless transitions, and dynamic effects that tell your brand story powerfully.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 4,
        title: 'Content Creation',
        description: 'Engaging digital content, copywriting, and media strategies designed to capture your target audience.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 5,
        title: 'Poster & Graphic Design',
        description: 'Stunning visual assets, marketing posters, and graphics that make your campaigns stand out instantly.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 6,
        title: 'Digital Marketing',
        description: 'Comprehensive brand identity creation and digital marketing to position you as an industry leader.',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=400'
    }
];

const Services = () => {
    return (
        <section id="services" className="section padding-top-lg bg-tertiary">
            <div className="container">
                <div className="text-center animate-fade-in">
                    <h1 className="section-title">
                        Our <span>IT Services</span>
                    </h1>
                    <p className="services-subtitle">
                        Delivering innovative technology &amp; digital solutions to transform your business.
                    </p>
                </div>

                <div className="services-grid animate-fade-in delay-200">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                            <div className="service-hover-bar"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
