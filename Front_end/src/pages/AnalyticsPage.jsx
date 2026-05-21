import { Link } from 'react-router-dom';
import React from 'react';

const HistoricalDataAnalytics = () => {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar from JSON */}
      <header className="fixed top-0 w-full z-50 bg-[#040e21] flex justify-between items-center px-8 h-16 border-b border-[#a1abc5]/15 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
        <div className="text-xl font-bold tracking-tighter text-[#00d4ff] font-headline">VOLT_SYNC</div>
        <nav className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          <Link className="text-[#a1abc5] hover:text-white transition-colors" to="/dashboard">Dashboard</Link>
          <Link className="text-[#00d4ff] border-b-2 border-[#00d4ff] pb-1 font-bold" to="/analytics">History</Link>
          <Link className="text-[#a1abc5] hover:text-white transition-colors" to="#">Assets</Link>
          <Link className="text-[#a1abc5] hover:text-white transition-colors" to="#">Reports</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <button className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded text-sm font-bold tracking-wide active:scale-95 duration-150 transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            Export CSV
          </button>
          <div className="flex items-center space-x-3 text-[#a1abc5]">
            <span className="material-symbols-outlined hover:bg-[#121f3a] hover:text-[#00d4ff] p-2 rounded transition-all cursor-pointer" data-icon="settings">settings</span>
            <span className="material-symbols-outlined hover:bg-[#121f3a] hover:text-[#00d4ff] p-2 rounded transition-all cursor-pointer" data-icon="account_circle">account_circle</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-8 max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex justify-between items-end">
          <div>
            <p className="label-sm uppercase tracking-widest text-primary-fixed-dim font-headline mb-1">Telemetry Logs</p>
            <h1 className="text-4xl font-bold font-headline tracking-tight text-on-surface">Historical Data Analytics</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></div>
              <span className="text-xs font-medium text-on-surface-variant font-headline">TX-L492 NODE ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Analytics Section (Bento Chart) */}
        <div className="glass-panel rounded-xl overflow-hidden oscilloscope-grid p-8 relative">
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-headline text-on-surface">Transmission Load Fluctuations</h3>
              <p className="text-sm text-on-surface-variant">Last 24 Hours • 5-minute sampling rate</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="w-12 h-0.5 bg-primary-container rounded-full shadow-[0_0_8px_#00d2fd]"></span>
                <span className="text-xs font-bold font-headline text-on-surface tracking-wider">VOLTAGE (V)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 h-0.5 bg-tertiary-container rounded-full shadow-[0_0_8px_#6bff8f]"></span>
                <span className="text-xs font-bold font-headline text-on-surface tracking-wider">CURRENT (A)</span>
              </div>
            </div>
          </div>

          {/* SVG Chart Placeholder (Simulating Kinetic Blueprint Style) */}
          <div className="h-80 w-full relative">
            <svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 1000 300">
              {/* Voltage Line (Blue) */}
              <path className="drop-shadow-[0_0_10px_#00d2fd]" d="M0 150 Q 50 140, 100 155 T 200 145 T 300 160 T 400 140 T 500 220 T 600 145 T 700 150 T 800 155 T 900 140 T 1000 150" fill="none" stroke="#00d2fd" strokeLinecap="round" strokeWidth="3" />
              {/* Current Line (Green) */}
              <path className="drop-shadow-[0_0_10px_#6bff8f]" d="M0 250 Q 50 255, 100 245 T 200 250 T 300 240 T 400 255 T 500 80 T 600 250 T 700 245 T 800 250 T 900 240 T 1000 255" fill="none" stroke="#6bff8f" strokeLinecap="round" strokeWidth="3" />
            </svg>

            {/* Time Markers */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-on-surface-variant font-headline pt-4 border-t border-outline-variant/20">
              <span>14:00 (YESTERDAY)</span>
              <span>18:00</span>
              <span>22:00</span>
              <span>02:00</span>
              <span>06:00</span>
              <span>10:00</span>
              <span>14:00 (TODAY)</span>
            </div>

            {/* Dynamic Hover Highlight Indicator */}
            <div className="absolute left-[50%] top-0 h-full border-l border-primary-fixed/30 flex items-center group cursor-pointer">
              <div className="bg-primary px-2 py-1 rounded text-[10px] font-bold text-on-primary -translate-x-1/2 -translate-y-12 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                FAULT DETECTED: 195.0V
              </div>
            </div>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold font-headline text-on-surface tracking-tight">Sequence of Events</h2>
            <div className="h-px flex-1 bg-outline-variant/15"></div>
            <div className="flex gap-2">
              <button className="p-2 glass-panel rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
              </button>
              <button className="p-2 glass-panel rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-sm" data-icon="search">search</span>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
                  <th className="px-6 py-4 text-xs font-bold font-headline text-primary-fixed-dim tracking-widest uppercase">Timestamp</th>
                  <th className="px-6 py-4 text-xs font-bold font-headline text-primary-fixed-dim tracking-widest uppercase">Voltage (V)</th>
                  <th className="px-6 py-4 text-xs font-bold font-headline text-primary-fixed-dim tracking-widest uppercase">Current (A)</th>
                  <th className="px-6 py-4 text-xs font-bold font-headline text-primary-fixed-dim tracking-widest uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-bold font-headline text-primary-fixed-dim tracking-widest uppercase">Fault Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 font-body text-sm">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-highest transition-colors">
                  <td className="px-6 py-4 text-on-surface font-headline font-medium">2024-05-20 14:30:00</td>
                  <td className="px-6 py-4 text-primary">220.5V</td>
                  <td className="px-6 py-4 text-tertiary-fixed-dim">5.1A</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary-fixed-dim text-[10px] font-bold font-headline uppercase tracking-tighter">Normal</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">-</td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-highest transition-colors">
                  <td className="px-6 py-4 text-on-surface font-headline font-medium">2024-05-20 14:25:00</td>
                  <td className="px-6 py-4 text-primary">218.2V</td>
                  <td className="px-6 py-4 text-tertiary-fixed-dim">5.3A</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary-fixed-dim text-[10px] font-bold font-headline uppercase tracking-tighter">Normal</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">-</td>
                </tr>
                {/* Row 3: Fault */}
                <tr className="bg-error-container/5 hover:bg-error-container/10 transition-colors">
                  <td className="px-6 py-4 text-on-surface font-headline font-medium">2024-05-20 14:20:00</td>
                  <td className="px-6 py-4 text-error font-bold italic">195.0V</td>
                  <td className="px-6 py-4 text-tertiary-fixed-dim">4.2A</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold font-headline uppercase tracking-tighter shadow-[0_0_8px_rgba(159,5,25,0.5)]">Fault</span>
                  </td>
                  <td className="px-6 py-4 text-error-dim font-bold">Voltage Drop</td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-highest transition-colors">
                  <td className="px-6 py-4 text-on-surface font-headline font-medium">2024-05-20 14:15:00</td>
                  <td className="px-6 py-4 text-primary">221.0V</td>
                  <td className="px-6 py-4 text-tertiary-fixed-dim">5.2A</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary-fixed-dim text-[10px] font-bold font-headline uppercase tracking-tighter">Normal</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">-</td>
                </tr>
                {/* Row 5: Fault */}
                <tr className="bg-error-container/5 hover:bg-error-container/10 transition-colors">
                  <td className="px-6 py-4 text-on-surface font-headline font-medium">2024-05-20 14:10:00</td>
                  <td className="px-6 py-4 text-primary">220.1V</td>
                  <td className="px-6 py-4 text-error font-bold italic">15.5A</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold font-headline uppercase tracking-tighter shadow-[0_0_8px_rgba(159,5,25,0.5)]">Fault</span>
                  </td>
                  <td className="px-6 py-4 text-error-dim font-bold">Overload</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination/Footer Stats */}
          <div className="flex justify-between items-center text-on-surface-variant font-headline text-xs px-2">
            <div className="flex gap-8">
              <span>TOTAL LOGS: <span className="text-on-surface">1,482</span></span>
              <span>ANOMALIES DETECTED: <span className="text-error-dim">14</span></span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-primary transition-colors">PREVIOUS</button>
              <div className="flex gap-1">
                <span className="w-6 h-6 flex items-center justify-center bg-primary text-on-primary rounded-sm font-bold">1</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-surface-container transition-colors rounded-sm">2</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-surface-container transition-colors rounded-sm">3</span>
              </div>
              <button className="hover:text-primary transition-colors">NEXT</button>
            </div>
          </div>
        </div>
      </main>

      {/* SideNavBar (Mobile Context / System Info) - Floating hidden on large screens but logically present */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40">
        <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-6 shadow-2xl">
          <div className="text-center">
            <span className="material-symbols-outlined text-primary-fixed mb-1" data-icon="sensors" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
            <p className="text-[10px] font-headline font-bold uppercase text-on-surface-variant">Live</p>
          </div>
          <div className="text-center opacity-50 grayscale">
            <span className="material-symbols-outlined text-on-surface-variant mb-1" data-icon="map">map</span>
            <p className="text-[10px] font-headline font-bold uppercase text-on-surface-variant">Map</p>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-error-dim mb-1" data-icon="warning">warning</span>
            <p className="text-[10px] font-headline font-bold uppercase text-on-surface-variant">Alerts</p>
          </div>
          <div className="w-8 h-px bg-outline-variant/30"></div>
          <div className="text-center">
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="help">help</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default HistoricalDataAnalytics;