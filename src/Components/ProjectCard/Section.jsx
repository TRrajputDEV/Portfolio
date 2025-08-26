
import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';


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

// Code Block Decoration
const CodeBlock = ({ snippet, className = "" }) => (
    <div className={`bg-neutral-900/80 border border-green-500/20 rounded p-2 font-mono text-xs text-green-400/60 ${className}`}>
        <span className="text-green-500/40">{'// '}</span>{snippet}
    </div>
);


const Section = ({ title, icon: Icon, children, delay = 0, id }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <section id={id} className={`mt-16 transform transition-all duration-500 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-green-500/20">
                <Icon className="w-5 h-5 text-green-400" />
                <h2 className="text-2xl font-semibold tracking-tight text-white font-mono">
                    <span className="text-green-500/60">{'// '}</span>
                    <GlitchText>{title}</GlitchText>
                </h2>
            </div>
            {children}

            {/* Floating code snippets */}
            <CodeBlock
                snippet={`function ${title.toLowerCase()}() { return 'active'; }`}
                className="absolute -top-2 -right-4 opacity-20 rotate-3 hidden lg:block"
            />
        </section>
    );
};

export default Section
