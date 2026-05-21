import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    maxVoltage: 240,
    minVoltage: 200,
    overloadCurrent: 15,
    autoRelayProtection: true,
    voltageCalibration: 1.0,
    currentCalibration: 1.0,
    refreshRate: 5
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : Number(value)
    });
  };

  const handleManualReset = () => {
    alert("Relay manually reset.");
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully.");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">System Settings</h2>
        <p className="text-on-surface-variant">Configure thresholds, calibration factors, and relay controls.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Voltage Thresholds */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 bg-surface-container">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">electric_meter</span>
            Voltage Thresholds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-label text-on-surface-variant mb-1">Max Voltage (V)</label>
              <input 
                type="number" 
                name="maxVoltage"
                value={settings.maxVoltage}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-label text-on-surface-variant mb-1">Min Voltage (V)</label>
              <input 
                type="number" 
                name="minVoltage"
                value={settings.minVoltage}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Current Thresholds */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 bg-surface-container">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">speed</span>
            Current Thresholds
          </h3>
          <div>
            <label className="block text-sm font-label text-on-surface-variant mb-1">Overload Current Limit (A)</label>
            <input 
              type="number" 
              name="overloadCurrent"
              value={settings.overloadCurrent}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        {/* Relay Controls */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 bg-surface-container">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">settings_power</span>
            Relay Control
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input 
                  type="checkbox" 
                  name="autoRelayProtection"
                  checked={settings.autoRelayProtection}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`block w-14 h-8 rounded-full ${settings.autoRelayProtection ? 'bg-primary' : 'bg-surface-variant'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-on-primary w-6 h-6 rounded-full transition transform ${settings.autoRelayProtection ? 'translate-x-6' : ''}`}></div>
              </div>
              <span className="text-sm font-label text-on-surface">Auto ON/OFF Protection</span>
            </label>
            
            <button 
              type="button"
              onClick={handleManualReset}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
            >
              Manual Relay Reset
            </button>
          </div>
        </div>

        {/* Calibration Settings */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 bg-surface-container">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">tune</span>
            Calibration Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-label text-on-surface-variant mb-1">Voltage Calibration Factor</label>
              <input 
                type="number" 
                step="0.01"
                name="voltageCalibration"
                value={settings.voltageCalibration}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-label text-on-surface-variant mb-1">Current Calibration Factor</label>
              <input 
                type="number" 
                step="0.01"
                name="currentCalibration"
                value={settings.currentCalibration}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Refresh Rate */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/30 bg-surface-container">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">update</span>
            Refresh Rate Settings
          </h3>
          <div>
            <label className="block text-sm font-label text-on-surface-variant mb-1">Dashboard Refresh Rate (Seconds)</label>
            <input 
              type="number"
              name="refreshRate"
              value={settings.refreshRate}
              onChange={handleChange}
              min="1"
              max="60"
              className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dim text-[#040e21] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
