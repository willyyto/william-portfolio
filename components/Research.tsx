
import React from 'react';
import { RESUME_DATA } from '../constants';
import { BookOpenIcon, ExternalLinkIcon } from './Icons';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionTitle } from './SectionTitle';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-32 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <SectionTitle title="Research" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {RESUME_DATA.research.map((item, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150} variant="scale" className="h-full">
               <a 
                 href={item.link}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
               >
                 {/* Image Cover */}
                 <div className="relative h-64 overflow-hidden">
                    {item.image && (
                        <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-1">
                          <BookOpenIcon className="w-4 h-4" />
                          <span>Academic Research</span>
                       </div>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="p-8 flex flex-col flex-1 relative">
                    <div className="flex justify-between items-start gap-4 mb-4">
                       <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                             {item.institution} <span className="text-slate-400 mx-1">•</span> {item.date}
                          </p>
                       </div>
                       <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                          <ExternalLinkIcon className="w-5 h-5" />
                       </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                       {item.description}
                    </p>

                    <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                       Read Full Paper →
                    </div>
                 </div>
               </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
