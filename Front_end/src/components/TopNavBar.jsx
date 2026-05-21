import React from 'react';
import { Link } from 'react-router-dom';

const TopNavBar = () => {
  return (
    <header className="w-full top-0 sticky bg-[#040e21] shadow-[0_0_15px_rgba(109,221,255,0.1)] z-50">
      <nav className="flex justify-between items-center px-8 h-16 w-full font-['Space_Grotesk'] tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-[#6dddff]">
          Electron Volt
        </div>
        <div className="flex items-center">
          <Link 
            to="/signup" 
            className="px-6 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-bold rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all"
          >
            Continue to Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
