import React, { useState, useEffect } from 'react';

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, prefix = "", suffix = "", duration = 1500 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const increment = end / (duration / 16); // 16ms per frame roughly
    
    const step = () => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        return;
      }
      setDisplay(Math.floor(start));
      requestAnimationFrame(step);
    };
    
    requestAnimationFrame(step);
  }, [value, duration]);

  return <div className="text-3xl font-bold">{prefix}{display}{suffix}</div>;
};
