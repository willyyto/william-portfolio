
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

interface Props {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<Props> = ({ title, className = "" }) => {
  return (
    <div className={`relative mb-24 flex flex-col items-center justify-center py-10 ${className}`}>
      
      {/* Background Giant Text - Parallax Depth Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center z-0">
         <h2 className="text-[3rem] md:text-[8rem] font-black text-center text-slate-200 dark:text-slate-800/30 uppercase tracking-widest opacity-50 blur-[2px] transform scale-110 whitespace-nowrap">
           {title}
         </h2>
      </div>

      <RevealOnScroll variant="slide-up" duration={800} threshold={0.1}>
        <div className="relative z-10 flex flex-col items-center">
            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl font-black text-center mb-6 tracking-tighter relative px-2">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-2">
                    {title}
                </span>
                {/* Decorative Dot - Pulsing */}
                <span className="absolute -top-2 -right-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></span>
            </h2>

            {/* Animated Divider */}
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                <div className="w-20 md:w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 bg-white/50 w-full animate-shimmer skew-x-[-20deg]"></div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
            </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};
