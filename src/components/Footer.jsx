import React from 'react';
import { ASSETS } from '../assets';
import { FOOTER_LINKS, EVENT_INFO } from '../data/eventData';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './BrandIcons';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#02040a] border-t border-white/10 text-slate-400 overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. MAIN FOOTER CONTENT AREA                                   */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand & Chapter Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            {/* Logos cluster */}
            <div className="flex items-center gap-3 bg-slate-900/60 border border-white/10 p-2 rounded-lg w-fit">
              <img
                src={ASSETS.ieee.src}
                alt={ASSETS.ieee.alt}
                className="h-7 w-auto object-contain brightness-110"
              />
              <span className="text-slate-600 font-mono">|</span>
              <img
                src={ASSETS.ias.src}
                alt={ASSETS.ias.alt}
                className="h-5 w-auto object-contain brightness-125"
              />
              <span className="text-slate-600 font-mono">×</span>
              <img
                src={ASSETS.ras.src}
                alt={ASSETS.ras.alt}
                className="h-5 w-auto object-contain brightness-110"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white font-display">
                {EVENT_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 font-mono">
                {EVENT_INFO.organizers}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
                An annual technical symposium exploring modern advancements in Artificial Intelligence, Autonomous Robotics, and Industrial Automation.
              </p>
            </div>

            {/* Initiative Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>IEEE Student Branch Initiative • MITS Gwalior</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.label}>
                  {link.label === 'Register' ? (
                    <button
                      onClick={onOpenRegister}
                      className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Repository */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              CONNECT & SOCIALS
            </h4>
            <p className="text-xs text-slate-400">
              Follow IEEE IAS & IEEE RAS chapters for updates and announcements.
            </p>

            <div className="flex flex-col space-y-2 pt-1 font-mono text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-1 rounded"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram (Chapter Placeholder)</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-1 rounded"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn (IEEE Student Branch)</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-1 rounded"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                <span>GitHub (Technical Recruitment Task)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Middle Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-400 text-center sm:text-left">
            {FOOTER_LINKS.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. TRUE FULL-WIDTH END FOOTER BANNER (100% Viewport Width)   */}
      {/* ============================================================ */}
      <div className="w-full bg-white border-t border-slate-700 py-3 sm:py-4 px-2 sm:px-6 shadow-inner">
        <div className="w-full flex items-center justify-center">
          <img
            src={ASSETS.footer.src}
            alt={ASSETS.footer.alt}
            className="w-full h-auto max-h-24 sm:max-h-28 md:max-h-32 object-contain select-none"
            loading="lazy"
          />
        </div>
      </div>

    </footer>
  );
}
