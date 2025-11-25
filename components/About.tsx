
import React from 'react';
import { RESUME_DATA } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  const { summary } = RESUME_DATA;

  const highlights = [
    { label: "Experience", value: "4+ Years", color: "text-blue-600 dark:text-blue-400" },
    { label: "Focus", value: "Distributed Systems", color: "text-emerald-600 dark:text-emerald-400" },
    { label: "Location", value: "Sydney, Australia", color: "text-purple-600 dark:text-purple-400" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <RevealOnScroll>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-500 to-emerald-500 dark:via-blue-800 dark:to-emerald-400 rounded-full opacity-70"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white shrink-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                  About Me
                </span>
              </h2>
              <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-blue-500 to-emerald-500 dark:via-blue-800 dark:to-emerald-400 rounded-full opacity-70"></div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Content */}
        <RevealOnScroll delay={200}>
          <div className="text-center">
            <p className="text-lg md:text-xl leading-loose text-slate-700 dark:text-slate-300 font-medium max-w-3xl mx-auto mb-12 text-justify md:text-center">
              {summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};
