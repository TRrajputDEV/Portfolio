// Enhanced ProjectListItem
import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';

const HoverCard = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                className="cursor-pointer"
            >
                {children}
            </div>
            {isVisible && (
                <div className="absolute z-20 p-3 bg-neutral-900/95 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-lg text-sm text-white top-full left-0 mt-2 min-w-64 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 mb-2 text-green-400 text-xs">
                        <Terminal className="w-3 h-3" />
                        <span>system.info</span>
                    </div>
                    {content}
                </div>
            )}
        </div>
    );
};

// Glitch Text Component
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


const ProjectListItem = ({ title, description, link, tech, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 py-5 border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
            <div className="flex flex-col gap-2 flex-1">
                <HoverCard content={description}>
                    <h3 className="text-base font-medium text-white group-hover:text-green-300 transition-colors duration-300 flex items-center gap-2 font-mono">
                        <span className="text-green-500/60 text-sm">{'>'}</span>
                        <GlitchText>{title}</GlitchText>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-green-400" />
                    </h3>
                </HoverCard>
                {tech && (
                    <div className="flex gap-2 flex-wrap">
                        {tech.map((t, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-green-500/10 text-green-400/80 rounded border border-green-500/20 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <a
                href={link || "#"}
                className="text-green-400/80 hover:text-green-300 transition-colors duration-300 text-sm font-medium underline underline-offset-2 sm:self-center whitespace-nowrap font-mono"
                target="_blank"
                rel="noopener noreferrer"
            >
                {'</code>'}
            </a>
        </div>
    );
};
export default ProjectListItem