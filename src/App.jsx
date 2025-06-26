import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram } from 'lucide-react';

// HoverCard Component
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
        <div className="absolute z-10 p-3 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg text-sm text-white top-full left-0 mt-2 min-w-64 animate-in fade-in duration-200">
          {content}
        </div>
      )}
    </div>
  );
};

// Card Component
const Card = ({ title, description, image, link, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-8 w-full border border-neutral-800 h-40 flex flex-row p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-500 group cursor-pointer transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ textDecoration: 'none' }}
    >
      <div className="w-[75%] flex flex-col justify-center">
        <h1 className="text-2xl mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
          {title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h1>
        <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="w-[25%] flex justify-end items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Code className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </a>
  );
};

// Project Component
const Project = ({ title, description, link, tech, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex flex-row justify-between items-center px-4 py-4 border-b border-neutral-800 hover:bg-neutral-900/30 transition-all duration-300 group transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
    }`}>
      <div className="flex flex-col gap-2">
        <HoverCard content={description}>
          <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
            {title}
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </h3>
        </HoverCard>
        {tech && (
          <div className="flex gap-2">
            {tech.map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <a
        href={link || "#"}
        className="underline text-neutral-400 hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        code
      </a>
    </div>
  );
};

// Experience Item Component
const ExperienceItem = ({ company, role, period, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex flex-row gap-4 py-4 border-b border-neutral-800 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-white font-medium">{role}</h3>
          <span className="text-sm text-neutral-500">{period}</span>
        </div>
        <p className="text-blue-400 mb-2">{company}</p>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Award Item Component
const AwardItem = ({ title, organization, year, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex flex-row gap-4 py-4 border-b border-neutral-800 hover:bg-neutral-900/20 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-white font-medium">{title}</h3>
          <span className="text-sm text-neutral-500">{year}</span>
        </div>
        <p className="text-yellow-400 mb-2">{organization}</p>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, icon: Icon, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`mt-16 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <h2 className="scroll-m-20 border-b border-neutral-800 pb-4 text-3xl font-semibold tracking-tight text-white flex items-center gap-3">
        <Icon className="w-6 h-6" />
        {title}
      </h2>
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
};

function App() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
  {
    title: "Narrativ",
    description: "A modern storytelling platform built with React, Appwrite, and Tailwind CSS. It allows users to create, edit, and showcase blog posts with responsive design and clean UI.",
    link: "https://narrativio.netlify.app/",
    tech: ["React", "Appwrite", "Tailwind CSS"]
  },
  {
    title: "ShopCRM",
    description: "An e-commerce customer relationship management system designed to handle user accounts efficiently.",
    link: "https://github.com/TRrajputDEV/ShopCRM.git",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Process Optimizer",
    description: "A productivity tool that analyzes and streamlines routine workflows using smart logic. Built to help teams manage tasks, deadlines, and daily efficiency.",
    link: "https://snow-ai-ml7k.vercel.app/",
    tech: ["ReactJS", "Javascript", "gemini-api"]
  },
  {
    title: "Portfolio Website",
    description: "A sleek and animated portfolio site built to showcase my dev journey, projects, and achievements with smooth transitions and modern aesthetics.",
    link: "#",
    tech: ["React", "Tailwind CSS", "Vite"]
  }
];


  const experiences = [
  {
    company: "Narrativ",
    role: "Frontend Developer",
    period: "2025 - Present",
    description: "Built and deployed a personal blog platform using React, Appwrite, and Tailwind CSS. Implemented features like post creation, author display, and responsive design."
  },
  {
    company: "Hackathon Project – LPU",
    role: "Team Developer",
    period: "2024",
    description: "Developed a tech solution during a university hackathon that earned a Top 10 finalist position. Collaborated with teammates under a 48-hour deadline to solve real-world problems."
  },
  {
    company: "Open Source Contributor",
    role: "Contributor",
    period: "2024 - Present",
    description: "Contributed to GitHub repositories by fixing bugs and improving documentation. Gained hands-on experience with Git, version control, and code collaboration practices."
  }
];


  const awards = [
  {
    title: "Top 10 Finalist - Hackathon",
    organization: "University Hackathon (LPU)",
    year: "2024",
    description: "Secured 10th rank in a university-level hackathon by building a creative tech solution under time constraints."
  },
  {
    title: "Generative AI Certificate",
    organization: "Microsoft & LinkedIn Learning",
    year: "2024",
    description: "Completed a certified course in Generative AI, gaining hands-on experience with foundational AI tools and concepts."
  },
  {
    title: "Responsive Web Design Certification",
    organization: "freeCodeCamp",
    year: "2024",
    description: "Earned certification for mastering responsive HTML & CSS design principles through project-based learning."
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex justify-center font-mono">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-4xl mt-6 sm:mt-8 lg:mt-12 p-4 sm:p-6 md:p-8 lg:p-16">
        
        {/* Header */}
          <div className={`transform transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
              Tushar Tanwar
            </h1>
            <p className="text-neutral-300 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
              Software Engineer based in India, Haryana
            </p>
            <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4">
              I build software that solves problems. I care deeply about systems, design, UX, and especially speed.
            </p>
            <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              If you are hiring, reach out via email!
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-300 underline text-sm sm:text-base">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                Github
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-300 underline text-sm sm:text-base">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-300 underline text-sm sm:text-base">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                Instagram
              </a>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&to=tushartanwar183@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 text-sm sm:text-base hover:text-white transition-colors duration-300 underline"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="break-all">tushartanwar183@gmail.com</span>
            </a>
          </div>

          {/* Highlights */}
        <Section title="Highlights" icon={() => <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>} delay={400}>
          <div className="flex flex-col">
            <Card
              title="Narrativ"
              description="A modern storytelling platform with real-time collaboration features and AI-powered content suggestions."
              delay={500}
              link="https://narrativio.netlify.app/"
            />
            <Card
              title="Shop CRM"
              description="An e-commerce customer relationship management system designed to handle user accounts efficiently."
              delay={600}
              link="https://github.com/TRrajputDEV/ShopCRM.git"
            />
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience" icon={Briefcase} delay={600}>
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                description={exp.description}
                delay={700 + index * 100}
              />
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section title="Awards" icon={Award} delay={800}>
          <div className="space-y-0">
            {awards.map((award, index) => (
              <AwardItem
                key={index}
                title={award.title}
                organization={award.organization}
                year={award.year}
                description={award.description}
                delay={900 + index * 100}
              />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={Code} delay={1000}>
          <div className="space-y-0">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tech={project.tech}
                delay={1100 + index * 100}
              />
            ))}
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-20 py-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;