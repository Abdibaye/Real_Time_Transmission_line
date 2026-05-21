import React from 'react';
import TopNavBar from '../components/TopNavBar';
import HeroSection from '../components/HeroSection';
import ProjectDetails from '../components/ProjectDetails';
import TeamSection from '../components/TeamSection';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30">
      <TopNavBar />
      <main className="min-h-screen">
        <HeroSection />
        <ProjectDetails />
        <TeamSection />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
