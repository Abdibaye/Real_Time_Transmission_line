import React from 'react';

export default function PhaseMonitoring() {
  const phases = [
    { name: "Phase R", voltage: "220V", current: "5.2A", status: "Normal", color: "text-[#ff716c]", shadow: "shadow-[0_0_15px_rgba(255,113,108,0.4)]", bg: "bg-[#ff716c]" },
    { name: "Phase Y", voltage: "218V", current: "5.1A", status: "Normal", color: "text-[#ffd966]", shadow: "shadow-[0_0_15px_rgba(255,217,102,0.4)]", bg: "bg-[#ffd966]" },
    { name: "Phase B", voltage: "221V", current: "5.3A", status: "Normal", color: "text-[#6dddff]", shadow: "shadow-[0_0_15px_rgba(109,221,255,0.4)]", bg: "bg-[#6dddff]" },
  ];

  return (
    <div className="space-y-8 tracking-tight">
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-3xl font-bold text-on-surface">Real-Time Phase Monitoring</h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest font-bold">Live Stream Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <div key={phase.name} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 hover:border-outline-variant/40 transition-all group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 ${phase.bg}/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform`}></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className={`text-sm uppercase tracking-widest font-bold ${phase.color}`}>{phase.name}</span>
              <span className={`px-2 py-1 rounded bg-surface-container ${phase.color} text-[10px] uppercase font-bold tracking-wider border border-white/5`}>
                {phase.status}
              </span>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1 block">Voltage</span>
                <div className="flex items-baseline gap-2">
                  <span className={`font-headline text-5xl font-bold ${phase.color} ${phase.shadow} drop-shadow-lg`}>{phase.voltage.replace('V','')}</span>
                  <span className="text-xl font-light text-on-surface-variant">V</span>
                </div>
              </div>
              
              <div className="w-full h-px bg-outline-variant/20"></div>

              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1 block">Current</span>
                <div className="flex items-baseline gap-2">
                  <span className={`font-headline text-4xl font-bold ${phase.color} opacity-90`}>{phase.current.replace('A','')}</span>
                  <span className="text-lg font-light text-on-surface-variant">A</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
