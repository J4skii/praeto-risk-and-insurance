import React, { useState, useEffect } from 'react';
import { MAIN_CTA } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Calculate scroll percentage
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center relative z-50 group cursor-pointer">
          <div className="flex items-center">
            {/* Keep accessible heading for screen readers */}
            <h1 className="sr-only">Praeto</h1>

            {/* Visible header wordmark — place `praeto-word.png` in `public/` */}
            <img src="/praeto-word.png" alt="" aria-hidden="true" className="w-28 md:w-32 lg:w-40 h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {['Personal', 'Business', 'About'].map((item) => {
            const handleClick = (e: React.MouseEvent) => {
              // For Personal/Business, dispatch a custom event so the Solutions section can switch tabs
              if (item === 'Personal' || item === 'Business') {
                e.preventDefault();
                const detail = { section: 'solutions', tab: item.toLowerCase() === 'personal' ? 'personal' : 'business' };
                window.dispatchEvent(new CustomEvent('praeto:navigate', { detail }));
                // Smooth-scroll to the solutions section
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
              // About uses the native anchor to #about
            };

            return (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={handleClick}
                className={`relative px-1 py-2 transition-colors duration-200 hover:text-brand-gold group ${isScrolled ? 'text-gray-800' : 'text-white/90'}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
          <a 
            href="#quote" 
            className={`px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-brand-black text-white hover:bg-brand-gold hover:text-black' 
                : 'bg-brand-gold text-brand-black hover:bg-white'
            }`}
          >
            {MAIN_CTA}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled || isMobileMenuOpen ? 'text-brand-black' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-100 ease-out shadow-[0_0_10px_#D4AF37]" style={{ width: `${scrollProgress}%` }}></div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 transform ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {['Personal', 'Business', 'About'].map(item => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-3xl font-serif font-bold text-brand-black hover:text-brand-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#quote" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-black text-white px-8 py-4 rounded shadow-xl mt-4 text-sm uppercase tracking-widest font-bold"
          >
            {MAIN_CTA}
          </a>
        </nav>
      </div>
    </header>
    </>
  );
};