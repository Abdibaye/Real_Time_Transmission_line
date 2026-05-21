import React from 'react';

export default function FaultDetection() {
  const activeFaults = [
    { id: 1, phase: 'Phase R', type: 'Overvoltage', timestamp: '2024-05-20 14:15:22', message: 'Voltage exceeded 245V threshold', severity: 'error' },
    { id: 2, phase: 'Phase B', type: 'Phase Failure', timestamp: '2024-05-20 14:02:11', message: 'Current dropped to 0A on line', severity: 'error' },
    { id: 3, phase: 'Phase Y', type: 'Current Spike', timestamp: '2024-05-20 13:45:00', message: 'Transient overload detected (15A limit)', severity: 'warning' },
  ];

  return (
    <div className="space-y-8 tracking-tight">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface">Fault Detection Display</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Automated surveillance and anomaly flagging</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">System Status</span>
          <div className="px-4 py-2 bg-error/10 border border-error/30 rounded text-error text-xs font-bold uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">warning</span>
            Faults Detected
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeFaults.map(fault => (
          <div key={fault.id} className="bg-surface-container border border-error/50 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-error/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${fault.severity === 'error' ? 'bg-[#ff716c] shadow-[0_0_10px_#ff716c]' : 'bg-[#ffd966] shadow-[0_0_10px_#ffd966]'}`}></div>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface font-bold">{fault.phase}</span>
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
                {fault.timestamp.split(' ')[1]}
              </span>
            </div>

            <h3 className={`font-headline text-xl font-bold mb-2 ${fault.severity === 'error' ? 'text-[#ff716c]' : 'text-[#ffd966]'}`}>
              {fault.type}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {fault.message}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
