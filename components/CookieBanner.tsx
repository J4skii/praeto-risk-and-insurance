import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('praeto_cookie_consent');
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('praeto_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('praeto_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-brand-black border-t border-white/10 px-6 py-5 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-gray-400 text-xs leading-relaxed max-w-2xl">
          <span className="text-white font-semibold">Cookie Notice — </span>
          This site uses cookies to improve your experience and to process quote requests. By continuing to use{' '}
          <span className="text-brand-gold">praeto.co.za</span> you agree to our use of cookies in accordance with POPIA and our Privacy Policy.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs text-gray-500 hover:text-white transition-colors px-4 py-2 uppercase tracking-widest"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs font-bold uppercase tracking-widest bg-brand-gold text-brand-black px-6 py-3 hover:bg-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
