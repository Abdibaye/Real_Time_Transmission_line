import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-tertiary">groups</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background">
                Research Team
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-outline-variant/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-high">
                  <tr>
                    <th className="px-6 py-4 font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Name</th>
                    <th className="px-6 py-4 font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">ID</th>
                    <th className="px-6 py-4 font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-medium">Abebe Kebede</td>
                    <td className="px-6 py-4 text-primary text-sm font-mono">ASTU/ELECT/101</td>
                    <td className="px-6 py-4 text-on-surface-variant text-sm">Electrical Engineering</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-medium">Sara Solomon</td>
                    <td className="px-6 py-4 text-primary text-sm font-mono">ASTU/ELECT/204</td>
                    <td className="px-6 py-4 text-on-surface-variant text-sm">Electrical Engineering</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 font-medium">Dawit Tesfaye</td>
                    <td className="px-6 py-4 text-primary text-sm font-mono">ASTU/ELECT/115</td>
                    <td className="px-6 py-4 text-on-surface-variant text-sm">Electrical Engineering</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary">school</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background">
                Supervisor
              </h2>
            </div>
            <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/20 text-center flex flex-col items-center">
              <img 
                alt="Supervisor Portrait" 
                className="w-24 h-24 rounded-full border-4 border-surface-container-low mb-6" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAibgjB_DB9XLfa4uyhGN6C_S08_nTWKsrQbaD3cDSuXwWo1egLiMdiRoUWepO8bteXDOehYlcDG8UXmWMUDwmXGdcwcF4egorsEacAA9ohuL2AOUroocg-9jvZzWECgOFwmJjut9N0q_qelSXwz6eGaRRUaTEdHps8ge4gL4c9ntH3ATWGm_KqKggIT4412H_tOWS4jhZwm7erajnRj5oqKbClQ9XgIo_cQt4X1Icismoc-EAGpfV8b-KjJnzoUMUa76GJzQZxUnA"
              />
              <h3 className="font-headline text-xl font-bold text-on-background">Yared Daba Tesfaye</h3>
              <p className="text-primary text-sm tracking-widest uppercase mt-2 mb-6">Principal Investigator</p>
              <div className="flex gap-4">
                <button className="p-2 rounded bg-surface-container-low hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </button>
                <button className="p-2 rounded bg-surface-container-low hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">description</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
