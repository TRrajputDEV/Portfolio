import React, { useState, useEffect } from 'react';
import { ChevronRight, ExternalLink, Award, Briefcase, Code, Mail, Github, Linkedin, Instagram, Terminal, Cpu, Database } from 'lucide-react';
import Navigation from './Components/Navigation/Navigation';
import AwardItem from './Components/AwardItem/AwardItem';
import ProjectCard from './Components/ProjectCard/ProjectCard';
import ProjectListItem from './Components/ProjectCard/ProjectListItem';
import ExperienceItem from './Components/AwardItem/ExperienceItem';
import Section from './Components/ProjectCard/Section';
// Animated Code Rain Component with green theme
const CodeRain = () => {
  const [drops, setDrops] = useState([]);

  const codeSnippets = [
    'const', 'function', 'return', 'async', 'await', 'import', 'export', 'class', 'extends',
    'if', 'else', 'for', 'while', 'map', 'filter', 'reduce', 'useState', 'useEffect',
    '{}', '[]', '()', '=>', '&&', '||', '===', '!==', 'true', 'false', 'null', 'undefined',
    'React', 'Node', 'MongoDB', 'Express', 'API', 'JSON', 'HTTP', 'CSS', 'HTML', 'JS'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops(prev => {
        const newDrops = [...prev];
        // Add new drop occasionally
        if (Math.random() < 0.08) {
          newDrops.push({
            id: Math.random(),
            x: Math.random() * 100,
            y: -10,
            speed: 0.5 + Math.random() * 1,
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            opacity: 0.2 + Math.random() * 0.3
          });
        }
        // Update existing drops
        return newDrops
          .map(drop => ({ ...drop, y: drop.y + drop.speed }))
          .filter(drop => drop.y < 110); // Remove drops that fall off screen
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-green-400 text-xs font-mono transition-all duration-200"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            opacity: drop.opacity,
            transform: 'translateX(-50%)'
          }}
        >
          {drop.text}
        </div>
      ))}
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

// Code Block Decoration
const CodeBlock = ({ snippet, className = "" }) => (
  <div className={`bg-neutral-900/80 border border-green-500/20 rounded p-2 font-mono text-xs text-green-400/60 ${className}`}>
    <span className="text-green-500/40">{'// '}</span>{snippet}
  </div>
);

// Enhanced HoverCard with code theme
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

