import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, prefix = "", suffix = "", duration = 1500 }) => {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger only when the stat enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Run the counter once triggered
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const increment = value / (duration / 16);
    const step = () => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        return;
      }
      setDisplay(Math.floor(current));
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold">
      {prefix}{display}{suffix}
    </div>
  );
};
