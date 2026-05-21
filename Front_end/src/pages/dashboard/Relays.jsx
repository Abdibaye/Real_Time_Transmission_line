import React from 'react';

export default function Relays() {
  const relays = [
    { phase: "Phase R", status: "TRIPPED", statusClass: "text-[#ff716c] border-[#ff716c]/30", icon: "warning", explanation: "Overvoltage protection engaged." },
    { phase: "Phase Y", status: "ONLINE", statusClass: "text-[#6bff8f] border-[#6bff8f]/30", icon: "check_circle", explanation: "Normal operation." },
    { phase: "Phase B", status: "ONLINE", statusClass: "text-[#6bff8f] border-[#6bff8f]/30", icon: "check_circle", explanation: "Normal operation." }
  ];

  return (
    <div className="space-y-8 tracking-tight">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface">Relay Control Status</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Automated protection mechanism states</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relays.map(relay => (
          <div key={relay.phase} className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <span className="text-sm font-bold tracking-widest uppercase mb-6 z-10">{relay.phase}</span>
            
            <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 z-10 ${relay.status === 'TRIPPED' ? 'border-[#ff716c]/50 bg-[#ff716c]/10' : 'border-[#6bff8f]/30 bg-[#6bff8f]/5'}`}>
               <span className={`material-symbols-outlined text-4xl ${relay.status === 'TRIPPED' ? 'text-[#ff716c]' : 'text-[#6bff8f]'}`}>{relay.icon}</span>
            </div>

            <span className={`font-headline text-2xl font-bold tracking-widest mb-2 z-10 ${relay.status === 'TRIPPED' ? 'text-[#ff716c]' : 'text-[#6bff8f]'}`}>
              {relay.status}
            </span>
            <p className="text-xs text-on-surface-variant z-10">{relay.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
