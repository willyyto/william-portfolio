
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
           <a 
             href={`mailto:${RESUME_DATA.contact.email}`} 
             className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:scale-110 group shadow-sm dark:shadow-none"
             aria-label="Email"
           >
              <MailIcon className="w-5 h-5 group-hover:animate-pulse" />
           </a>
           <a 
             href={`https://${RESUME_DATA.contact.github}`} 
             target="_blank"
             rel="noopener noreferrer"
             className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 hover:bg-slate-700 hover:text-white transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-slate-600 hover:scale-110 shadow-sm dark:shadow-none"
             aria-label="GitHub"
           >
              <GithubIcon className="w-5 h-5" />
           </a>
           <a 
             href={`https://${RESUME_DATA.contact.linkedin}`} 
             target="_blank"
             rel="noopener noreferrer"
             className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 hover:bg-[#0077b5] hover:text-white transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-[#0077b5] hover:scale-110 shadow-sm dark:shadow-none"
             aria-label="LinkedIn"
           >
              <LinkedinIcon className="w-5 h-5" />
           </a>
           
           {RESUME_DATA.resumeUrl && (
             <a 
               href={RESUME_DATA.resumeUrl}
               target="_blank"
               rel="noopener noreferrer"
               download
               className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:scale-110 shadow-sm dark:shadow-none"
               aria-label="Download Resume"
             >
                <DownloadIcon className="w-5 h-5" />
             </a>
           )}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-600 font-medium">
          © {new Date().getFullYear()} {RESUME_DATA.name}.
        </p>
      </div>
    </footer>
  );
};
