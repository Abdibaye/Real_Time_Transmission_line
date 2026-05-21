import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

// Dashboard views
import Overview from './pages/dashboard/Overview';
import PhaseMonitoring from './pages/dashboard/PhaseMonitoring';
import FaultDetection from './pages/dashboard/FaultDetection';
import Relays from './pages/dashboard/Relays';
import HistoricalLogs from './pages/dashboard/HistoricalLogs';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface text-on-surface min-h-screen selection:bg-primary selection:text-on-primary font-sans antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="monitoring" element={<PhaseMonitoring />} />
            <Route path="faults" element={<FaultDetection />} />
            <Route path="relay" element={<Relays />} />
            <Route path="history" element={<HistoricalLogs />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
