import React, { useState, useEffect } from 'react';
import { 
  COMPANY_DETAILS, 
  STATS, 
  PERSONAL_PRODUCTS, 
  BUSINESS_PRODUCTS, 
  TESTIMONIALS, 
  MAIN_CTA 
} from './constants';
import { Header } from './components/Header';
import { AnimatedStat } from './components/AnimatedStat';

import { FadeIn } from './components/FadeIn';
import { Cursor } from './components/Cursor';
import { PartnersBanner } from './components/Partners';
import { CookieBanner } from './components/CookieBanner';

// Helper to guess icon based on keywords
const getIconForProduct = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('vehicle') || n.includes('hull') || n.includes('fleet')) return 'fa-car-side';
  if (n.includes('home') || n.includes('house') || n.includes('building')) return 'fa-home';
  if (n.includes('life') || n.includes('funeral') || n.includes('accident')) return 'fa-heartbeat';
  if (n.includes('medical') || n.includes('health')) return 'fa-stethoscope';
  if (n.includes('cyber') || n.includes('data') || n.includes('computer')) return 'fa-laptop-code';
  if (n.includes('liability') || n.includes('legal') || n.includes('director')) return 'fa-gavel';
  if (n.includes('money') || n.includes('finance') || n.includes('accounts')) return 'fa-coins';
  if (n.includes('theft') || n.includes('crime') || n.includes('fraud')) return 'fa-user-secret';
  if (n.includes('travel')) return 'fa-plane';
  if (n.includes('fire')) return 'fa-fire';
  if (n.includes('education')) return 'fa-graduation-cap';
  return 'fa-shield-alt';
};

function WaveDivider({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '56px', ...(flip ? { transform: 'scaleX(-1)' } : {}) }}
      >
        <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand-black text-white overflow-hidden min-h-[75vh] flex items-center">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Use background-image for more reliable positioning and overlays */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30 animate-ken-burns"
          style={{ backgroundImage: `url('/hero.png')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-brand-black/90 to-brand-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-28">
        <FadeIn direction="up">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_#D4AF37]"></span>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">Est. 1998 • FSCA {COMPANY_DETAILS.fsca}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight mb-8 drop-shadow-xl">
            Safeguarding <br />
            <span className="text-brand-gold italic">
              Your Legacy.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl border-l-2 border-brand-gold/50 pl-6 mb-12 font-light">
            A Level 1 B-BBEE brokerage managing <strong className="text-white font-medium">R20bn AUM</strong>. We replace generic cover with engineering-grade risk management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#quote" className="group relative px-10 py-4 bg-brand-gold text-brand-black font-bold text-sm uppercase tracking-widest rounded overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <div className="absolute inset-0 w-full h-full bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative">Get a tailored Quote</span>
            </a>
            <a 
              href={`https://wa.me/${COMPANY_DETAILS.tel.replace(/\s/g,'')}`} 
              className="flex items-center justify-center px-10 py-4 rounded border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all duration-300 hover:border-white backdrop-blur-sm"
            >
              <i className="fab fa-whatsapp mr-3 text-lg"></i>
              WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="left" className="hidden md:flex relative justify-center items-center min-h-[400px]">
           {/* Abstract Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl animate-pulse"></div>
           
           {/* PRAETO LOGO BLOCK */}
           <div className="relative z-10 p-12 bg-black/40 backdrop-blur-md rounded-xl shadow-2xl border border-white/5 hover:border-[#B49246]/30 transition-all duration-500 transform hover:scale-[1.02] group">
              <div className="flex flex-col select-none items-center justify-center">

                {/* LOGO IMAGE CONTAINER */}
                <div className="w-full max-w-[500px]">
                  {/*
                     IMPORTANT: Place your logo in the project `public/` folder
                     (e.g. `public/praeto-logo.png`) and it will be served at `/praeto-logo.png`.
                     Replace the file in `public/` when ready — no code change required.
                  */}
                  <img
                    src="/praeto-logo.png"
                    alt="Praeto Financial Services Logo"
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>
                
              </div>
           </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <WaveDivider fill="#D4AF37" />
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-20 bg-brand-gold text-brand-black relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5 mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center relative z-10">
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 100} className="group cursor-default">
              <div className="relative inline-block">
                {/* The Counter line */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-2 text-brand-black transform transition-transform duration-300 group-hover:scale-110 origin-bottom">
                  <AnimatedStat value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                {/* The Label line */}
                <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 border-t border-black/20 pt-3 inline-block w-full">
                  {s.suffix.replace("bn AUM","AUM").replace("ratio","Claims Ratio").replace("avg","Industry Avg").replace("+ clients","Active Clients")}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <WaveDivider fill="#FFFFFF" flip={true} />
    </section>
  );
}

