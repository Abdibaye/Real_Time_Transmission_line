import { Link } from 'react-router-dom';
import React from 'react';

export default function EngineeringIoTDashboard() {
  return (
    <div className="bg-surface overflow-x-hidden">
      {/* Background Watermark */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-40"></div>
      <div 
        className="fixed bottom-0 right-0 opacity-5 pointer-events-none w-1/2 h-full bg-no-repeat bg-right-bottom" 
        data-alt="Monochrome technical blueprint of high voltage transmission tower, clean architectural lines on deep blue background" 
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_TL6M23giaG-30FlRq_9vV-2R_c1YeerB9BxWyyKK1hW2ca3vBa52Oj2FZPwrBIL1-dg_iLBnArzeobWPSmGwhsfAxg2UxusqNJbJRxHnY-xx0U9tHkAxYzLCWdCr66Mzi-KW5dUUAOYS9JZvrHrJFA83uehr6lAQUBmQ_g36qz-PEnTtkLqsSbCUUn_1UcrdBL8Rl0_t7l1RXiaBTNmi9ZI6yFRLAxy6qTjkBaCFdV0sQZt_KGq0CxM4PTetXGpd1wf6Di1hVNs')", 
          backgroundBlendMode: "overlay" 
        }}
      ></div>

      {/* Shared Component: SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col pt-20 bg-[#060e20]/40 backdrop-blur-xl h-screen w-64 border-r border-white/5 transition-all duration-300 z-50">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-secondary led-pulse-success"></div>
          <div>
            <p className="text-[#85adff] font-bold font-headline uppercase tracking-widest text-xs">Core Terminal</p>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em]">Operational</p>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            <li>
              <Link className="flex items-center gap-4 px-6 py-3 text-[#85adff] bg-[#85adff]/10 border-l-2 border-[#85adff] font-['Inter'] font-medium text-xs uppercase tracking-wider transition-all duration-300" to="/dashboard">
                <span className="material-symbols-outlined text-lg">dashboard</span> Dashboard
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 px-6 py-3 text-[#dee5ff]/40 hover:bg-white/5 font-['Inter'] font-medium text-xs uppercase tracking-wider transition-all duration-300" to="#">
                <span className="material-symbols-outlined text-lg">electric_bolt</span> Grid Status
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 px-6 py-3 text-[#dee5ff]/40 hover:bg-white/5 font-['Inter'] font-medium text-xs uppercase tracking-wider transition-all duration-300" to="/analytics">
                <span className="material-symbols-outlined text-lg">analytics</span> Telemetry
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 px-6 py-3 text-[#dee5ff]/40 hover:bg-white/5 font-['Inter'] font-medium text-xs uppercase tracking-wider transition-all duration-300" to="#">
                <span className="material-symbols-outlined text-lg">warning</span> Alerts
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 px-6 py-3 text-[#dee5ff]/40 hover:bg-white/5 font-['Inter'] font-medium text-xs uppercase tracking-wider transition-all duration-300" to="#">
                <span className="material-symbols-outlined text-lg">help</span> Support
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <button className="w-full bg-error-container text-on-surface py-3 rounded text-[10px] font-bold uppercase tracking-widest hover:brightness-125 transition-all scale-95 active:scale-90">
            Emergency Shutdown
          </button>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#060e20] border-b border-white/10 flex justify-between items-center px-8 h-16 w-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-[#85adff] uppercase tracking-widest font-headline">SYNTHETIC_OBSERVATORY</h1>
          <nav className="hidden md:flex items-center gap-6 font-['Space_Grotesk'] tracking-tight">
            <Link className="text-[#85adff] border-b-2 border-[#85adff] pb-1 text-sm" to="/dashboard">Live Monitor</Link>
            <Link className="text-[#dee5ff]/60 hover:text-[#dee5ff] text-sm transition-colors" to="/analytics">History</Link>
            <Link className="text-[#dee5ff]/60 hover:text-[#dee5ff] text-sm transition-colors" to="/fault-logs">Fault Logs</Link>
            <Link className="text-[#dee5ff]/60 hover:text-[#dee5ff] text-sm transition-colors" to="/">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 glass-panel rounded-full border-none bg-surface-container-high">
            <div className="w-2 h-2 rounded-full bg-secondary led-pulse-success animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">CONNECTED TO ARDUINO</span>
          </div>
          <div className="text-right">
            <p className="text-sm font-headline font-bold text-on-surface leading-none">14:42:08</p>
            <p className="text-[9px] uppercase tracking-tighter text-on-surface-variant">System Time</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-white/5 transition-colors rounded-lg scale-95 active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-white/5 transition-colors rounded-lg scale-95 active:scale-90">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pl-64 pt-16 min-h-screen">
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
          {/* Hero Status Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large Circular Gauges */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Voltage Gauge */}
              <div className="glass-panel p-8 rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative w-48 h-48 rounded-full border-[12px] border-surface-container-highest flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-r-transparent -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-5xl font-headline font-bold text-on-surface">220</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary mt-1 font-bold">Volts</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-medium">RMS LINE POTENTIAL</p>
                </div>
              </div>
              {/* Current Gauge */}
              <div className="glass-panel p-8 rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
                <div className="relative w-48 h-48 rounded-full border-[12px] border-surface-container-highest flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[12px] border-secondary border-t-transparent border-l-transparent rotate-12"></div>
                  <div className="text-center">
                    <p className="text-5xl font-headline font-bold text-on-surface">5.2</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary mt-1 font-bold">Amps</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-medium">CURRENT LOAD FLOW</p>
                </div>
              </div>
            </div>
            
            {/* Event Log Sidebar */}
            <div className="lg:col-span-4 glass-panel rounded-xl flex flex-col max-h-[320px] lg:max-h-full">
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-surface-container-low">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Event Journal</h3>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">history</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                <div className="flex gap-4 items-start border-l border-primary/20 pl-4">
                  <p className="text-[10px] font-headline font-bold text-primary">14:42:05</p>
                  <p className="text-[11px] text-on-surface/80">Calibration sync successful across all nodes.</p>
                </div>
                <div className="flex gap-4 items-start border-l border-white/10 pl-4">
                  <p className="text-[10px] font-headline font-bold text-on-surface-variant">14:41:50</p>
                  <p className="text-[11px] text-on-surface/80">Arduino Uno handshake confirmed via Serial port.</p>
                </div>
                <div className="flex gap-4 items-start border-l border-white/10 pl-4">
                  <p className="text-[10px] font-headline font-bold text-on-surface-variant">14:40:12</p>
                  <p className="text-[11px] text-on-surface/80">System initialized. ASTU TransmissionGrid v1.0.2.</p>
                </div>
                <div className="flex gap-4 items-start border-l border-white/10 pl-4">
                  <p className="text-[10px] font-headline font-bold text-on-surface-variant">14:39:55</p>
                  <p className="text-[11px] text-on-surface/80">Waiting for hardware connection...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Central Status Banner */}
          <div className="w-full bg-secondary-container/20 border border-secondary/20 rounded-xl p-4 flex items-center justify-between overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(107,255,143,0.05)_50%,transparent_100%)]"></div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-secondary font-bold">Core Health</span>
                <span className="text-3xl font-headline font-bold text-secondary tracking-tighter">NORMAL OPERATIONAL PARAMETERS</span>
              </div>
            </div>
            <div className="hidden md:flex gap-12 relative z-10 mr-8">
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Efficiency</p>
                <p className="text-lg font-headline font-bold text-on-surface">98.2%</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Temp</p>
                <p className="text-lg font-headline font-bold text-on-surface">32°C</p>
              </div>
            </div>
          </div>

          {/* Fault Indicator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl flex items-center gap-5 hover:bg-white/5 transition-colors cursor-default">
              <div className="w-3 h-3 rounded-full bg-secondary led-pulse-success"></div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Voltage Drop</h4>
                <p className="text-[10px] text-on-surface-variant mt-1">Status: Within tolerance limits.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl flex items-center gap-5 hover:bg-white/5 transition-colors cursor-default">
              <div className="w-3 h-3 rounded-full bg-secondary led-pulse-success"></div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Overload</h4>
                <p className="text-[10px] text-on-surface-variant mt-1">Status: Current load below threshold.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl flex items-center gap-5 hover:bg-white/5 transition-colors cursor-default">
              <div className="w-3 h-3 rounded-full bg-secondary led-pulse-success"></div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Line Break</h4>
                <p className="text-[10px] text-on-surface-variant mt-1">Status: Continuity confirmed.</p>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Chart */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-low">
              <div className="flex flex-col">
                <h3 className="text-sm font-headline font-bold text-on-surface tracking-tight">REAL-TIME TELEMETRY STREAM</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Last 60 Seconds Performance Tracking</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-primary"></div>
                  <span className="text-[10px] font-bold uppercase text-on-surface-variant">Voltage (V)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-secondary"></div>
                  <span className="text-[10px] font-bold uppercase text-on-surface-variant">Current (A)</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 p-8 relative flex items-end justify-between">
              {/* Chart Simulation Area */}
              <div className="absolute inset-x-8 top-8 bottom-8 flex items-end gap-1 opacity-20">
                {/* Mock Bars/Lines Visualization */}
                <div className="flex-1 bg-primary h-[80%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[85%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[42%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[78%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[45%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[82%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[38%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[88%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[44%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-[81%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[40%] rounded-t-sm"></div>
              </div>
              
              {/* Axis Labels */}
              <div className="absolute left-4 top-8 bottom-8 flex flex-col justify-between text-[8px] font-mono text-on-surface-variant">
                <span>250V / 10A</span>
                <span>125V / 5A</span>
                <span>0V / 0A</span>
              </div>
              <div className="w-full flex justify-between pt-4 border-t border-white/5 text-[8px] font-mono text-on-surface-variant mt-auto">
                <span>-60S</span>
                <span>-45S</span>
                <span>-30S</span>
                <span>-15S</span>
                <span>0S (NOW)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pl-64 py-8 border-t border-white/5 bg-surface-container-lowest">
        <div className="px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50">
          <p>Adama Science and Technology University | Software Dashboard</p>
          <p>v1.0.2 | System Stable</p>
        </div>
      </footer>
    </div>
  );
}