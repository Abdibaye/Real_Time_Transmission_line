import React from 'react';

const TechStack = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-tighter text-on-background">
          Technology Stack
        </h2>
        <p className="text-on-surface-variant mt-2">The engineering core of our monitoring system</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">memory</span>
          <span className="font-label font-bold text-sm tracking-widest">ARDUINO</span>
        </div>
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">schema</span>
          <span className="font-label font-bold text-sm tracking-widest">PROTEUS</span>
        </div>
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-on-tertiary-container group-hover:scale-110 transition-transform">code</span>
          <span className="font-label font-bold text-sm tracking-widest">NODE.JS</span>
        </div>
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">database</span>
          <span className="font-label font-bold text-sm tracking-widest">SQLITE</span>
        </div>
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-error group-hover:scale-110 transition-transform">html</span>
          <span className="font-label font-bold text-sm tracking-widest">HTML/CSS/JS</span>
        </div>
        <div className="px-6 py-4 glass-panel border border-outline-variant/30 rounded-xl flex items-center gap-4 hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-tertiary-dim group-hover:scale-110 transition-transform">hub</span>
          <span className="font-label font-bold text-sm tracking-widest">SOCKET.IO</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
