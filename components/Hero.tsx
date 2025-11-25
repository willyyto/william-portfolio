
import React, { useState, useEffect, useRef } from 'react';
import { RESUME_DATA } from '../constants';
import { MailIcon, GithubIcon, LinkedinIcon, ChevronDownIcon, DownloadIcon, XIcon } from './Icons';

export const Hero: React.FC = () => {
  const { name, contact, avatar, resumeUrl, summary } = RESUME_DATA;
  
  const titles = [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Cloud Engineer",
    "Data Engineer",
    "DevOps Engineer"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showStatus, setShowStatus] = useState(true);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Status Notification Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStatus(false);
    }, 8000); // Hide after 8 seconds

    return () => clearTimeout(timer);
  }, []);

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

  // Track Mouse for Canvas
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // AI Geometry Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', resize);

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      type: number; // 0 for blue, 1 for emerald
    }

    let points: Point[] = [];
    const initParticles = () => {
        points = [];
        const count = Math.min(Math.floor((w * h) / 20000), 100); // Responsive particle count
        for(let i=0; i<count; i++) {
            points.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                type: Math.random() > 0.5 ? 0 : 1
            });
        }
    };

    initParticles();

    let animationId: number;
    const draw = () => {
        ctx.clearRect(0, 0, w, h);
        
        // Check theme for colors
        const isDark = document.documentElement.classList.contains('dark');
        // Colors: Blue-500/Emerald-500
        const c1 = isDark ? '96, 165, 250' : '37, 99, 235'; 
        const c2 = isDark ? '52, 211, 153' : '16, 185, 129';

        // Update and draw points
        points.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if(p.x < 0 || p.x > w) p.vx *= -1;
            if(p.y < 0 || p.y > h) p.vy *= -1;

            // Mouse Interaction (Magnetic Constellation)
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            // Connect to mouse
            if(dist < 250) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                const alpha = (1 - dist/250) * 0.8;
                ctx.strokeStyle = `rgba(${p.type === 0 ? c1 : c2}, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
                
                // Slight attraction to mouse
                p.x += dx * 0.005;
                p.y += dy * 0.005;
            }

            // Connect to nearby points
            for(let j = i + 1; j < points.length; j++) {
                const p2 = points[j];
                const pdx = p.x - p2.x;
                const pdy = p.y - p2.y;
                const pdist = Math.sqrt(pdx*pdx + pdy*pdy);

                if(pdist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    const alpha = (1 - pdist/150) * 0.3;
                    // Blend color if types are different? Just use source
                    ctx.strokeStyle = `rgba(${p.type === 0 ? c1 : c2}, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Draw Node
            ctx.beginPath();
            ctx.arc(p.x, p.y, isDark ? 2 : 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgb(${p.type === 0 ? c1 : c2})`;
            ctx.fill();
        });

        animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationId);
    };

  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-32 pb-24 md:pt-20 md:pb-10">
      
      {/* AI Geometry Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 z-0 pointer-events-none"></div>

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

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in text-slate-900 dark:text-white" style={{ animationDelay: '200ms' }}>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-1 drop-shadow-none">
            {name}
          </span>
        </h1>
        
        <div className="min-h-[4rem] md:min-h-[5rem] mb-8 flex flex-col md:flex-row items-center justify-center animate-fade-in gap-2 md:gap-4 px-2" style={{ animationDelay: '300ms' }}>
          <span className="text-xl md:text-5xl font-medium text-slate-500 dark:text-slate-300 whitespace-nowrap pt-1">I am a</span>
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center break-words max-w-full">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 pb-1 drop-shadow-none">
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

      {/* Fixed Notification Toast */}
      {showStatus && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-40 animate-fade-in max-w-full md:max-w-md">
             <div className="relative overflow-hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                
                {/* Glow effect */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex h-3 w-3 flex-shrink-0 ml-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest leading-none mb-1">Status Update</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">Available for new opportunities</p>
                </div>
                
                <button 
                  onClick={() => setShowStatus(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Dismiss"
                >
                  <XIcon className="w-4 h-4" />
                </button>
             </div>
          </div>
        )}

    </section>
  );
};
