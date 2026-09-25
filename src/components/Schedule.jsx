import React, { useState } from 'react';
import { SCHEDULE_TIMELINE, EVENT_INFO } from '../data/eventData';
import { Clock, MapPin, Sparkles, ChevronRight, CalendarCheck } from 'lucide-react';

export default function Schedule() {
  const [activeSession, setActiveSession] = useState(1); // Default to Keynote

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#04060d] border-t border-white/5 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span>03 // ITINERARY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Event <span className="text-cyan-400">Schedule</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans">
              A curated timeline designed to maximize learning, networking, and exposure to breakthrough technical disciplines.
            </p>
          </div>

          {/* Quick Info Box */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-sm self-start md:self-auto">
            <CalendarCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">{EVENT_INFO.datePlaceholder} • 10:00 AM</div>
              <div className="text-slate-400">{EVENT_INFO.location}</div>
            </div>
          </div>
        </div>

        {/* Timeline Component (Desktop & Mobile Responsive) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Central Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-32 w-0.5 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-purple-500/40 hidden sm:block"></div>
          {/* Mobile Left Line */}
          <div className="absolute top-4 bottom-4 left-5 w-0.5 bg-cyan-500/30 sm:hidden"></div>

          <div className="space-y-8 sm:space-y-10">
            {SCHEDULE_TIMELINE.map((item, index) => {
              const isSelected = activeSession === index;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveSession(index)}
                  className={`group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-10 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/40 -translate-y-0.5'
                      : 'bg-slate-950/50 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Left Column: Time & Period */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-24 shrink-0 pl-10 sm:pl-0">
                    <div className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.time}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400 tracking-wider">
                      {item.period}
                    </div>
                  </div>

                  {/* Node Circle on Timeline */}
                  <div
                    className={`absolute left-3 sm:left-[7.65rem] top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                      isSelected
                        ? 'border-cyan-400 bg-slate-950 shadow-lg shadow-cyan-400/80 scale-110'
                        : 'border-slate-600 bg-slate-900 group-hover:border-cyan-400/60'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-cyan-400 animate-ping' : 'bg-slate-600 group-hover:bg-cyan-400'
                      }`}
                    ></div>
                  </div>

                  {/* Main Content Card */}
                  <div className="flex-1 text-left space-y-2 pl-10 sm:pl-0 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-slate-800 text-slate-300 border border-white/5">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Right Arrow indicator */}
                  <div className="hidden sm:flex items-center self-center text-slate-600 group-hover:text-cyan-400 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Notice for Task Customization */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500">
            * Timings and tracks are structured in <code className="text-slate-400 bg-slate-900 px-2 py-0.5 rounded">src/data/eventData.js</code> for instant customization.
          </p>
        </div>

      </div>
    </section>
  );
}
