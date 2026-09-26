import React from 'react';
import { ABOUT_FEATURES } from '../data/eventData';
import { Cpu, Bot, Zap, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Zap: Zap,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#04060d]/50 backdrop-blur-[2px] border-t border-white/5 scroll-mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] radial-glow-blue pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <span>01 // THE MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Built for the <span className="text-cyan-400">Curious</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
            IEEE InnovateX 2026 brings together students, builders and technology enthusiasts to explore ideas across AI, robotics and automation.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ABOUT_FEATURES.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.iconName] || Cpu;

            return (
              <div
                key={feature.number}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 hover:-translate-y-1"
              >
                {/* Subtle card top glow on hover */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-6">
                  {/* Top Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-slate-600 group-hover:text-cyan-400/90 transition-colors">
                      {feature.number}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {feature.tag}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Primary Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                    {feature.details}
                  </p>
                </div>

                {/* Bottom Micro interaction */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>EXPLORE TRACK</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
