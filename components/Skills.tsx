
import React from 'react';
import { RESUME_DATA } from '../constants';
import { CodeIcon, ServerIcon, DatabaseIcon, LayoutIcon } from './Icons';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionTitle } from './SectionTitle';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Languages')) return <CodeIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />;
    if (category.includes('Cloud')) return <ServerIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
    if (category.includes('Data')) return <DatabaseIcon className="w-6 h-6 text-purple-500 dark:text-purple-400" />;
    return <LayoutIcon className="w-6 h-6 text-orange-500 dark:text-orange-400" />;
  };

  return (
    <section id="skills" className="py-32 relative bg-white dark:bg-slate-950 transition-colors duration-300 perspective-1000">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <SectionTitle title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.skills.map((skillGroup, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150} variant="pop">
              <div 
                className="h-full glass p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 group shadow-lg dark:shadow-none hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-slate-200 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600">
                    {getIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all cursor-default shadow-sm dark:shadow-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
