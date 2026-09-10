import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MedPalShowcase from './components/MedPalShowcase';
import DevTerminal from './components/DevTerminal';
import AwardsTimeline from './components/AwardsTimeline';
import SkillsRadar from './components/SkillsRadar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* High-Tech Ambient Grid & Radiance Canvas */}
      <div className="ambient-canvas" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>

      {/* Navigation Dock */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <MedPalShowcase />
        <DevTerminal />
        <AwardsTimeline />
        <SkillsRadar />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