function App() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      title: "Pixels Platform",
      description: "Pixels is a full-stack video streaming application inspired by YouTube, built with the MERN stack (MongoDB, Express.js, React, Node.js). It includes video upload, playback, engagement systems, user profiles, authentication, content discovery, and advanced search.",
      link: "https://watchpixels.onrender.com/",
      image: null
    },
    {
      title: "Narrativ",
      description: "Narrativ is the next-generation publishing platform for thinkers, creators, and storytellers. It's where ideas turn into movements. Whether you're writing a personal story, sharing expert insights, or building your brand — Narrativ lets you own your voice, shape your story, and lead the conversation.",
      link: "https://narrativio.netlify.app/",
      image: null
    }
  ];

  const projects = [
    {
      title: "ShopCRM",
      description: "An e-commerce customer relationship management system designed to handle user accounts efficiently.",
      link: "https://github.com/TRrajputDEV/ShopCRM",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Process Optimizer",
      description: "A productivity tool that analyzes and streamlines routine workflows using smart logic. Built to help teams manage tasks, deadlines, and daily efficiency.",
      link: "https://snow-ai-ml7k.vercel.app/",
      tech: ["ReactJS", "Javascript", "gemini-api"]
    }
  ];

  const experiences = [
    {
      company: "Pixels Streaming",
      role: "Full-Stack Developer",
      period: "2025 - Present",
      description: "Built Pixels, a full-stack video streaming application inspired by YouTube using the MERN stack. Implemented video upload, playback, engagement systems, user profiles, authentication, content discovery, and advanced search features."
    },
    {
      company: "Narrativ",
      role: "Frontend Developer",
      period: "2024 - 2025",
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
    <div className="min-h-screen flex flex-col bg-neutral-950 relative overflow-hidden font-mono">
      {/* Animated Code Rain */}
      <CodeRain />

      {/* Navigation */}
      <Navigation />

      {/* Enhanced Background layers with code theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_0.5px,transparent_0.5px),linear-gradient(to_bottom,#22c55e_0.5px,transparent_0.5px)] bg-[size:80px_80px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-transparent to-neutral-950/95"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#404040_0.3px,transparent_0.3px),linear-gradient(to_bottom,#404040_0.3px,transparent_0.3px)] bg-[size:20px_20px] opacity-5"></div>

      {/* Floating code elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <CodeBlock snippet="import { Portfolio } from './components';" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 hidden lg:block rotate-12">
        <CodeBlock snippet="const developer = 'Tushar Tanwar';" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 hidden lg:block -rotate-6">
        <CodeBlock snippet="export default App;" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 pt-20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-4xl py-12">
          {/* Enhanced Header */}
          <section id="home" className={`mb-20 transform transition-all duration-700 relative ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center gap-2 mb-4 text-green-400 text-sm">
              <Terminal className="w-4 h-4" />
              <span className="font-mono">tushar@portfolio:~$</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight font-mono">
              <span className="text-green-500/60">{'const '}</span>
              <GlitchText>Tushar Tanwar</GlitchText>
              <span className="text-green-500/60">{' = {'}</span>
            </h1>
            
            <p className="text-green-300/80 text-lg sm:text-xl mb-6 font-light ml-4">
              <span className="text-green-500/60">role: </span>"Software Engineer",
            </p>
            <p className="text-green-300/60 text-base mb-4 ml-4">
              <span className="text-green-500/60">location: </span>"India, Haryana",
            </p>
            <p className="text-neutral-400 text-base leading-relaxed mb-4 max-w-2xl ml-4">
              <span className="text-green-500/60">description: </span>"I build software that solves problems. I care deeply about systems, design, UX, and especially speed."
            </p>
            <p className="text-neutral-400 text-base leading-relaxed mb-6 max-w-2xl ml-4">
              <span className="text-green-500/60">hiring: </span>"If you are hiring, reach out via email!"
            </p>
            <p className="text-green-500/60 mb-8">{'};'}</p>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-6 mb-6">
              <a href="https://github.com/TRrajputDEV" className="flex items-center gap-2 text-green-300/80 hover:text-green-300 transition-colors duration-300 underline decoration-1 underline-offset-4 text-sm font-mono group">
                <Github className="w-4 h-4 group-hover:animate-pulse" />
                github.connect()
              </a>
              <a href="https://www.linkedin.com/in/tushar-tanwar-a9316a299/" className="flex items-center gap-2 text-green-300/80 hover:text-green-300 transition-colors duration-300 underline decoration-1 underline-offset-4 text-sm font-mono group">
                <Linkedin className="w-4 h-4 group-hover:animate-pulse" />
                linkedin.network()
              </a>
              <a href="https://www.instagram.com/tanwar__tushar" className="flex items-center gap-2 text-green-300/80 hover:text-green-300 transition-colors duration-300 underline decoration-1 underline-offset-4 text-sm font-mono group">
                <Instagram className="w-4 h-4 group-hover:animate-pulse" />
                instagram.social()
              </a>
            </div>

            {/* Enhanced Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=tushartanwar183@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400/80 hover:text-green-300 transition-colors duration-300 underline decoration-1 underline-offset-4 text-sm font-mono group"
            >
              <Mail className="w-4 h-4 group-hover:animate-pulse" />
              <span>sendEmail("tushartanwar183@gmail.com")</span>
            </a>
          </section>

          <Section id="work" title="Work" icon={Cpu} delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                  delay={500 + index * 100}
                />
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience" icon={Briefcase} delay={600}>
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

          <Section id="awards" title="Awards" icon={Award} delay={800}>
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

          <Section id="projects" title="Projects" icon={Database} delay={1000}>
            <div className="space-y-0">
              {projects.map((project, index) => (
                <ProjectListItem
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
        </div>
      </main>

      {/* Enhanced Footer with code theme */}
      <footer className="relative z-10 w-full">
        <div className="w-full py-16 flex justify-center items-center relative">
          <div className="absolute top-4 left-4 text-green-500/40 font-mono text-xs">
            {'/* End of Portfolio */'}
          </div>
          <div className="w-full text-green-600/30 text-[10vw] font-extrabold tracking-tighter select-none text-center font-mono">
            <GlitchText>T  U  S  H  A  R</GlitchText>
          </div>
          <div className="absolute bottom-4 right-4 text-green-500/40 font-mono text-xs">
            {'</html>'}
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

export default App;