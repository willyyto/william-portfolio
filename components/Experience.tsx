
import React from 'react';
import { RESUME_DATA } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { ExternalLinkIcon } from './Icons';
import { SectionTitle } from './SectionTitle';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <SectionTitle title="Professional Experience" />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-12 space-y-12 md:space-y-16 pb-4">
          {RESUME_DATA.experience.map((job, idx) => (
            <RevealOnScroll key={idx} delay={idx * 200} variant="blur-slide">
              <div className="relative pl-6 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-2.5 md:top-3 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 scale-0 group-hover:scale-110 origin-center animate-fade-in"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {job.role}
                  </h3>
                  <span className="text-xs md:text-sm font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 w-fit">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 mb-4 md:mb-6">
                  {job.company}
                </div>

                <div className="space-y-3 md:space-y-4">
                  {job.highlights.map((point, pIdx) => {
                    const parts = point.split('—');
                    const title = parts.length > 1 ? parts[0] : null;
                    const content = parts.length > 1 ? parts.slice(1).join('—') : point;

                    return (
                      <div key={pIdx} className="group/item flex items-start gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full flex-shrink-0 group-hover/item:bg-blue-500 dark:group-hover/item:bg-blue-400 transition-colors"></span>
                        <p className="leading-relaxed">
                          {title && (
                            <strong className="text-slate-800 dark:text-slate-200 block sm:inline mr-2">
                              {title} —
                            </strong>
                          )}
                          {content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* View Full Resume Link */}
          <RevealOnScroll delay={RESUME_DATA.experience.length * 200} variant="pop">
            <div className="relative pl-6 md:pl-12 group pt-4">
               {/* Timeline Dot for Resume Link */}
               <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-300 shadow-sm z-10"></div>
               
               <a 
                 href={RESUME_DATA.resumeUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
               >
                 <span>View My Resume</span>
                 <ExternalLinkIcon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
               </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
