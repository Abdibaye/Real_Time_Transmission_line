import { Link } from 'react-router-dom';
import React from 'react';

export default function FaultLogsDashboard() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#040e21] shadow-[0_0_20px_rgba(0,212,255,0.05)] border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-8 h-16">
          <div className="text-xl font-bold tracking-tighter text-[#00d4ff] uppercase font-headline">
            VOLT_STRATOS
          </div>
          <div className="hidden md:flex items-center space-x-8 font-headline text-sm font-medium">
            <Link className="text-[#a1abc5] hover:text-[#00d4ff] transition-colors" to="/dashboard">Dashboard</Link>
            <Link className="text-[#00d4ff] border-b-2 border-[#00d4ff] pb-1" to="/fault-logs">Fault Logs</Link>
            <Link className="text-[#a1abc5] hover:text-[#00d4ff] transition-colors" to="/iot-dashboard">Grid Map</Link>
            <Link className="text-[#a1abc5] hover:text-[#00d4ff] transition-colors" to="/monitoring">Telemetry</Link>
            <Link className="text-[#a1abc5] hover:text-[#00d4ff] transition-colors" to="/analytics">Analytics</Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <button className="text-[#a1abc5] hover:text-[#00d4ff] transition-all active:scale-95">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-[#a1abc5] hover:text-[#00d4ff] transition-all active:scale-95">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/30">
              <img alt="Engineer Profile" data-alt="Close up portrait of a senior electrical engineer wearing high-visibility gear in a dimly lit control room setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvHc2zNmeodq3fMFBALCmQe2wOTkgvDdnWvo3Nzp8Kcfhi6ciXCBsBpFPHqWwBCrmHaB4ihcgECyyNyiPj71gmPI_wzMpEXm5SltsfkDQrsaZOB2Ds72GaVv_tFXd6sTOKUhyvCy3iBawWw4HsJNkXy9ZanVx53e_dTvyrbem1th5ZUqwxrP3AL6viQjfrvOd1DoBCFnCVzYCdBvBlUV7Nx4OmIlfjo1wrtqif0-wzC_4mgx-F76wKft744toqel78qST_r1qAyaw" />
            </div>
          </div>
        </div>
      </nav>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#071329] flex-col py-6 border-r border-outline-variant/10 hidden lg:flex">
        <div className="px-6 mb-8 flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shadow-[0_0_8px_#5bf083]"></div>
          <div>
            <div className="text-[#00d4ff] font-headline font-bold text-xs tracking-widest uppercase">TRANS_NODE_04</div>
            <div className="text-[#a1abc5] text-[10px] uppercase font-medium">Operational</div>
          </div>
        </div>
        <nav className="flex-grow space-y-1">
          <Link className="flex items-center px-6 py-3 space-x-4 text-[#a1abc5] hover:bg-[#121f3a] hover:text-[#ffffff] transition-all duration-200" to="#">
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-headline font-medium text-sm tracking-tight">Real-time</span>
          </Link>
          <Link className="flex items-center px-6 py-3 space-x-4 bg-[#121f3a] text-[#00d4ff] border-r-4 border-[#00d4ff] transition-all duration-200" to="/analytics">
            <span className="material-symbols-outlined">history</span>
            <span className="font-headline font-medium text-sm tracking-tight">History</span>
          </Link>
          <Link className="flex items-center px-6 py-3 space-x-4 text-[#a1abc5] hover:bg-[#121f3a] hover:text-[#ffffff] transition-all duration-200" to="/fault-logs">
            <span className="material-symbols-outlined">build</span>
            <span className="font-headline font-medium text-sm tracking-tight">Maintenance</span>
          </Link>
          <Link className="flex items-center px-6 py-3 space-x-4 text-[#a1abc5] hover:bg-[#121f3a] hover:text-[#ffffff] transition-all duration-200" to="/monitoring">
            <span className="material-symbols-outlined">hub</span>
            <span className="font-headline font-medium text-sm tracking-tight">System Health</span>
          </Link>
          <Link className="flex items-center px-6 py-3 space-x-4 text-[#a1abc5] hover:bg-[#121f3a] hover:text-[#ffffff] transition-all duration-200" to="#">
            <span className="material-symbols-outlined">description</span>
            <span className="font-headline font-medium text-sm tracking-tight">Reports</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full py-3 bg-error-container/20 border border-error/30 text-error font-headline font-bold text-xs uppercase tracking-widest hover:bg-error-container/40 transition-all active:scale-95">
            Emergency Shutdown
          </button>
          <div className="mt-4 pt-4 border-t border-outline-variant/10">
            <Link className="flex items-center py-2 space-x-4 text-[#a1abc5] hover:text-white transition-colors" to="#">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-xs uppercase font-bold tracking-widest">Logout</span>
            </Link>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="lg:ml-64 pt-24 px-8 pb-12">
        {/* Header & Stats Section */}
        <header className="mb-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-headline font-bold text-primary tracking-[0.2em] uppercase">System Repository</span>
              <h1 className="text-4xl font-headline font-bold text-on-surface tracking-tighter mt-1">Fault Logistics <span className="text-primary/50 text-2xl">v4.2</span></h1>
            </div>
            <div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-outline-variant/20">
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-primary bg-primary rounded-md shadow-[0_0_15px_rgba(109,221,255,0.3)]">Export CSV</button>
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Print Report</button>
            </div>
          </div>
          {/* Bento Grid Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-surface-container-low border-l-4 border-[#00d4ff] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-5">
                <span className="material-symbols-outlined text-7xl">warning</span>
              </div>
              <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Total Faults</p>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-5xl font-headline font-bold text-white tracking-tighter">24</span>
                <span className="text-tertiary-fixed-dim text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                  -12%
                </span>
              </div>
              <div className="mt-4 h-1 w-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-primary w-[40%] shadow-[0_0_8px_#6dddff]"></div>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-surface-container-low border-l-4 border-[#00d4ff] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Primary Fault</p>
              <div className="mt-2">
                <span className="text-3xl font-headline font-bold text-white tracking-tight uppercase">Overload</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <span className="px-2 py-1 rounded bg-secondary-container/30 text-secondary-fixed text-[10px] font-bold uppercase">Grid A-12</span>
                <span className="text-[#a1abc5] text-[10px] uppercase font-medium">85% Frequency</span>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-surface-container-low border-l-4 border-[#00d4ff] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Last Incident</p>
              <div className="mt-2">
                <span className="text-3xl font-headline font-bold text-white tracking-tight font-mono">14:10:05</span>
              </div>
              <div className="mt-4 flex items-center text-error font-medium text-[10px] uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                Resolved via Auto-Switch
              </div>
            </div>
          </div>
        </header>
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mr-4">Filter By:</span>
          <button className="px-5 py-2 rounded-full border border-primary text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 hover:bg-primary/20 transition-all">All</button>
          <button className="px-5 py-2 rounded-full border border-error-dim/40 text-error-dim text-xs font-bold uppercase tracking-widest hover:bg-error-container/20 transition-all flex items-center">
            <span className="w-2 h-2 rounded-full bg-error mr-2"></span>
            Voltage Drop
          </button>
          <button className="px-5 py-2 rounded-full border border-tertiary-container/40 text-tertiary-container text-xs font-bold uppercase tracking-widest hover:bg-tertiary-container/10 transition-all flex items-center">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed mr-2"></span>
            Overload
          </button>
          <button className="px-5 py-2 rounded-full border border-error/40 text-error text-xs font-bold uppercase tracking-widest hover:bg-error-container/20 transition-all flex items-center">
            <span className="w-2 h-2 rounded-full bg-error-dim mr-2"></span>
            Line Break
          </button>
          <div className="ml-auto relative">
            <input className="bg-surface-container-low border-none focus:ring-1 focus:ring-primary text-on-surface text-sm pl-10 pr-4 py-2 w-64 rounded-lg" placeholder="Search parameters..." type="text" />
            <span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-xl">search</span>
          </div>
        </div>
        {/* Data Table */}
        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
          <div className="absolute inset-0 pointer-events-none bg-error/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/20">
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Timestamp</th>
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Fault Type</th>
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Voltage (V)</th>
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Current (A)</th>
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">Description</th>
                <th className="px-6 py-4 text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {/* Critical Fault */}
              <tr className="group hover:bg-error-container/5 transition-colors relative">
                <td className="px-6 py-5 font-mono text-xs text-white">2024-05-20 14:10:00</td>
                <td className="px-6 py-5">
                  <span className="flex items-center text-error font-headline font-bold text-sm">
                    <span className="material-symbols-outlined text-lg mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>
                    Overload
                  </span>
                </td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">220.0</td>
                <td className="px-6 py-5 font-headline font-medium text-error shadow-[0_0_15px_rgba(255,113,108,0.1)]">15.5</td>
                <td className="px-6 py-5 text-sm text-[#a1abc5]">Load exceeds safety threshold. Auto-breaker engaged.</td>
                <td className="px-6 py-5 text-right">
                  <button className="text-primary hover:underline font-headline font-bold text-[10px] uppercase tracking-widest">Detail</button>
                </td>
                {/* Ambient glow effect */}
              </tr>
              {/* Warning Fault */}
              <tr className="group hover:bg-tertiary-container/5 transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-white">2024-05-20 13:45:12</td>
                <td className="px-6 py-5">
                  <span className="flex items-center text-tertiary-fixed-dim font-headline font-bold text-sm">
                    <span className="material-symbols-outlined text-lg mr-2">bolt</span>
                    Voltage Drop
                  </span>
                </td>
                <td className="px-6 py-5 font-headline font-medium text-error-dim">195.4</td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">12.1</td>
                <td className="px-6 py-5 text-sm text-[#a1abc5]">Substation 4B reported significant phase variance.</td>
                <td className="px-6 py-5 text-right">
                  <button className="text-primary hover:underline font-headline font-bold text-[10px] uppercase tracking-widest">Detail</button>
                </td>
              </tr>
              {/* Severe Fault */}
              <tr className="group hover:bg-error-container/10 transition-colors bg-error-container/5">
                <td className="px-6 py-5 font-mono text-xs text-white">2024-05-20 12:30:05</td>
                <td className="px-6 py-5">
                  <span className="flex items-center text-error font-headline font-bold text-sm">
                    <span className="material-symbols-outlined text-lg mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                    Line Break
                  </span>
                </td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface-variant">000.0</td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface-variant">0.0</td>
                <td className="px-6 py-5 text-sm text-error/80 font-medium italic">Physical discontinuity detected at Tower 88.</td>
                <td className="px-6 py-5 text-right">
                  <button className="text-primary hover:underline font-headline font-bold text-[10px] uppercase tracking-widest">Detail</button>
                </td>
              </tr>
              {/* Standard/Resolved Fault */}
              <tr className="group hover:bg-surface-container-highest transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-white">2024-05-20 09:12:44</td>
                <td className="px-6 py-5">
                  <span className="flex items-center text-secondary font-headline font-bold text-sm">
                    <span className="material-symbols-outlined text-lg mr-2">settings_input_component</span>
                    Overload
                  </span>
                </td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">218.2</td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">14.8</td>
                <td className="px-6 py-5 text-sm text-[#a1abc5]">Peak demand spike on industrial sector line.</td>
                <td className="px-6 py-5 text-right">
                  <button className="text-primary hover:underline font-headline font-bold text-[10px] uppercase tracking-widest">Detail</button>
                </td>
              </tr>
              <tr className="group hover:bg-surface-container-highest transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-white">2024-05-19 23:58:10</td>
                <td className="px-6 py-5">
                  <span className="flex items-center text-tertiary-fixed-dim font-headline font-bold text-sm">
                    <span className="material-symbols-outlined text-lg mr-2">bolt</span>
                    Voltage Drop
                  </span>
                </td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">201.5</td>
                <td className="px-6 py-5 font-headline font-medium text-on-surface">11.9</td>
                <td className="px-6 py-5 text-sm text-[#a1abc5]">Atmospheric interference; signal noise detected.</td>
                <td className="px-6 py-5 text-right">
                  <button className="text-primary hover:underline font-headline font-bold text-[10px] uppercase tracking-widest">Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Pagination-like footer */}
          <div className="p-6 bg-surface-container-high/30 border-t border-outline-variant/10 flex justify-between items-center">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Displaying 5 of 24 logged events</p>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded border border-primary bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">1</button>
              <button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-white transition-colors text-[10px] font-bold">2</button>
              <button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-white transition-colors text-[10px] font-bold">3</button>
              <button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        {/* Footer Data Stream */}
        <footer className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col space-y-2">
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-primary">Core_Relay_01</span>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-tertiary-fixed-dim">Aux_Node_B</span>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed-dim w-1/2"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">Latency_Sync</span>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-4/5"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-error">Critical_Path</span>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-error w-1/5"></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}