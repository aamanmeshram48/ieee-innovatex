import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets';
import { NAV_LINKS, EVENT_INFO } from '../data/eventData';
import { Menu, X, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#04060d]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Branding: IEEE IAS × RAS */}
          <a
            href="#"
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="IEEE InnovateX 2026 Home"
          >
            {/* Logos cluster */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-white/10 p-1.5 rounded-lg backdrop-blur-sm group-hover:border-cyan-500/40 transition-colors">
              <img
                src={ASSETS.ieee.src}
                alt={ASSETS.ieee.alt}
                className="h-6 w-auto object-contain brightness-110"
                loading="eager"
              />
              <span className="text-slate-600 text-xs font-mono select-none">|</span>
              <img
                src={ASSETS.ias.src}
                alt={ASSETS.ias.alt}
                className="h-5 w-auto object-contain brightness-125"
                loading="eager"
              />
              <span className="text-slate-600 text-xs font-mono select-none">×</span>
              <img
                src={ASSETS.ras.src}
                alt={ASSETS.ras.alt}
                className="h-5 w-auto object-contain brightness-110"
                loading="eager"
              />
            </div>

            {/* Brand text */}
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                IEEE IAS × RAS
              </span>
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display">
                INNOVATEX <span className="text-cyan-400">2026</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/50 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Register CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060914]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>📍 {EVENT_INFO.venueShort}</span>
              <span>📅 {EVENT_INFO.datePlaceholder}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
