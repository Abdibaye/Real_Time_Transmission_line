import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full py-24 px-8 overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-secondary to-transparent blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <span className="font-label text-primary-fixed uppercase tracking-widest text-sm font-bold mb-4 block">
            Adama Science and Technology University
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-6 leading-none">
            Real-Time Electrical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary-dim">Transmission Line</span> Monitoring
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8 leading-relaxed">
            An IoT-driven engineering framework designed for high-precision fault detection and grid reliability optimization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-bold rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all">
              View Documentation
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg aspect-square glass-panel rounded-full flex items-center justify-center relative border border-outline-variant/20">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-px bg-primary/40 rotate-45"></div>
            <div className="w-full h-px bg-primary/40 -rotate-45"></div>
            <div className="w-px h-full bg-primary/40"></div>
            <div className="w-full h-px bg-primary/40"></div>
          </div>
          <span className="material-symbols-outlined text-9xl text-primary glow-primary" style={{ fontVariationSettings: "'wght' 200" }}>
            electric_bolt
          </span>
          <div className="absolute -bottom-4 -right-4 p-6 glass-panel rounded-2xl border border-outline-variant/30 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-tertiary shadow-[0_0_10px_#6bff8f]"></div>
            <span className="font-label text-xs font-bold tracking-widest uppercase">
              System Status: Synchronized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
