import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#040e21] w-full py-12 px-8 border-t border-[#121f3a]/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[#6dddff] font-['Space_Grotesk'] font-bold text-lg mb-2">Electron Volt</span>
          <p className="font-['Inter'] text-xs font-medium text-[#a1abc5] max-w-sm text-center md:text-left">
            © 2024 University Engineering Dept | Real-Time Electrical Transmission Line Monitoring System
          </p>
        </div>
        <div className="flex gap-8">
          <a className="font-['Inter'] text-xs font-medium text-[#a1abc5] hover:text-[#6dddff] transition-colors" href="#">Technical Documentation</a>
          <a className="font-['Inter'] text-xs font-medium text-[#a1abc5] hover:text-[#6dddff] transition-colors" href="#">Privacy Policy</a>
          <a className="font-['Inter'] text-xs font-medium text-[#a1abc5] hover:text-[#6dddff] transition-colors" href="#">Project Contributors</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-sm">engineering</span>
          </div>
          <span className="font-label text-[10px] tracking-tighter uppercase text-on-surface-variant">ASTU Laboratory Verified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
