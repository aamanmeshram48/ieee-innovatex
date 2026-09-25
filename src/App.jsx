import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import FeaturedBanner from './components/FeaturedBanner';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#04060d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Fixed Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Single-Page Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* About Section (3 Feature Cards) */}
        <About />

        {/* Event Experience Section (Asymmetric 4 Benefits) */}
        <Experience />

        {/* Schedule Timeline Section (4 Items) */}
        <Schedule />

        {/* Keynote Speakers Section (Exactly 2 Cards) */}
        <Speakers />

        {/* Featured Visual Event Section ("ENGINEER THE FUTURE") */}
        <FeaturedBanner onOpenRegister={handleOpenRegister} />

        {/* Final Registration Section */}
        <CTA
          isOpen={isRegisterModalOpen}
          onOpen={handleOpenRegister}
          onClose={handleCloseRegister}
        />
      </main>

      {/* Professional Footer with Provided Asset */}
      <Footer onOpenRegister={handleOpenRegister} />
    </div>
  );
}
