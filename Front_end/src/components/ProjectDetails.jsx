import React from 'react';

const ProjectDetails = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Description */}
        <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">info</span>
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background">
              Project Description
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            The integrity of electrical transmission lines is critical for regional energy security. Our system leverages an advanced Internet of Things (IoT) architecture to provide real-time monitoring of voltage, current, and physical anomalies. By deploying intelligent sensor nodes at critical junctions, we enable the grid to communicate its status instantaneously.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This proactive approach transition away from traditional reactive maintenance models. Utilizing low-latency data streams, the system identifies structural weaknesses or electrical leakage before they escalate into catastrophic grid failures, significantly improving overall system reliability and reducing downtime.
          </p>
        </div>
        {/* Project Objectives */}
        <div className="lg:col-span-5 bg-surface-container-high p-10 rounded-2xl border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-background mb-8">
            Objectives
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
              </span>
              <div>
                <h4 className="font-bold text-on-surface">Real-time data acquisition</h4>
                <p className="text-xs text-on-surface-variant mt-1">High-frequency sampling of grid telemetry.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
              </span>
              <div>
                <h4 className="font-bold text-on-surface">Automated fault detection</h4>
                <p className="text-xs text-on-surface-variant mt-1">AI-driven anomaly identification algorithms.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
              </span>
              <div>
                <h4 className="font-bold text-on-surface">Historical trend analysis</h4>
                <p className="text-xs text-on-surface-variant mt-1">Long-term predictive maintenance modeling.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
              </span>
              <div>
                <h4 className="font-bold text-on-surface">Remote accessibility</h4>
                <p className="text-xs text-on-surface-variant mt-1">Cloud-integrated dashboard for global monitoring.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
