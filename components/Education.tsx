
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCapIcon } from './Icons';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionTitle } from './SectionTitle';

export const Education: React.FC = () => {
  const { education } = RESUME_DATA;

  return (
    <section id="education" className="py-24 relative bg-white dark:bg-slate-950 transition-colors duration-300">
       {/* Background glow - lighter/more subtle */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full opacity-50"></div>
       </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        
        <SectionTitle title="Education" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* Icon Box - Floating style */}
            <RevealOnScroll delay={200} variant="pop">
                <div className="flex-shrink-0 relative group">
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-2xl shadow-blue-500/10 flex items-center justify-center">
                        <GraduationCapIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                </div>
            </RevealOnScroll>

            {/* Text Content - Open layout */}
            <div className="flex-1 text-center md:text-left space-y-3">
                <RevealOnScroll delay={300} variant="slide-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {education.institution}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {education.degree}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-2 justify-center md:justify-start flex-wrap">
                        <div className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold shadow-sm">
                            GPA: {education.gpa}
                        </div>
                        {education.degree.includes("Honours") && (
                            <div className="px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-sm font-medium">
                                Honours Class
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
            </div>
        </div>
      </div>
    </section>
  );
};
