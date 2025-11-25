
import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { MailIcon, GithubIcon, LinkedinIcon, ChevronDownIcon, DownloadIcon } from './Icons';

export const Hero: React.FC = () => {
  const { name, contact, avatar, resumeUrl, summary } = RESUME_DATA;
  
  const titles = [
    "Senior Software Engineer",
    "Distributed Systems Specialist",
    "Cloud Architecture Enthusiast",
    "Full Stack Developer"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typewriter Effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting new word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-32 pb-24 md:pt-20 md:pb-10">
      
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-50 dark:opacity-100"></div>
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0 overflow-hidden">
         <div 
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 dark:bg-blue-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 animate-blob transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
         ></div>
         <div 
            className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/20 dark:bg-emerald-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000 transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -30}px)` }}
         ></div>
         <div 
            className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-600/20 dark:bg-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[130px] opacity-30 animate-blob animation-delay-4000 transition-transform duration-75 ease-out"
            style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * 30}px)` }}
         ></div>
      </div>

      <div className="z-10 container mx-auto px-4 max-w-5xl relative flex flex-col items-center">
        
        {avatar && (
          <div className="mb-10 relative inline-block animate-fade-in group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-emerald-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <img 
                src={avatar} 
                alt={name}
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-[3px] border-white dark:border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        )}

        <div className="mb-8 inline-block animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-sm font-semibold tracking-wide shadow-lg shadow-emerald-500/10">
            Available for new opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in text-slate-900 dark:text-white" style={{ animationDelay: '200ms' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 drop-shadow-sm">
            {name}
          </span>
        </h1>
        
        <div className="min-h-[4rem] md:min-h-[5rem] mb-8 flex flex-col md:flex-row items-center justify-center animate-fade-in gap-2 md:gap-4 px-2" style={{ animationDelay: '300ms' }}>
          <span className="text-xl md:text-5xl font-medium text-slate-500 dark:text-slate-300 whitespace-nowrap pt-1">I am a</span>
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center break-words max-w-full">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              {text}
            </span>
            <span className="text-blue-500 dark:text-blue-400 animate-pulse font-light ml-1">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
          {summary}
        </p>
        
        <div className="flex flex-wrap justify-center gap-5 animate-fade-in" style={{ animationDelay: '500ms' }}>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium transition-all hover:scale-105 active:scale-95 border border-slate-700 hover:border-purple-500 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <DownloadIcon className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
                <span>Download Resume</span>
              </div>
            </a>
          )}

          <a
            href={`mailto:${contact.email}`}
            className="group relative px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium transition-all hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-700 hover:border-blue-500 shadow-lg dark:shadow-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
              <span>Email Me</span>
            </div>
          </a>
          
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium transition-all hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 shadow-lg dark:shadow-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-emerald-500 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </div>
          </a>

          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
          >
             <div className="relative flex items-center gap-3">
              <LinkedinIcon className="w-5 h-5 text-white" />
              <span>LinkedIn</span>
            </div>
          </a>
        </div>
      </div>

      <div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer z-10 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/5 transition-colors" 
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDownIcon className="w-8 h-8 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-white transition-colors" />
      </div>
    </section>
  );
};
