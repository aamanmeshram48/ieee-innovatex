import React from 'react';
import { ASSETS } from '../assets';
import { FOOTER_LINKS, EVENT_INFO } from '../data/eventData';
import { ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './BrandIcons';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040a] border-t border-white/10 text-slate-400 overflow-hidden">
      {/* Top Graphic Showcase: Provided Footer Image Asset */}
      <div className="relative w-full border-b border-white/10 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 relative group">
            {/* Provided Footer Image */}
            <img
              src={ASSETS.footer.src}
              alt={ASSETS.footer.alt}
              className="w-full h-auto max-h-52 object-cover object-center brightness-95 group-hover:brightness-105 transition-all duration-300"
              loading="lazy"
            />
            {/* Gradient overlay on footer image for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand & Chapter Column */}
          <div className="md:col-span-5 space-y-6 text-left">
            {/* Logos cluster */}
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.ieee.src}
                alt={ASSETS.ieee.alt}
                className="h-8 w-auto object-contain brightness-110"
              />
              <span className="text-slate-600 font-mono">|</span>
              <img
                src={ASSETS.ias.src}
                alt={ASSETS.ias.alt}
                className="h-6 w-auto object-contain brightness-125"
              />
              <span className="text-slate-600 font-mono">×</span>
              <img
                src={ASSETS.ras.src}
                alt={ASSETS.ras.alt}
                className="h-6 w-auto object-contain brightness-110"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white font-display">
                {EVENT_INFO.organizers}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 font-mono">
                {EVENT_INFO.institution}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
                Madhav Institute of Technology & Science, Gwalior (M.P.), India.
                Empowering future engineers through technology, autonomy, and research.
              </p>
            </div>

            {/* Verification badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official IEEE Student Branch Technical Initiative</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
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

          {/* Social Placeholders & Connect */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              CONNECT & REPOSITORY
            </h4>
            <p className="text-xs text-slate-400">
              Connect with IEEE IAS and RAS chapters at MITS Gwalior.
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

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
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
    </footer>
  );
}
