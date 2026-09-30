import React from 'react';
import { EVENT_INFO } from '../data/eventData';
import { Calendar, MapPin, Zap, ArrowUpRight, ChevronDown, Cpu, Bot, Cog, Users } from 'lucide-react';
import BrandTicker from './BrandTicker';

export default function Hero({ onOpenRegister }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-0 overflow-hidden bg-[#04060d]">
      
      {/* Ambient thermal background glow like Gallery Play */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-amber-500/10 via-orange-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Gallery Play Massive Typography & Frosted CTAs */}
          <div className="lg:col-span-8 text-left space-y-8">
            
            {/* Minimalist Top Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono tracking-wider backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold">{EVENT_INFO.organizers}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 hidden sm:inline">{EVENT_INFO.institution}</span>
            </div>

            {/* Gallery Play Style Massive Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-display text-white leading-[0.98]">
                Frontier-defining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  intelligence
                </span>{' '}
                for the <br />
                age of autonomy.
              </h1>
            </div>

            {/* Editorial Paragraph */}
            <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl font-light">
              We craft bold technical platforms, autonomous robotic architectures, and hands-on competitions that empower student builders and move technology forward.
            </p>

            {/* Gallery Play Style CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="gp-button inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Register for Event</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="gp-button inline-flex items-center gap-2 px-6 py-4 rounded-full font-mono text-xs sm:text-sm tracking-wider font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md cursor-pointer"
              >
                <span>Explore Showcase</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Specs metadata pills */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-sm">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{EVENT_INFO.datePlaceholder}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{EVENT_INFO.venueShort}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{EVENT_INFO.category}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Pillar Core Card */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div className="w-full rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    CORE DOMAINS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                  IEEE IAS × RAS
                </span>
              </div>

              {/* Pillars Stack */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-cyan-300 uppercase">AI</div>
                    <div className="text-sm font-semibold text-white font-display">Artificial Intelligence</div>
                    <div className="text-[11px] text-slate-400">Neural models & edge compute</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-400/30 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-sky-300 uppercase">Robotics</div>
                    <div className="text-sm font-semibold text-white font-display">Autonomous Systems</div>
                    <div className="text-[11px] text-slate-400">Kinematics & physical robotics</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-400/30 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Cog className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-indigo-300 uppercase">Automation</div>
                    <div className="text-sm font-semibold text-white font-display">Industry 4.0 Control</div>
                    <div className="text-[11px] text-slate-400">Cyber-physical workflows</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>STUDENT INNOVATORS</span>
                </div>
                <span className="text-slate-200 font-semibold">MITS GWALIOR</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Infinite Partner Marquee (Gallery Play signature) */}
      <BrandTicker />

    </section>
  );
}
