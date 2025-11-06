import React, { useState, useEffect } from 'react';
import './sidebar.css';

const sectionMap = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'aboutMe', label: 'About me', href: '#aboutMe' },
    { id: 'works', label: 'Works', href: '#works' },
    { id: 'contact', label: 'Contact', href: '#contact' },
];

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('home'); // Default to Home

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(entry => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            { threshold: 0.5 }
        );

        sectionMap.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{
            marginLeft: '35px',
            position: 'fixed',
            width: '240px',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            {/* first div */}
            <div style={{
                marginTop: "100px",
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                alignItems: 'flex-start',
            }}>
                {sectionMap.map(({ id, label, href }) => (
                    <a
                        key={id}
                        href={href}
                        style={{
                            marginLeft: activeSection === id ? '50px' : '0px',
                            scale: activeSection === id ? '1.5' : '1',
                            transition: 'margin-left 0.5s ease',
                        }}
                    >
                        {label}
                    </a>
                ))}
            </div>

            {/* second div */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: "100px",
                gap: "10px"
            }}>
                <a href="https://github.com/arvokasko">
                    <i class="fab fa-github" style={{ fontSize: "30px" }}></i>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
