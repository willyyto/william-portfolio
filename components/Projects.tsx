
import React from 'react';
import { RESUME_DATA } from '../constants';
import { CodeIcon, ExternalLinkIcon, GithubIcon } from './Icons';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionTitle } from './SectionTitle';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 perspective-1000">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <SectionTitle title="Featured Projects" />

        <div className="space-y-32">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image/Video Section - 3D Flip Entrance */}
                <div className="w-full lg:w-3/5 perspective-1000">
                  <RevealOnScroll variant="3d-flip" delay={100} className="h-full">
                    <div className="group relative rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1">
                      {/* Browser Toolbar */}
                      <div className="h-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50 flex items-center px-4 gap-2 absolute top-0 left-0 right-0 z-20">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="ml-4 flex-1">
                          <div className="h-5 w-2/3 bg-slate-100 dark:bg-slate-800/50 rounded text-xs flex items-center px-3 text-slate-500 font-mono overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.link || (project.video ? "vimeo.com/enigma-run" : "localhost:3000")}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900 pt-10">
                        {project.video ? (
                          <iframe 
                            src={project.video} 
                            className="w-full h-full" 
                            allow="autoplay; fullscreen; picture-in-picture" 
                            allowFullScreen 
                            title={project.title}
                          />
                        ) : (
                          <>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]" 
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                          </>
                        )}
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Content Section - Slide & Blur */}
                <div className="w-full lg:w-2/5 space-y-8">
                  <RevealOnScroll variant={idx % 2 === 0 ? 'slide-right' : 'slide-left'} delay={200}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 animate-pulse">
                          <CodeIcon className="w-6 h-6" />
                        </div>
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wider uppercase">Featured Project</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        {project.title.split('–')[0]}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                        {project.title.split('–')[1]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.split(',').slice(0, 6).map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 text-blue-600 dark:text-blue-200 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/30 transition-colors cursor-default">
                          {tech.trim()}
                        </span>
                      ))}
                      {project.tech.split(',').length > 6 && (
                        <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/30 text-slate-500 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-800">
                          +{project.tech.split(',').length - 6} more
                        </span>
                      )}
                    </div>

                    <ul className="space-y-4 mt-6">
                      {project.description.slice(0, 3).map((desc, dIdx) => (
                        <li key={dIdx} className="text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4 pt-4">
                      {project.github && (
                        <a 
                          href={project.github.startsWith('http') ? project.github : `https://${project.github}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-all hover:-translate-y-1"
                        >
                          <GithubIcon className="w-5 h-5" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 hover:shadow-blue-500/40"
                        >
                          <ExternalLinkIcon className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </RevealOnScroll>
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
