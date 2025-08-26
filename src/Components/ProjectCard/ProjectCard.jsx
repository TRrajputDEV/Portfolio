
import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';
// Enhanced Award Item

// Code Block Decoration
const CodeBlock = ({ snippet, className = "" }) => (
    <div className={`bg-neutral-900/80 border border-green-500/20 rounded p-2 font-mono text-xs text-green-400/60 ${className}`}>
        <span className="text-green-500/40">{'// '}</span>{snippet}
    </div>
);
const GlitchText = ({ children, className = "" }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.05) {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 200);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`${className} ${isGlitching ? 'animate-pulse text-green-400' : ''} transition-colors duration-200`}>
            {children}
        </span>
    );
};

const ProjectCard = ({ title, description, link, image, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`group block w-full rounded-xl overflow-hidden border border-green-500/20 bg-neutral-900/30 hover:border-green-500/50 hover:bg-neutral-900/50 transition-all duration-300 transform relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Code decoration */}
            <CodeBlock
                snippet="const project = { status: 'Must check' };"
                className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <a href={link || "#"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="w-full h-48 bg-neutral-800/30 flex items-center justify-center relative overflow-hidden">
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-green-400/60">
                            <Code className="w-10 h-10 mb-2" />
                            <span className="text-sm font-mono">{'<ProjectPreview />'}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Matrix-style overlay when hovered */}
                    {isHovered && (
                        <div className="absolute inset-0 bg-green-500/5">
                            <div className="absolute inset-0" style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)',
                                animation: 'scan 2s linear infinite'
                            }}></div>
                        </div>
                    )}
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300 flex items-center gap-2 font-mono">
                        <span className="text-green-500/60">{'$'}</span>
                        <GlitchText>{title}</GlitchText>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-400" />
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard