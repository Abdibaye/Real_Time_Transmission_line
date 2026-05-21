import { Link } from 'react-router-dom';
export default function AstuTransmissionMonitorDashboard() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen ambient-bg overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#040e21] flex justify-between items-center px-8 py-4 shadow-[0_0_20px_rgba(0,212,255,0.1)] font-['Space_Grotesk'] tracking-tight">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-[#00d4ff]">
            Grid watch portal
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link className="text-[#00d4ff] border-b-2 border-[#00d4ff] pb-1" to="/dashboard">Live Monitor</Link>
            <Link className="text-[#a1abc5] hover:text-[#6dddff] transition-colors" to="/analytics">History</Link>
            <Link className="text-[#a1abc5] hover:text-[#6dddff] transition-colors" to="/fault-logs">Fault Logs</Link>
            <Link className="text-[#a1abc5] hover:text-[#6dddff] transition-colors" to="/">About</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#121f3a] rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-tertiary-dim animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-bold">Connected to Arduino</span>
          </div>
          <div className="flex gap-4 items-center">
            <button className="material-symbols-outlined text-[#a1abc5] hover:text-[#6dddff] transition-all duration-300 scale-95 active:scale-90">notifications</button>
            <button className="material-symbols-outlined text-[#a1abc5] hover:text-[#6dddff] transition-all duration-300 scale-95 active:scale-90">settings</button>
            <div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden">
              <img alt="User Profile" className="w-full h-full object-cover" data-alt="close up of electrical circuit pattern on dark technology background with blue glowing light lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4cDX87UqokW2ykabHBkjCkqQgRwfhykscYYpijiHZ8TXM-m5z8eSHGVHTg1L0PhQU4bY2u6-QGJyG8sas5pb80fTT16Lv59-rGfO4jkzuEOstK6h55EtqRKHN3EFn3kN-Wl0KwHNtGHOY0cv5EbrozayuxkZ-J6Gl25ln3etYp7LUcPw5KeT3ijur90Jq981-H7kmSaL25zIAIyCmI8Hn8MbIdVXR7jREc9UHBS3gjzf_iY7hIw9fX5DPVLVx6qeLlYGvpPErHlg" />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="h-[calc(100vh-80px)] w-64 border-r border-[#121f3a] bg-[#071329] flex flex-col py-6 sticky top-20 hidden lg:flex">
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-[#00d4ff]">bolt</span>
              <h3 className="font-headline font-bold text-[#00d4ff]">Transmission Lab</h3>
            </div>
            <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Station ID: 08-TX</p>
          </div>
          <nav className="flex-1 space-y-1">
            <Link className="flex items-center gap-3 px-6 py-3 bg-[#121f3a] text-[#00d4ff] rounded-r-full mr-4 group" to="/dashboard">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">dashboard</span>
              <span className="text-sm font-medium font-['Inter']">Overview</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-[#a1abc5] hover:text-[#f0f9ff] hover:bg-[#121f3a] transition-all group" to="/analytics">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">analytics</span>
              <span className="text-sm font-medium font-['Inter']">Phase Analysis</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-[#a1abc5] hover:text-[#f0f9ff] hover:bg-[#121f3a] transition-all group" to="#">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">balance</span>
              <span className="text-sm font-medium font-['Inter']">Load balancing</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-[#a1abc5] hover:text-[#f0f9ff] hover:bg-[#121f3a] transition-all group" to="/monitoring">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">monitor_heart</span>
              <span className="text-sm font-medium font-['Inter']">System Health</span>
            </Link>
          </nav>
          <div className="px-6 mt-auto pt-6 border-t border-outline-variant/20 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-4">Event Log</div>
            <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              <div className="text-[11px] leading-tight">
                <span className="text-primary font-mono block">14:25:30</span>
                <span className="text-on-surface-variant">System Handshake Successful</span>
              </div>
              <div className="text-[11px] leading-tight">
                <span className="text-primary font-mono block">14:24:05</span>
                <span className="text-on-surface-variant">Calibration Synchronized</span>
              </div>
              <div className="text-[11px] leading-tight">
                <span className="text-tertiary block">14:18:22</span>
                <span className="text-on-surface-variant">Node 08-TX Active</span>
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Hero Section */}
          <section className="mb-12 relative overflow-hidden rounded-xl bg-surface-container-low p-12 border border-outline-variant/10">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#6dddff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-on-surface-variant text-xs uppercase tracking-[0.3em] font-bold mb-4">System Monitor</h2>
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
                  Real-Time Electrical <span className="text-primary">Transmission</span> Line Monitoring
                </h1>
                <p className="text-on-surface-variant body-md leading-relaxed mb-8">
                  High-fidelity sensory integration for the ASTU Transmission Lab. Monitoring voltage fluctuations and load distribution across critical infrastructure nodes in real-time.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all">
                    EXPORT REPORT
                  </button>
                  <button className="border border-outline-variant/30 text-on-surface px-6 py-3 rounded-lg font-bold text-sm hover:bg-surface-container-high transition-all">
                    SYSTEM CONFIG
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-10 bg-primary/10 blur-[60px] rounded-full"></div>
                  <span className="material-symbols-outlined text-9xl text-primary glow-cyan" style={{ fontSize: "160px" }}>bolt</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </section>
          {/* Gauge Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Voltage Card */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Main Voltage</span>
                <span className="material-symbols-outlined text-primary">electric_bolt</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-6xl font-bold text-primary glow-cyan">220</span>
                <span className="text-2xl font-light text-on-surface-variant">V</span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]" style={{ boxShadow: "0 0 10px #6dddff" }}></div>
                </div>
                <span className="text-[10px] text-primary-dim font-bold">STABLE</span>
              </div>
            </div>
            {/* Current Card */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Line Current</span>
                <span className="material-symbols-outlined text-tertiary">speed</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-6xl font-bold text-tertiary glow-green">5.2</span>
                <span className="text-2xl font-light text-on-surface-variant">A</span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[45%]" style={{ boxShadow: "0 0 10px #5bf083" }}></div>
                </div>
                <span className="text-[10px] text-tertiary-fixed-dim font-bold">OPTIMAL</span>
              </div>
            </div>
            {/* System Status */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-3xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h3 className="text-tertiary font-headline font-bold text-xl tracking-tight mb-2">NORMAL OPERATION</h3>
              <p className="text-on-surface-variant text-sm">All parameters within safety threshold. Transmission efficiency at 98.4%.</p>
            </div>
          </section>
          {/* Fault Indicators */}
          <section className="mb-12">
            <h3 className="text-on-surface-variant text-xs uppercase tracking-[0.3em] font-bold mb-6">Fault Surveillance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-tertiary-dim/40 border-2 border-tertiary shadow-[0_0_10px_#5bf083] mt-1 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Voltage Drop Fault</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Monitors transient dips below 180V. Currently within spec.</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant/30 text-xl ml-auto">trending_down</span>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-tertiary-dim/40 border-2 border-tertiary shadow-[0_0_10px_#5bf083] mt-1 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Overload Fault</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Safety trip for current exceeding 15A limit. Safe.</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant/30 text-xl ml-auto">warning</span>
              </div>
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/10 flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-tertiary-dim/40 border-2 border-tertiary shadow-[0_0_10px_#5bf083] mt-1 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Line Break Fault</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Physical continuity check. Line 08-TX intact.</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant/30 text-xl ml-auto">link_off</span>
              </div>
            </div>
          </section>
          {/* Real-time Chart Section */}
          <section className="bg-surface-container-low rounded-xl border border-outline-variant/10 p-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="font-headline font-bold text-xl">Real-Time Waveform Analysis</h3>
                <p className="text-on-surface-variant text-sm">Last 60 seconds transmission cycle</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-bold text-on-surface-variant">Voltage (V)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span className="text-xs font-bold text-on-surface-variant">Current (A)</span>
                </div>
              </div>
            </div>
            <div className="h-64 w-full relative flex items-end gap-1">
              {/* Simulated Oscilloscope Grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#3e485e 1px, transparent 1px), linear-gradient(90deg, #3e485e 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
              {/* SVG Path for Graph */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                {/* Voltage Line */}
                <path className="drop-shadow-[0_0_8px_#6dddff]" d="M0,50 Q100,20 200,60 T400,40 T600,70 T800,30 T1000,50" fill="none" stroke="#6dddff" strokeWidth="2" />
                {/* Current Line */}
                <path className="drop-shadow-[0_0_8px_#5bf083]" d="M0,80 Q150,70 300,90 T450,75 T750,85 T1000,80" fill="none" stroke="#5bf083" strokeWidth="2" />
              </svg>
              {/* Axis Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-on-surface-variant py-2">
                <span>250V</span>
                <span>125V</span>
                <span>0V</span>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant">
              <span>-60s</span>
              <span>-45s</span>
              <span>-30s</span>
              <span>-15s</span>
              <span>NOW</span>
            </div>
          </section>
        </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container px-12 py-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-[11px] font-medium uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-sm">school</span>
          <span>Adama Science and Technology University – Software Dashboard</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-primary font-bold">System Status: Nominal</span>
          <span>v1.2.0-STABLE</span>
        </div>
      </footer>
    </div>
  );
}