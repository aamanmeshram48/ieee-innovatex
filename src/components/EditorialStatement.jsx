import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function EditorialStatement({ onOpenRegister }) {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-transparent via-[#060914] to-transparent">
      {/* Background ambient thermal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Gallery Play Signature Editorial Statement */}
        <div className="space-y-10 sm:space-y-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // THE IEEE ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.12]">
            Rooted in rigorous engineering, fluent in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              artificial intelligence
            </span>
            , autonomous robotics, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              smart automation
            </span>
            . IEEE InnovateX positions student builders, researchers, and creators where they belong:{' '}
            <span className="underline decoration-cyan-400/40 decoration-wavy underline-offset-8">
              at the frontier of technology.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <button
              onClick={onOpenRegister}
              className="gp-button inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.02] cursor-pointer"
            >
              <span>Start the conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <span className="text-xs sm:text-sm font-mono text-slate-400">
              Annual Technical Summit • MITS Gwalior • IEEE IAS × RAS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