function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');
  const [isAnimating, setIsAnimating] = useState(false);

  // Listen for header-driven navigation events so clicks in `Header` can switch tabs
  React.useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent;
      const detail = ce?.detail || {};
      if (detail.section === 'solutions') {
        const tab = detail.tab === 'business' ? 'business' : 'personal';
        if (tab !== activeTab) {
          // Use the existing tab change logic
          setIsAnimating(true);
          setActiveTab(tab);
          setTimeout(() => setIsAnimating(false), 400);
        }
        // Ensure the section is visible
        const el = document.getElementById('solutions');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        }
      }
    };

    window.addEventListener('praeto:navigate', handler as EventListener);
    return () => window.removeEventListener('praeto:navigate', handler as EventListener);
  }, [activeTab]);

  const handleTabChange = (tab: 'personal' | 'business') => {
    if (activeTab === tab) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 400); // Match transition duration
  };

  const items = activeTab === 'personal' ? PERSONAL_PRODUCTS : BUSINESS_PRODUCTS;
  const colorTheme = activeTab === 'personal' ? 'bg-brand-grey' : 'bg-brand-black';
  const textColor = activeTab === 'personal' ? 'text-brand-black' : 'text-white';
  const cardBg = activeTab === 'personal' ? 'bg-white border-gray-200 hover:border-brand-gold' : 'bg-white/5 border-white/10 hover:border-brand-gold';

  return (
    <section id="solutions" className={`py-32 transition-colors duration-700 ${colorTheme} relative overflow-hidden min-h-[800px]`}>
       {/* Dynamic Background Blobs */}
       <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none transition-opacity duration-700 ${activeTab === 'business' ? 'opacity-30' : 'opacity-0'}`}>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h3 className={`text-4xl md:text-5xl font-serif font-bold mb-12 ${textColor}`}>Tailored Solutions</h3>
            
            {/* Toggle Switch */}
            <div className="inline-flex bg-white/5 backdrop-blur-sm p-2 rounded-full border border-gray-500/20 shadow-lg relative overflow-hidden">
              {/* Sliding background */}
              <div 
                 className={`absolute top-2 bottom-2 rounded-full bg-brand-gold shadow-md transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)`}
                 style={{ 
                   left: activeTab === 'personal' ? '8px' : '50%', 
                   width: 'calc(50% - 12px)' 
                 }}
              ></div>
              
              <button 
                onClick={() => handleTabChange('personal')}
                className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 w-48 ${activeTab === 'personal' ? 'text-brand-black' : 'text-gray-500 hover:text-gray-400'}`}
              >
                Personal
              </button>
              <button 
                onClick={() => handleTabChange('business')}
                className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 w-48 ${activeTab === 'business' ? 'text-brand-black' : 'text-gray-500 hover:text-gray-400'}`}
              >
                Business
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Grid with animation key */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
        >
          {items.map((item, i) => {
            const title = typeof item === 'string' ? item : item.name;
            const desc = typeof item === 'string' ? undefined : item.desc;
            return (
              <div key={`${activeTab}-${i}`} className={`group relative p-8 rounded shadow-sm hover:shadow-2xl border transition-all duration-300 hover:-translate-y-2 ${cardBg}`}>
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 mb-6 rounded-full flex items-center justify-center text-2xl transition-colors ${activeTab === 'personal' ? 'bg-gray-50 text-brand-gold group-hover:bg-brand-gold group-hover:text-white' : 'bg-white/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-black'}`}>
                    <i className={`fas ${getIconForProduct(title)}`}></i>
                  </div>
                  <div>
                    <h4 className={`font-serif font-bold text-lg leading-tight mb-3 ${activeTab === 'personal' ? 'text-brand-black' : 'text-white'}`}>{title}</h4>
                    <p className={`text-xs leading-relaxed ${activeTab === 'personal' ? 'text-gray-500' : 'text-gray-400'}`}>
                      {desc ?? 'Comprehensive coverage designed for your specific needs.'}
                    </p>
                  </div>
                  {/* Removed 'Learn More' CTA per request */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuotingProcess() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-3xl animate-drift pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-gold/[0.03] rounded-full blur-3xl animate-drift-reverse pointer-events-none -translate-x-1/3"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">How We Work</span>
            <h3 className="text-4xl font-serif font-bold text-brand-black">The Praeto Process</h3>
          </div>
        </FadeIn>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}

          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {[
              { title: "Risk Assessment", desc: "Site visits & assessments with proposal document", icon: "fa-search-location" },
              { title: "Quote Analysis", desc: "Identify insurance exposure & gaps", icon: "fa-chart-pie" },
              { title: "Design", desc: "Structuring & Activating the optimal policy", icon: "fa-drafting-compass" },
              { title: "Management", desc: "Continuous claims handling & equipment tracking", icon: "fa-handshake" },
              { title: "Review", desc: "Quarterly client reviews", icon: "fa-clipboard-check" }

            ].map((step, i) => (
              <FadeIn key={i} delay={i * 150} direction="up">
                <div className="relative z-10 bg-white pt-4 text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:border-brand-gold transition-colors duration-500 relative">
                    <span className="absolute -top-3 bg-brand-grey text-[10px] font-bold px-2 py-1 rounded border border-gray-200">0{i + 1}</span>
                    <i className={`fas ${step.icon} text-brand-black group-hover:text-brand-gold transition-colors`} aria-hidden="true"></i>
                  </div>
                  <h4 className="font-serif font-bold text-xl mb-3 text-brand-black">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-brand-grey relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 dot-grid opacity-[0.035] pointer-events-none"></div>
      <WaveDivider fill="#FFFFFF" flip={true} />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <FadeIn direction="right">
          <div className="relative pl-8 pt-8">
             <div className="absolute inset-0 bg-brand-gold/20 rounded-br-[100px] z-0"></div>
             <div className="relative bg-white p-12 shadow-2xl border-l-4 border-brand-gold z-10">
                <i className="fas fa-quote-left text-6xl text-gray-100 absolute top-8 right-8 z-0"></i>
                <h3 className="text-4xl font-serif font-bold text-brand-black mb-8 relative z-10 leading-snug">
                  "We don't just sell policies.<br/>We engineer <span className="text-brand-gold">resilience</span>."
                </h3>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed relative z-10 font-light">
                  Founded in 1998 by Berkeley and Keshnee Pretorius, Praeto has grown from a family brokerage into a risk management powerhouse.
                </p>
                <div className="flex items-center space-x-6 relative z-10">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-brand-black mb-1">Berkeley Pretorius</div>
                    <div className="text-xs text-brand-gold">Founding Member</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-brand-black mb-1">Keshnee Pretorius</div>
                    <div className="text-xs text-brand-gold">Member</div>
                  </div>
                </div>
             </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="left">
          <h2 className="text-4xl font-serif font-bold text-brand-black mb-12">Why choose Praeto?</h2>
          <div className="space-y-10">
            {[
              { title: "Level 1 B-BBEE", desc: "135% procurement recognition. 40% Black Female Owned.", icon: "fa-certificate" },
              { title: "Proven Expertise", desc: `Licensed FSCA ${COMPANY_DETAILS.fsca} & CMS ${COMPANY_DETAILS.cms}.`, icon: "fa-id-badge" },
              { title: "Stability & Trust", desc: "27+ years of unbroken service with a 98% client retention rate.", icon: "fa-landmark" }
            ].map((item, i) => (
              <div key={i} className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded bg-white text-brand-black flex items-center justify-center text-2xl mr-8 shadow-md border border-gray-100 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-brand-black mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-32 bg-brand-black text-white relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/40 via-brand-black to-brand-black"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
             <i className="fas fa-comments text-brand-gold text-4xl mb-6 opacity-50"></i>
             <h3 className="text-4xl font-serif font-bold">Voices of Trust</h3>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 200} className="h-full">
              <blockquote className="h-full bg-white/5 backdrop-blur-sm border border-white/5 p-10 hover:border-brand-gold/30 transition-all duration-500">
                <div className="flex text-brand-gold mb-6 text-xs space-x-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-xl font-serif italic text-gray-200 mb-10 leading-relaxed">“{t.text}”</p>
                <footer className="flex items-center mt-auto border-t border-white/10 pt-6">
                   <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-black font-bold text-sm mr-4">
                      {t.author.charAt(0)}
                   </div>
                   <div>
                      <cite className="not-italic text-sm font-bold text-white block tracking-wide uppercase">{t.author.split(',')[0]}</cite>
                      <span className="text-xs text-gray-500 font-medium">{t.author.split(',').slice(1).join(',')}</span>
                   </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Capture form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = (formData.get('fullName') ?? '').toString().trim();
    const email = (formData.get('email') ?? '').toString().trim();
    const phoneNumber = (formData.get('phoneNumber') ?? '').toString().trim();
    const requirement = (formData.get('requirement') ?? '').toString().trim();
    const message = (formData.get('message') ?? '').toString().trim();
    const consentValue = formData.get('popiaConsent');
    const popiaConsent = consentValue === 'true' || consentValue === 'on' || consentValue === '1';

    if (!fullName || !email || !phoneNumber || !requirement) {
      setLoading(false);
      alert('Please complete all required fields before submitting.');
      return;
    }

    const payload = {
      fullName,
      email,
      phoneNumber,
      requirement,
      message,
      popiaConsent
    };

    const endpoint = import.meta.env.VITE_QUOTE_ENDPOINT ?? 'https://submit-form.com/your-form-id';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setDone(true);
      } else {
        const errorText = await response.text();
        console.error('Form submission failed:', errorText);
        alert('Failed to submit your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (done) return (
    <FadeIn className="text-center py-20 px-6 bg-white shadow-2xl border-t-4 border-brand-gold">
      <div className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
         <i className="fas fa-check text-brand-gold text-4xl" aria-hidden="true"></i>
      </div>
      <h4 className="text-3xl font-serif font-bold text-brand-black mb-4">Request Received</h4>
      <p className="text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">We have received your details. One of our risk engineers will be in touch shortly to discuss your tailored solution.</p>
      <button onClick={() => setDone(false)} className="px-8 py-3 bg-brand-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-colors">Submit another request</button>
    </FadeIn>
  );

  return (
    <FadeIn className="bg-white shadow-2xl p-8 md:p-12 border-t-4 border-brand-gold relative">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        <div className="md:col-span-2 mb-6">
           <h4 className="text-2xl font-serif font-bold text-brand-black mb-2">Start your consultation</h4>
           <p className="text-gray-500 text-sm">Fill in the details below for a no-obligation risk assessment.</p>
        </div>

        <div className="group">
          <label htmlFor="fullName" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-brand-gold transition-colors">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand-gold focus:outline-none transition-all font-serif text-xl placeholder-gray-300"
            placeholder="John Doe"
          />
        </div>
        
        <div className="group">
          <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-brand-gold transition-colors">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand-gold focus:outline-none transition-all font-serif text-xl placeholder-gray-300"
            placeholder="john@company.com"
          />
        </div>

        <div className="group">
          <label htmlFor="phoneNumber" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-brand-gold transition-colors">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            pattern="^\+?[0-9\s\-()]{7,25}$"
            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand-gold focus:outline-none transition-all font-serif text-xl placeholder-gray-300"
            placeholder="+27 ..."
          />
        </div>

        <div className="group">
          <label htmlFor="requirement" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-brand-gold transition-colors">Requirement</label>
          <select
            id="requirement"
            name="requirement"
            required
            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand-gold focus:outline-none transition-all font-serif text-xl text-gray-700 appearance-none cursor-pointer"
          >
                  <option value="">Select Cover Type...</option>
                  <optgroup label="Personal">
                    {PERSONAL_PRODUCTS.map((p) => (
                      <option key={`personal-${p.name}`} value={p.name}>{p.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Business">
                    {BUSINESS_PRODUCTS.map((p) => (
                      <option key={`business-${p.name}`} value={p.name}>{p.name}</option>
                    ))}
                  </optgroup>
          </select>
        </div>

        <div className="md:col-span-2 group">
          <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-brand-gold transition-colors">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-brand-gold focus:outline-none transition-all font-serif text-xl placeholder-gray-300 resize-none"
            placeholder="Tell us about your specific needs..."
          ></textarea>
        </div>

        <div className="md:col-span-2 flex items-start py-2">
          <input id="popiaConsent" name="popiaConsent" type="checkbox" value="true" required className="mt-1 mr-3 accent-brand-gold h-4 w-4" />
          <label htmlFor="popiaConsent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
              I authorize Praeto Risk & Insurance Management Solutions to process my personal information in accordance with POPIA for the purpose of providing a quotation.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="md:col-span-2 bg-brand-black text-white text-sm font-bold uppercase tracking-[0.2em] py-5 hover:bg-brand-gold hover:text-black transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <span>Processing...</span>
          ) : (
            <span className="flex items-center justify-center">
              {MAIN_CTA} <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
            </span>
          )}
        </button>
      </form>
    </FadeIn>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400 text-sm border-t border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-8">
            <div className="flex items-center">
              <img src="/praeto-word.png" alt="Praeto" className="w-28 md:w-32 lg:w-36 h-auto object-contain" />
              <span className="sr-only">Praeto</span>
            </div>
          </div>
          <div className="space-y-4 text-xs leading-relaxed">
             <p className="flex items-start"><i className="fas fa-map-marker-alt w-6 mt-0.5 text-brand-gold"></i> <span className="flex-1">{COMPANY_DETAILS.office}</span></p>
             <p className="flex items-center"><i className="fas fa-phone w-6 text-brand-gold"></i> <a href={`tel:${COMPANY_DETAILS.tel.replace(/\s/g,'')}`} className="hover:text-white transition">{COMPANY_DETAILS.tel}</a></p>
             <p className="flex items-center"><i className="fas fa-envelope w-6 text-brand-gold"></i> <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition">{COMPANY_DETAILS.email}</a></p>
          </div>
          <a
            href="https://maps.google.com/?q=63+Eight+Avenue+Windermere+Durban+4001"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center text-[10px] uppercase tracking-widest text-gray-500 hover:text-brand-gold transition-colors"
          >
            <i className="fas fa-map-marker-alt mr-2 text-brand-gold"></i> Get Directions
          </a>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-brand-gold/60 font-medium">Insurance is our business</p>
        </div>
        
        <div>
          <h5 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Personal</h5>
          <ul className="space-y-4 text-xs">
            {PERSONAL_PRODUCTS.slice(0, 5).map(p => (
                <li key={p.name}><a href="#solutions" className="hover:text-brand-gold transition-colors block">{p.name}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Business</h5>
          <ul className="space-y-4 text-xs">
            {BUSINESS_PRODUCTS.slice(0, 5).map(p => (
                <li key={p.name}><a href="#solutions" className="hover:text-brand-gold transition-colors block">{p.name}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Compliance</h5>
          <ul className="space-y-4 text-xs text-gray-500">
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>FSCA Number</span> <span className="text-gray-300">{COMPANY_DETAILS.fsca}</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>CMS Ref</span> <span className="text-gray-300">{COMPANY_DETAILS.cms}</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Reg No</span> <span className="text-gray-300">{COMPANY_DETAILS.regNo.split('/')[1]}...</span></li>
          </ul>
        </div>
      </div>
      <div className="bg-black px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[10px] uppercase tracking-widest opacity-50">
                © {new Date().getFullYear()} {COMPANY_DETAILS.tradingName}. All rights reserved.
            </div>
            <a
              href="https://www.linkedin.com/in/jaden-roskruge01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.35em] text-gray-400 opacity-10 hover:opacity-60 transition hidden md:block"
            >
              Crafted by J.R.
            </a>
        </div>
      </div>
    </footer>
  );
}

function AccreditationStrip() {
  const badges = [
    { icon: 'fa-certificate', label: 'FSCA Licensed', sub: `FSP ${COMPANY_DETAILS.fsca}` },
    { icon: 'fa-award', label: 'Level 1 B-BBEE', sub: '40% Black Female Owned' },
    { icon: 'fa-id-card', label: 'CMS Registered', sub: `Ref ${COMPANY_DETAILS.cms}` },
    { icon: 'fa-landmark', label: 'Est. 1998', sub: '27+ Years of Service' },
  ];
  return (
    <section className="py-12 bg-brand-grey border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-brand-gold/[0.08] rounded-full blur-3xl animate-float pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <WaveDivider fill="#FFFFFF" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center space-x-4 group">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-gold text-lg shadow-sm group-hover:border-brand-gold transition-colors duration-300">
                <i className={`fas ${b.icon}`}></i>
              </div>
              <div>
                <div className="text-xs font-bold text-brand-black uppercase tracking-wide">{b.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBrokerSection() {
  const points = [
    { icon: 'fa-balance-scale', title: 'Independent Advice', desc: 'We work for you, not the insurer. We compare across all major underwriters to find the best fit — not the highest commission.' },
    { icon: 'fa-handshake', title: 'Claims Advocacy', desc: 'When you claim, we fight in your corner. Our 15% claims ratio is proof — we structure cover that actually pays out.' },
    { icon: 'fa-sliders-h', title: 'Tailored Cover', desc: 'Off-the-shelf policies leave gaps. We engineer a programme around your exact risk profile — nothing more, nothing less.' },
    { icon: 'fa-phone-volume', title: 'Single Point of Contact', desc: 'One call handles everything — new cover, renewals, claims, endorsements. No call centres, no queues.' },
  ];
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-brand-gold/[0.05] rounded-full blur-3xl animate-drift pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-gold/[0.03] rounded-full blur-3xl animate-drift-reverse pointer-events-none"></div>
      <WaveDivider fill="#0A0A0A" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Broker Advantage</span>
            <h3 className="text-4xl font-serif font-bold text-brand-black">Why use a broker over going direct?</h3>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <FadeIn key={i} delay={i * 100} direction="up">
              <div className="flex items-start space-x-6 group p-8 border border-gray-100 hover:border-brand-gold transition-all duration-300 hover:shadow-lg">
                <div className="flex-shrink-0 w-14 h-14 bg-brand-grey rounded flex items-center justify-center text-xl text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-black mb-3">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClaimsSection() {
  return (
    <section id="claims" className="py-32 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Claims &amp; Emergencies</span>
            <h3 className="text-4xl font-serif font-bold mb-8">Need to report a claim?</h3>
            <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light">
              We manage the entire claims process on your behalf — from first notification to final settlement. Contact us immediately after any incident.
            </p>
            <div className="space-y-5">
              <a href={`tel:${COMPANY_DETAILS.tel.replace(/\s/g,'')}`} className="flex items-center space-x-5 group">
                <div className="w-12 h-12 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Office Line</div>
                  <div className="text-white font-bold">{COMPANY_DETAILS.tel}</div>
                </div>
              </a>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="flex items-center space-x-5 group">
                <div className="w-12 h-12 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">Email</div>
                  <div className="text-white font-bold">{COMPANY_DETAILS.email}</div>
                </div>
              </a>
              <a href={`https://wa.me/${COMPANY_DETAILS.tel.replace(/\s/g,'')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 group">
                <div className="w-12 h-12 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">WhatsApp</div>
                  <div className="text-white font-bold">Send us a message</div>
                </div>
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-3">
              {[
                { step: '01', title: 'Notify Us Immediately', desc: 'Call, email or WhatsApp us as soon as an incident occurs. Prompt notification protects your claim.' },
                { step: '02', title: 'Document Everything', desc: 'Photograph damage, collect third-party details, and obtain a case number from SAPS where applicable.' },
                { step: '03', title: 'We Lodge the Claim', desc: 'Praeto manages the entire submission process with the underwriter on your behalf.' },
                { step: '04', title: 'Settlement', desc: 'We monitor progress and advocate for a fair, speedy settlement from the insurer.' },
              ].map((s, i) => (
                <div key={i} className="flex items-start space-x-6 p-6 border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                  <span className="text-brand-gold/30 font-serif font-bold text-4xl leading-none flex-shrink-0">{s.step}</span>
                  <div>
                    <h4 className="font-bold text-white mb-2">{s.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      <WaveDivider fill="#F8F9FA" flip={true} />
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'What is a short-term insurance broker?', a: 'A broker acts as an intermediary between you and insurance underwriters. Unlike going directly to an insurer, a broker shops the market on your behalf, provides independent advice, and advocates for you at claims stage — at no extra cost to you.' },
    { q: 'How does Praeto get paid?', a: 'Praeto earns a commission from the insurer, built into your premium. You do not pay us separately for advice or administration. This means our service costs you nothing extra compared to going direct.' },
    { q: `What does FSCA FSP ${COMPANY_DETAILS.fsca} mean?`, a: `The Financial Sector Conduct Authority (FSCA) regulates financial service providers in South Africa. Praeto holds FSP licence ${COMPANY_DETAILS.fsca}, meaning we are legally authorised to provide insurance advice and intermediary services.` },
    { q: 'What is Level 1 B-BBEE and why does it matter?', a: 'Level 1 is the highest Broad-Based Black Economic Empowerment rating. Clients who procure services from Praeto can recognise 135% of their spend for B-BBEE procurement purposes — a significant advantage for businesses and municipalities.' },
    { q: 'How do I report a claim?', a: `Call us on ${COMPANY_DETAILS.tel}, email ${COMPANY_DETAILS.email}, or WhatsApp us immediately after an incident. We handle the entire claims submission and management process on your behalf.` },
    { q: 'How long does a claim take to settle?', a: 'Settlement timelines depend on the complexity and the underwriter. Simple claims (e.g. windscreen, minor vehicle damage) can settle within days. More complex claims are actively tracked and managed by our team throughout.' },
    { q: 'Can Praeto cover my municipality or government entity?', a: 'Yes. Praeto has extensive experience placing cover for local municipalities, including fleets, public liability, material damage, and personal accident cover for councillors and staff.' },
    { q: 'What is POPIA and how does it affect my personal data?', a: 'The Protection of Personal Information Act (POPIA) governs how your personal data is collected and used in South Africa. Praeto processes your information solely to provide insurance quotations and services, and does not share it without your consent.' },
  ];
  return (
    <section className="py-32 bg-brand-grey relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-gold/[0.07] rounded-full blur-3xl animate-drift pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-brand-gold/[0.04] rounded-full blur-3xl animate-drift-reverse pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Got Questions?</span>
            <h3 className="text-4xl font-serif font-bold text-brand-black">Frequently Asked Questions</h3>
          </div>
        </FadeIn>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div className="border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-serif font-semibold text-brand-black pr-8">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-brand-gold flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`transition-all duration-300 ease-out overflow-hidden ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-8 pb-6 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <a
      href={`https://wa.me/${COMPANY_DETAILS.tel.replace(/\s/g,'')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-brand-black border border-white/10 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="fas fa-arrow-up text-sm"></i>
    </button>
  );
}

export default function App() {
  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-brand-gold selection:text-white">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <PartnersBanner />
        <AccreditationStrip />
        <QuotingProcess />
        <SolutionsSection />
        <About />
        <WhyBrokerSection />
        <TestimonialsSection />
        <ClaimsSection />
        <FAQSection />
        <div id="quote" className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}