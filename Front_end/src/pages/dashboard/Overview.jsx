import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="space-y-8 tracking-tight">
      <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-12 border border-outline-variant/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6dddff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-on-surface-variant text-xs uppercase tracking-[0.3em] font-bold mb-4">Command Center</h2>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
              Grid <span className="text-primary">Intelligence</span> Overview
            </h1>
            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
              Real-time synchronization with node telemetry. View high-level metrics for all three transmission phases or drill down into specific analytics.
            </p>
            <div className="flex gap-4">
              <Link to="/dashboard/monitoring" className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all">
                PHASE MONITORING
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[60px] rounded-full"></div>
              <span className="material-symbols-outlined text-9xl text-primary glow-primary" style={{ fontSize: '160px' }}>bolt</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-4 border border-tertiary/20">
            <span className="material-symbols-outlined text-tertiary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h3 className="text-tertiary font-headline font-bold mb-1">NORMAL OPERATION</h3>
          <p className="text-on-surface-variant text-xs">Phases balanced and active.</p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary">router</span>
          </div>
          <h3 className="text-primary font-headline font-bold mb-1">RELAYS ACTIVE</h3>
          <p className="text-on-surface-variant text-xs">Protection systems armed.</p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center mb-4 border border-outline-variant/20">
            <span className="material-symbols-outlined text-on-surface-variant">history</span>
          </div>
          <h3 className="text-on-surface font-headline font-bold mb-1">0 FAULTS DETECTED</h3>
          <p className="text-on-surface-variant text-xs">Last 24 hours log clear.</p>
        </div>
      </section>
    </div>
  );
}
