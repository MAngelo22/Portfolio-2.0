import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-skill="${name}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [name]);

  return (
    <div className="mb-4" data-skill={name}>
      <div className="flex justify-between mb-1">
        <span className="text-blue-400 font-medium">{name}</span>
        <span className="text-blue-300">
          <span className={`counter ${isVisible ? 'counting' : ''}`}>
            {isVisible ? level : 0}
          </span>
          %
        </span>
      </div>
      <div className="w-full bg-blue-900/20 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer"></div>
        </div>
      </div>
    </div>
  );
}