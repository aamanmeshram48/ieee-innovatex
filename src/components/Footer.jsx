import React from 'react';
import { ASSETS } from '../assets';
import { FOOTER_LINKS, EVENT_INFO } from '../data/eventData';
import { ArrowUp, ShieldCheck, RotateCcw } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './BrandIcons';

export default function Footer({ onOpenRegister, onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      history.replaceState(null, '', ' ');
    }
  };

  const handleReplay = () => {
    sessionStorage.removeItem('innovatex_intro_seen');
    if (onReplayIntro) {
      onReplayIntro();
    } else {
      window.location.reload();
    }
  };

  return (
    <footer className="w-full bg-[#02040a] border-t border-white/10 text-slate-400 overflow-hidden">
      
      {/* Main Footer Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand & Chapter Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            {/* Logos cluster */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2.5 rounded-full w-fit backdrop-blur-md">
              <img
                src={ASSETS.ieee.src}
                alt={ASSETS.ieee.alt}
                className="h-6 w-auto object-contain brightness-110"
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
              <h3 className="text-2xl font-bold text-white font-display">
                {EVENT_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 font-mono">
                {EVENT_INFO.organizers}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
                An annual technical symposium exploring modern advancements in Artificial Intelligence, Autonomous Robotics, and Industrial Automation at MITS Gwalior.
              </p>
            </div>

            {/* Initiative Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>IEEE Student Branch Initiative • MITS Gwalior</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects & Tracks
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-cyan-400 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-cyan-400 transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenRegister}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links & Repository */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              CONNECT & COMMUNITY
            </h4>
            <p className="text-xs text-slate-400">
              Follow IEEE IAS & IEEE RAS chapters for live updates, workshop notifications, and summit schedules.
            </p>

            <div className="flex flex-col space-y-2 pt-1 font-mono text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-1 rounded"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram (Chapter Updates)</span>
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
                href="https://github.com/aamanmeshram48/ieee-innovatex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-1 rounded"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        {/* Middle Bar: Copyright, Replay Intro & Back to Top */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-400 text-center sm:text-left">
            {FOOTER_LINKS.copyright}
          </div>

          <div className="flex items-center gap-3">
            {/* Gallery Play Intro Replay Button */}
            <button
              onClick={handleReplay}
              className="gp-button flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
              title="Replay the cinematic intro loader"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
              <span>REPLAY INTRO</span>
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              id="top-footer-btn"
              className="gp-button flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Official Provided Footer Asset Banner (100% Viewport Width) */}
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
