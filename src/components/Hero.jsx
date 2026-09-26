import React from 'react';
import { EVENT_INFO } from '../data/eventData';
import { Calendar, MapPin, Zap, ArrowRight, ChevronDown, Cpu, Bot, Cog, Users } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden tech-grid">
      {/* Dynamic Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none opacity-50"></div>
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[450px] h-[450px] radial-glow-blue pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/3 w-[500px] h-[500px] radial-glow-purple pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold">{EVENT_INFO.organizers}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 hidden sm:inline">{EVENT_INFO.institution}</span>
            </div>

            {/* Main Title */}
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 pl-1">
                IEEE TECHNICAL EVENT
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.05]">
                IEEE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  INNOVATEX
                </span>{' '}
                <span className="text-white font-mono text-3xl sm:text-5xl md:text-6xl font-light text-cyan-400/90">
                  2026
                </span>
              </h1>
            </div>

            {/* Tagline & Supporting text */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-cyan-300/90 font-display">
                "{EVENT_INFO.tagline}"
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {EVENT_INFO.description}
              </p>
            </div>

            {/* Event Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Date */}
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-200 text-xs sm:text-sm font-mono backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                title="Editable placeholder date for recruitment task"
              >
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white">{EVENT_INFO.datePlaceholder}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider hidden sm:inline">
                  (Placeholder)
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-200 text-xs sm:text-sm font-mono backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{EVENT_INFO.venueShort}</span>
              </div>

              {/* Event Type */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-200 text-xs sm:text-sm font-mono backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{EVENT_INFO.category}</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary CTA */}
              <button
                onClick={onOpenRegister}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-sm tracking-wider font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <span>EXPLORE EVENT</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>

            {/* Micro reassurance */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Open to all students • IEEE IAS × IEEE RAS Student Branch Initiative</span>
            </div>
          </div>

          {/* Right Column: Clean Event-Focused Visual (AI + ROBOTICS + AUTOMATION) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] flex flex-col items-center">
              
              {/* Subtle background ambient radial glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-2xl pointer-events-none"></div>

              {/* Main Visual Card */}
              <div className="relative z-10 w-full rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/30 p-6 sm:p-7 backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
                
                {/* Header: Event Pillars */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                      CORE DOMAINS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                    IEEE IAS × RAS
                  </span>
                </div>

                {/* The 3 Connected Pillars: AI + ROBOTICS + AUTOMATION */}
                <div className="py-6 space-y-3.5 relative">
                  
                  {/* Subtle connecting vertical SVG circuit line */}
                  <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400/40 via-blue-400/40 to-indigo-400/40 hidden sm:block"></div>

                  {/* 1. ARTIFICIAL INTELLIGENCE */}
                  <div className="group relative flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-200">
                    <div className="relative z-10 w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                        AI
                      </div>
                      <div className="text-sm font-semibold text-white font-display">
                        Artificial Intelligence
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Intelligent systems & neural architectures
                      </div>
                    </div>
                  </div>

                  {/* Connecting plus badge */}
                  <div className="flex justify-center -my-1 relative z-20">
                    <span className="w-6 h-6 rounded-full bg-slate-950 border border-white/10 text-slate-400 text-xs font-mono flex items-center justify-center">
                      +
                    </span>
                  </div>

                  {/* 2. ROBOTICS */}
                  <div className="group relative flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-sky-400/40 transition-all duration-200">
                    <div className="relative z-10 w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                        ROBOTICS
                      </div>
                      <div className="text-sm font-semibold text-white font-display">
                        Robotic Systems
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Autonomous platforms & physical computing
                      </div>
                    </div>
                  </div>

                  {/* Connecting plus badge */}
                  <div className="flex justify-center -my-1 relative z-20">
                    <span className="w-6 h-6 rounded-full bg-slate-950 border border-white/10 text-slate-400 text-xs font-mono flex items-center justify-center">
                      +
                    </span>
                  </div>

                  {/* 3. AUTOMATION */}
                  <div className="group relative flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-indigo-400/40 transition-all duration-200">
                    <div className="relative z-10 w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Cog className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                        AUTOMATION
                      </div>
                      <div className="text-sm font-semibold text-white font-display">
                        Intelligent Automation
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Industrial control & cyber-physical workflows
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Tagline in Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>STUDENT INNOVATORS</span>
                  </div>
                  <span className="text-slate-300 font-semibold">MITS GWALIOR</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
