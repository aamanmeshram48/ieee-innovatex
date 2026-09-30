import React, { useState } from 'react';
import IntroLoader from './components/IntroLoader';
import ThermalHeatmapOverlay from './components/ThermalHeatmapOverlay';
import ScrollableVideoBackground from './components/ScrollableVideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialStatement from './components/EditorialStatement';
import ProjectsShowcase from './components/ProjectsShowcase';
import About from './components/About';
import Experience from './components/Experience';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import FeaturedBanner from './components/FeaturedBanner';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('innovatex_intro_seen');
    setIntroKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-black bg-[#04060d]">
      
      {/* 1. Cinematic Intro Preloader (Gallery Play Signature) */}
      <IntroLoader key={introKey} />

      {/* 2. Interactive Thermal Heatmap Cursor Trail (Gallery Play Signature) */}
      <ThermalHeatmapOverlay />

      {/* 3. Deep Atmospheric Video Layer */}
      <ScrollableVideoBackground />

      {/* 4. Top Fixed Header with Gallery Play Expandable Pill Menu */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* 5. Main Single-Page Editorial Content */}
      <main className="flex-1 w-full">
        {/* Editorial Hero Section with Integrated Client Marquee */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* Gallery Play Signature Editorial Statement Section */}
        <EditorialStatement onOpenRegister={handleOpenRegister} />

        {/* Gallery Play "Work that speaks louder than words" Projects & Tracks Showcase */}
        <ProjectsShowcase onOpenRegister={handleOpenRegister} />

        {/* Core Pillars Section (AI, Robotics, Automation) */}
        <About />

        {/* Capabilities & Benefits (Asymmetric Grid) */}
        <Experience />

        {/* Summit Timeline */}
        <Schedule />

        {/* Keynote Leaders & Speakers */}
        <Speakers />

        {/* Gallery Play Style FAQ Section */}
        <FAQ onOpenRegister={handleOpenRegister} />

        {/* Visual Engineering Banner */}
        <FeaturedBanner onOpenRegister={handleOpenRegister} />

        {/* Registration & Contact Modal */}
        <CTA
          isOpen={isRegisterModalOpen}
          onOpen={handleOpenRegister}
          onClose={handleCloseRegister}
        />
      </main>

      {/* 6. High-Impact Footer with Gallery Play #top button and Intro Replay */}
      <Footer
        onOpenRegister={handleOpenRegister}
        onReplayIntro={handleReplayIntro}
      />
    </div>
  );
}
