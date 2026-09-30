import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../assets';
import { EVENT_INFO } from '../data/eventData';
import { Menu, X, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop menu dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Projects & Tracks', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      history.replaceState(null, '', ' ');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#06080f]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand Lockup (Clickable smooth scroll to #top like Gallery Play) */}
          <a
            href="#"
            onClick={scrollToTop}
            id="top"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full p-1 transition-transform hover:scale-[1.02]"
            aria-label="IEEE InnovateX 2026 Home"
          >
            {/* Logos cluster */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-full backdrop-blur-md group-hover:border-cyan-400/40 transition-all shadow-inner">
              <img
                src={ASSETS.ieee.src}
                alt={ASSETS.ieee.alt}
                className="h-5 sm:h-6 w-auto object-contain brightness-110"
                loading="eager"
              />
              <span className="text-slate-600 text-xs font-mono select-none">|</span>
              <img
                src={ASSETS.ias.src}
                alt={ASSETS.ias.alt}
                className="h-4 sm:h-5 w-auto object-contain brightness-125"
                loading="eager"
              />
              <span className="text-slate-600 text-xs font-mono select-none">×</span>
              <img
                src={ASSETS.ras.src}
                alt={ASSETS.ras.alt}
                className="h-4 sm:h-5 w-auto object-contain brightness-110"
                loading="eager"
              />
            </div>

            {/* Brand text */}
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                IEEE IAS × RAS
              </span>
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display">
                INNOVATEX <span className="text-cyan-400 font-mono">2026</span>
              </span>
            </div>
          </a>

          {/* Right Desktop: Gallery Play Expandable Pill Menu & Register Button */}
          <div className="hidden md:flex items-center gap-3" ref={menuRef}>
            
            {/* Expandable Menu Pill Container */}
            <div className="relative flex items-center">
              <div
                className={`flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-xl transition-all duration-300 ${
                  isMenuOpen
                    ? 'shadow-lg shadow-cyan-500/10 border-cyan-500/30'
                    : 'hover:border-white/20'
                }`}
              >
                {/* Menu Trigger Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isMenuOpen
                      ? 'bg-cyan-400 text-black font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>MENU</span>
                  <span className="text-[10px] opacity-70">
                    {isMenuOpen ? '▲' : '▼'}
                  </span>
                </button>

                {/* Inline Quick Links (Visible when open) */}
                {isMenuOpen && (
                  <div className="flex items-center gap-1 pl-1 pr-2 animate-in fade-in slide-in-from-right-3 duration-200">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Gallery Play Style CTA Button */}
            <button
              onClick={onOpenRegister}
              className="gp-button relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="gp-button p-2.5 rounded-full bg-slate-900/80 border border-white/15 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
        <div className="md:hidden border-b border-white/10 bg-[#06080f]/95 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>📍 {EVENT_INFO.venueShort}</span>
              <span>📅 {EVENT_INFO.datePlaceholder}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
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
