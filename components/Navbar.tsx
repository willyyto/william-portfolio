
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll background toggle
      setIsScrolled(window.scrollY > 50);

      // Handle scroll progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme based on HTML class or system preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 relative">
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          transition-all duration-300 border relative z-50 overflow-hidden
          ${isScrolled || isMobileMenuOpen
            ? 'glass border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-blue-500/10' 
            : 'bg-transparent border-transparent'
          }
        `}>
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold cursor-pointer tracking-tighter hover:opacity-80 transition-opacity"
          >
            {/* Wrapped in span for better browser support (Firefox) on text gradients */}
            <span className="inline-block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              WT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Scroll Progress Bar */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-600 transition-all duration-150 ease-out opacity-80" 
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          absolute top-full left-4 right-4 mt-2 p-2 rounded-2xl
          bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl
          transform transition-all duration-300 origin-top z-40
          flex flex-col md:hidden
          ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)} 
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
