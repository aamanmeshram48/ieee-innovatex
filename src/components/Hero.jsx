import React from 'react';
import { EVENT_INFO } from '../data/eventData';
import { Calendar, MapPin, Zap, ArrowRight, ChevronDown, Sparkles, Terminal, Cpu } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden tech-grid">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[450px] h-[450px] radial-glow-blue pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/3 w-[500px] h-[500px] radial-glow-purple pointer-events-none opacity-30"></div>

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
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400 pl-1">
                ANNUAL TECHNICAL SUMMIT
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
              <span>Open to all engineering & polytechnic students • Free participation registration</span>
            </div>
          </div>

          {/* Right Column: Abstract Futuristic CSS/SVG Tech Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl animate-pulse-glow pointer-events-none"></div>

              {/* Outer Orbit Circle */}
              <div className="absolute inset-2 rounded-full border border-cyan-500/20 border-dashed animate-orbit pointer-events-none">
                {/* Orbiting node 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80"></div>
                {/* Orbiting node 2 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/80"></div>
              </div>

              {/* Middle Orbit Circle */}
              <div
                className="absolute inset-12 rounded-full border border-white/10 pointer-events-none"
                style={{ animation: 'orbit-slow 36s linear infinite reverse' }}
              >
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-300"></div>
              </div>

              {/* Inner Hexagonal / Tech Core Visual (Pure SVG & CSS) */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl shadow-cyan-950/40 animate-tech-float">
                
                {/* Top header of core visual */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    IAS × RAS // v26.1
                  </span>
                </div>

                {/* Central Futuristic Radar / Waveform / Network Grid */}
                <div className="relative my-auto flex items-center justify-center py-2">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-40 h-40 text-cyan-400/80"
                    fill="none"
                    stroke="currentColor"
                  >
                    {/* Concentric Coordinate Rings */}
                    <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                    <circle cx="100" cy="100" r="60" strokeWidth="1" opacity="0.4" />
                    <circle cx="100" cy="100" r="35" strokeWidth="1.5" stroke="#00f0ff" opacity="0.7" />
                    <circle cx="100" cy="100" r="8" fill="#00f0ff" opacity="0.9" />

                    {/* Crosshair Axes */}
                    <line x1="15" y1="100" x2="185" y2="100" strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="15" x2="100" y2="185" strokeWidth="1" opacity="0.3" />

                    {/* Connecting Circuit Nodes */}
                    <path
                      d="M 50 60 L 100 100 L 150 70 M 100 100 L 140 145 M 100 100 L 60 140"
                      strokeWidth="1.5"
                      stroke="#38bdf8"
                      strokeLinecap="round"
                    />
                    <circle cx="50" cy="60" r="4" fill="#38bdf8" />
                    <circle cx="150" cy="70" r="4" fill="#818cf8" />
                    <circle cx="140" cy="145" r="4" fill="#a78bfa" />
                    <circle cx="60" cy="140" r="4" fill="#34d399" />
                  </svg>
                </div>

                {/* Bottom Status Feed */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">TELEMETRY</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    ACTIVE • ONLINE
                  </span>
                </div>
              </div>

              {/* Floating Geometric Element 1: Neural Nodes Card */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-slate-900/90 border border-cyan-500/40 rounded-xl p-3 backdrop-blur-md shadow-xl text-left hidden sm:flex items-center gap-3 animate-tech-float">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Edge Compute
                  </div>
                  <div className="text-xs font-bold text-white font-mono">Latency &lt; 2ms</div>
                </div>
              </div>

              {/* Floating Geometric Element 2: Robotics Status */}
              <div
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-slate-900/90 border border-purple-500/40 rounded-xl p-3 backdrop-blur-md shadow-xl text-left hidden sm:flex items-center gap-3"
                style={{ animation: 'tech-float 7s ease-in-out infinite reverse' }}
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Autonomous Fleet
                  </div>
                  <div className="text-xs font-bold text-white font-mono">ROS2 Connected</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
