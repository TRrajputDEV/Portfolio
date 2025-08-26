import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';
const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-green-500/20">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-green-400 font-mono flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        <span>Tushar.dev</span>
                    </div>

                    <div className="hidden md:flex gap-6 text-sm text-neutral-400">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`hover:text-green-400 transition-colors ${activeSection === 'home' ? 'text-green-400' : ''}`}
                        >
                            home
                        </button>
                        <button
                            onClick={() => scrollToSection('work')}
                            className={`hover:text-green-400 transition-colors ${activeSection === 'work' ? 'text-green-400' : ''}`}
                        >
                            work
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className={`hover:text-green-400 transition-colors ${activeSection === 'experience' ? 'text-green-400' : ''}`}
                        >
                            experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`hover:text-green-400 transition-colors ${activeSection === 'projects' ? 'text-green-400' : ''}`}
                        >
                            projects
                        </button>
                        <button
                            onClick={() => scrollToSection('awards')}
                            className={`hover:text-green-400 transition-colors ${activeSection === 'awards' ? 'text-green-400' : ''}`}
                        >
                            awards
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navigation;