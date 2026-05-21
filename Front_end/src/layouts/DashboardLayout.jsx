import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from '../lib/auth-client';

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate('/login');
        },
      },
    });
  };

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: 'dashboard' },
    { name: 'Phase Monitoring', path: '/dashboard/monitoring', icon: 'monitor_heart' },
    { name: 'Fault Detection', path: '/dashboard/faults', icon: 'warning' },
    { name: 'Relay Protection', path: '/dashboard/relay', icon: 'electric_bolt' },
    { name: 'Historical Logs', path: '/dashboard/history', icon: 'history' },
  ];

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen ambient-bg overflow-hidden flex flex-col">
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#040e21] flex justify-between items-center px-8 py-4 shadow-[0_0_20px_rgba(0,212,255,0.1)] font-['Space_Grotesk'] tracking-tight">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#00d4ff] hover:text-white transition-colors">
            Grid watch portal
          </Link>
          {/* Removed top links per user request */}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#121f3a] rounded-full border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">Not Connected</span>
          </div>
          <div className="flex gap-4 items-center">
            <button className="material-symbols-outlined text-[#a1abc5] hover:text-[#6dddff] transition-all duration-300 scale-95 active:scale-90">notifications</button>
            <Link to="/dashboard/settings" title="Settings" className="material-symbols-outlined text-[#a1abc5] hover:text-[#6dddff] transition-all duration-300 scale-95 active:scale-90">settings</Link>
            <button 
              onClick={handleLogout}
              title="Logout"
              className="material-symbols-outlined text-[#a1abc5] hover:text-red-400 transition-all duration-300 scale-95 active:scale-90"
            >
              logout
            </button>
            <div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4cDX87UqokW2ykabHBkjCkqQgRwfhykscYYpijiHZ8TXM-m5z8eSHGVHTg1L0PhQU4bY2u6-QGJyG8sas5pb80fTT16Lv59-rGfO4jkzuEOstK6h55EtqRKHN3EFn3kN-Wl0KwHNtGHOY0cv5EbrozayuxkZ-J6Gl25ln3etYp7LUcPw5KeT3ijur90Jq981-H7kmSaL25zIAIyCmI8Hn8MbIdVXR7jREc9UHBS3gjzf_iY7hIw9fX5DPVLVx6qeLlYGvpPErHlg" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-20 h-screen">
        {/* Fixed Sidebar */}
        <aside className="w-64 border-r border-[#121f3a] bg-[#071329] flex flex-col py-6 sticky top-20 hidden lg:flex h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-[#00d4ff]">bolt</span>
              <h3 className="font-headline font-bold text-[#00d4ff]">Transmission Lab</h3>
            </div>
            <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Station ID: 08-TX</p>
          </div>
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-6 py-3 transition-all group ${
                    isActive 
                      ? 'bg-[#121f3a] text-[#00d4ff] rounded-r-full mr-4' 
                      : 'text-[#a1abc5] hover:text-[#f0f9ff] hover:bg-[#121f3a]'
                  }`}
                >
                  <span className={`material-symbols-outlined transition-transform ${!isActive && 'group-hover:translate-x-1'}`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium font-['Inter']">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Live System Status Panel in Sidebar */}
          <div className="px-6 mt-auto pt-6 border-t border-outline-variant/20 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-4">Live System Status</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
                <span className="text-xs text-red-400">System Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-surface-variant"></span>
                <span className="text-xs text-on-surface-variant">Monitoring Inactive</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Dynamic Main Content area for sub-pages */}
        <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
