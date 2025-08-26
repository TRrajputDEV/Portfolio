import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';
// Enhanced Award Item


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

const AwardItem = ({ title, organization, year, description, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`flex flex-col sm:flex-row gap-4 py-5 border-b border-green-500/10 hover:bg-green-500/5 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            <Award className="w-5 h-5 text-green-400 mt-1 flex-shrink-0 hidden sm:block animate-pulse" />
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                    <h3 className="text-base font-medium text-white font-mono">
                        <span className="text-green-500/60">{'# '}</span>
                        <GlitchText>{title}</GlitchText>
                    </h3>
                    <span className="text-sm text-green-400/60 font-mono">{year}</span>
                </div>
                <p className="text-green-300/80 mb-2 font-medium text-sm font-mono">{organization}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};
export default AwardItem