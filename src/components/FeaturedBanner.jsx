import React from 'react';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

export default function FeaturedBanner({ onOpenRegister }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#04060d]/70 via-[#080d1e]/50 to-[#04060d]/70 backdrop-blur-[2px] border-t border-b border-white/10 tech-grid">
      {/* Background Futuristic Glow & Concentric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow-cyan pointer-events-none opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-purple pointer-events-none opacity-25"></div>

      {/* Decorative CSS Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-cyan-500/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-purple-500/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Futuristic Terminal Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
          <Terminal className="w-3.5 h-3.5" />
          <span>IEEE IAS × IEEE RAS FLAGSHIP</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-tight">
          ENGINEER THE <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            FUTURE.
          </span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto font-sans tracking-tight">
          Explore ideas. Build solutions. Connect with innovators.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={onOpenRegister}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-mono text-sm uppercase tracking-widest font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/60 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Floating tech badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-white/5">
            // OPEN TO ALL UNIVERSITIES
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-white/5">
            // CERTIFICATES PROVIDED
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-white/5">
            // HANDS-ON DEMOS
          </span>
        </div>

      </div>
    </section>
  );
}
