import { Link } from 'react-router-dom';
import React from 'react';

export default function EngineeringMonitoringDashboard() {
  return (
    <div className="font-body text-on-surface overflow-hidden">
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#060e20] text-blue-400 font-['Space_Grotesk'] tracking-tight shadow-[0_0_15px_rgba(133,173,255,0.1)] flex justify-between items-center h-16 px-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tighter text-[#dee5ff]">SYNTHETIC_OBSERVATORY</span>
          <div className="h-4 w-[1px] bg-outline-variant/30"></div>
          <h1 className="text-sm font-medium uppercase tracking-widest text-on-surface-variant">Real-Time Electrical Transmission Line Monitoring System</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold tracking-widest text-primary">14:25:30</span>
            <span className="text-[10px] uppercase text-on-surface-variant/60">System Local Time</span>
          </div>
          <div className="flex items-center gap-3 bg-surface-container px-4 py-2 rounded-lg border border-outline-variant/20">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary led-glow-secondary"></div>
            <span className="text-xs font-bold uppercase tracking-tighter text-on-surface">Connected to Arduino</span>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="sensors">sensors</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="wifi_tethering">wifi_tethering</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="schedule">schedule</span>
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <nav className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#060e20] border-r border-white/5 font-['Inter'] text-sm flex flex-col py-6">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high border border-outline-variant/10">
            <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" data-icon="account_tree">account_tree</span>
            </div>
            <div>
              <p className="font-headline font-bold text-blue-400 text-xs tracking-widest uppercase">GRID_MONITOR_v1</p>
              <p className="text-[10px] text-on-surface-variant">System Node Alpha</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <div className="px-3">
            <Link className="flex items-center gap-4 px-4 py-3 bg-blue-400/10 text-blue-400 border-l-2 border-blue-400 transition-all duration-300" to="/analytics">
              <span className="material-symbols-outlined text-xl" data-icon="analytics">analytics</span>
              <span className="font-medium">Live Telemetry</span>
            </Link>
            <Link className="flex items-center gap-4 px-4 py-3 text-[#dee5ff]/40 hover:bg-white/5 transition-all duration-300" to="#">
              <span className="material-symbols-outlined text-xl" data-icon="bolt">bolt</span>
              <span className="font-medium">Fault Analysis</span>
            </Link>
            <Link className="flex items-center gap-4 px-4 py-3 text-[#dee5ff]/40 hover:bg-white/5 transition-all duration-300" to="#">
              <span className="material-symbols-outlined text-xl" data-icon="account_tree">account_tree</span>
              <span className="font-medium">Network Topology</span>
            </Link>
            <Link className="flex items-center gap-4 px-4 py-3 text-[#dee5ff]/40 hover:bg-white/5 transition-all duration-300" to="/analytics">
              <span className="material-symbols-outlined text-xl" data-icon="history">history</span>
              <span className="font-medium">Historical Logs</span>
            </Link>
          </div>
        </div>
        <div className="px-3 border-t border-white/5 pt-6">
          <Link className="flex items-center gap-4 px-4 py-3 text-[#dee5ff]/40 hover:bg-white/5 transition-all duration-300" to="#">
            <span className="material-symbols-outlined text-xl" data-icon="settings">settings</span>
            <span className="font-medium">Settings</span>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-3 text-[#dee5ff]/40 hover:bg-white/5 transition-all duration-300" to="#">
            <span className="material-symbols-outlined text-xl" data-icon="help">help</span>
            <span className="font-medium">Support</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="ml-64 mt-16 p-8 h-[calc(100vh-64px-44px)] overflow-y-auto bg-surface">
        <div className="grid grid-cols-12 gap-6">
          {/* Left & Center: Live Monitoring */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Schematic & Gauges Bento */}
            <div className="grid grid-cols-3 gap-6">
              {/* Transmission Tower Schematic */}
              <div className="col-span-1 glass-card rounded-full p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <span className="material-symbols-outlined text-[120px] text-primary/40 mb-4" data-icon="transmission_tower">cell_tower</span>
                  <p className="font-headline text-xs tracking-widest text-primary font-bold uppercase">Node Alpha-7 Segment</p>
                </div>
                {/* Decorative Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
              </div>
              {/* Large Gauge Cards */}
              <div className="col-span-2 grid grid-cols-3 gap-4">
                <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Phase Voltage</span>
                  <div className="mt-4">
                    <span className="font-headline text-5xl font-bold text-on-surface">220<span className="text-2xl text-primary ml-1">V</span></span>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full mt-4 overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-primary to-primary-dim"></div>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Line Current</span>
                  <div className="mt-4">
                    <span className="font-headline text-5xl font-bold text-on-surface">5.2<span className="text-2xl text-secondary ml-1">A</span></span>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full mt-4 overflow-hidden">
                      <div className="h-full w-[42%] bg-gradient-to-r from-secondary to-secondary-dim"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-headline text-2xl font-bold text-secondary uppercase tracking-tighter">NORMAL</span>
                  <span className="text-[10px] text-secondary/60 font-bold uppercase mt-2">Grid Health Stable</span>
                </div>
              </div>
            </div>

            {/* Fault Indicators Section */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-4 h-4 mt-1 rounded-full bg-secondary led-glow-secondary flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Voltage Drop Fault</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">Monitoring phase fluctuations. Current deviation &lt; 2%.</p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-4 h-4 mt-1 rounded-full bg-secondary led-glow-secondary flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Overload Fault</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">Thermal limit monitoring active. Load factor 0.42.</p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-4 h-4 mt-1 rounded-full bg-secondary led-glow-secondary flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Line Break Fault</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">Continuity sensors operational. Impedance nominal.</p>
                </div>
              </div>
            </div>

            {/* Graph Section */}
            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-headline text-lg font-bold text-on-surface uppercase tracking-widest">Real-Time Telemetry</h2>
                  <p className="text-xs text-on-surface-variant">60 Second Transmission Window (Sampling: 200ms)</p>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-primary"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Voltage (V)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-secondary"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Current (A)</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[240px] w-full border-l border-b border-outline-variant/20 flex items-end">
                {/* Simulated Chart Content (SVG for precision) */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                  {/* Grid Lines */}
                  <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4" x1="0" x2="1000" y1="25" y2="25"></line>
                  <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4" x1="0" x2="1000" y1="50" y2="50"></line>
                  <line stroke="rgba(255,255,255,0.05)" strokeDasharray="4" x1="0" x2="1000" y1="75" y2="75"></line>
                  {/* Voltage Line (Blue) */}
                  <path className="opacity-80" d="M0 40 Q 50 35, 100 42 T 200 38 T 300 45 T 400 40 T 500 43 T 600 39 T 700 41 T 800 38 T 900 44 T 1000 40" fill="none" stroke="#85adff" strokeWidth="2"></path>
                  {/* Current Line (Green) */}
                  <path className="opacity-80" d="M0 70 Q 50 72, 100 68 T 200 75 T 300 70 T 400 73 T 500 69 T 600 74 T 700 71 T 800 72 T 900 68 T 1000 70" fill="none" stroke="#6bff8f" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Event Log */}
          <div className="col-span-12 lg:col-span-3">
            <div className="glass-card rounded-xl h-full flex flex-col">
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm" data-icon="list_alt">list_alt</span>
                  <h2 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface">Event Log</h2>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="p-3 bg-surface-container-high rounded border-l-2 border-primary">
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">14:25:05</p>
                  <p className="text-xs text-on-surface">Handshake confirmed with remote node ALPHA-7.</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded border-l-2 border-outline-variant">
                  <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">14:24:50</p>
                  <p className="text-xs text-on-surface-variant">System ping successful. Latency 14ms.</p>
                </div>
                <div className="p-3 bg-surface-container-high rounded border-l-2 border-primary">
                  <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tighter">14:24:10</p>
                  <p className="text-xs text-on-surface">System Initialized. Kernel v4.2.1-stable.</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded border-l-2 border-outline-variant">
                  <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">14:20:00</p>
                  <p className="text-xs text-on-surface-variant">Cold boot sequence initiated by operator.</p>
                </div>
                {/* Ghost items to fill space */}
                <div className="p-3 opacity-30 border-l-2 border-transparent">
                  <p className="text-[10px] mb-1">14:15:22</p>
                  <p className="text-xs">Subsystem diagnostic sweep complete.</p>
                </div>
              </div>
              <button className="m-4 p-3 bg-primary-container text-on-primary-container rounded font-bold text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                Export Session Log
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 right-0 w-[calc(100%-256px)] bg-white/5 font-['Inter'] text-[10px] uppercase tracking-widest flex justify-between items-center px-8 py-3">
        <div className="flex items-center gap-6">
          <span className="text-on-surface-variant/40">© 2024 Adama Science and Technology University</span>
          <div className="h-3 w-[1px] bg-white/10"></div>
          <span className="text-blue-400">Software Dashboard | v1.0.2</span>
        </div>
        <div className="flex gap-4">
          <Link className="text-[#dee5ff]/30 hover:text-blue-300 transition-colors" to="#">Documentation</Link>
          <Link className="text-[#dee5ff]/30 hover:text-blue-300 transition-colors" to="#">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}