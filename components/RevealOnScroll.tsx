
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'pop' | '3d-flip' | 'blur-slide' | 'scale';
  threshold?: number;
}

export const RevealOnScroll: React.FC<Props> = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 1000,
  variant = 'slide-up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: threshold,
      rootMargin: "0px 0px -50px 0px" 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyle = () => {
    switch (variant) {
      case 'fade': return 'opacity-0';
      case 'slide-up': return 'opacity-0 translate-y-20';
      case 'slide-down': return 'opacity-0 -translate-y-20';
      case 'slide-left': return 'opacity-0 -translate-x-20';
      case 'slide-right': return 'opacity-0 translate-x-20';
      case 'pop': return 'opacity-0 scale-50';
      case '3d-flip': return 'opacity-0 rotate-x-90 translate-y-20';
      case 'blur-slide': return 'opacity-0 translate-y-12 blur-lg scale-95';
      case 'scale': return 'opacity-0 scale-90';
      default: return 'opacity-0 translate-y-20';
    }
  };

  const getVisibleStyle = () => {
    switch (variant) {
      case '3d-flip': return 'opacity-100 rotate-x-0 translate-y-0';
      case 'blur-slide': return 'opacity-100 translate-y-0 blur-0 scale-100';
      case 'pop': return 'opacity-100 scale-100';
      default: return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`
        ${className} 
        transform-style-3d 
        transition-all 
        ease-spring
        ${isVisible ? getVisibleStyle() : getInitialStyle()}
      `}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};
