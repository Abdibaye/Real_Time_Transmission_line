import React from 'react';

export default function HistoricalLogs() {
  const historyData = [
    { id: 1, time: '14:20:00 20/05', phase: 'Phase R', voltage: '246.5V', current: '5.2A', status: 'Fault (Overvoltage)' },
    { id: 2, time: '14:15:30 20/05', phase: 'Phase B', voltage: '220.1V', current: '0.0A', status: 'Fault (Disconnected)' },
    { id: 3, time: '14:10:00 20/05', phase: 'Phase Y', voltage: '219.8V', current: '5.1A', status: 'Normal' },
    { id: 4, time: '14:05:00 20/05', phase: 'Phase R', voltage: '221.0V', current: '5.2A', status: 'Normal' },
    { id: 5, time: '14:00:00 20/05', phase: 'Phase B', voltage: '220.5V', current: '5.3A', status: 'Normal' },
  ];

  return (
    <div className="space-y-8 tracking-tight">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface">Data History</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Historical telemetry logs and records</p>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#121f3a] border-b border-outline-variant/30">
            <tr>
              <th className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Time</th>
              <th className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Phase</th>
              <th className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Voltage</th>
              <th className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Current</th>
              <th className="px-6 py-4 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 text-sm">
            {historyData.map(row => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-on-surface-variant">{row.time}</td>
                <td className="px-6 py-4 font-bold text-on-surface">{row.phase}</td>
                <td className={`px-6 py-4 font-mono ${parseFloat(row.voltage) > 240 ? 'text-[#ff716c]' : 'text-primary'}`}>{row.voltage}</td>
                <td className={`px-6 py-4 font-mono ${parseFloat(row.current) === 0 ? 'text-[#ff716c]' : 'text-primary'}`}>{row.current}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${row.status.includes('Fault') ? 'bg-error/20 text-[#ff716c] border border-[#ff716c]/30' : 'bg-tertiary/20 text-[#6bff8f] border border-[#6bff8f]/30'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
