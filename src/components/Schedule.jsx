import React, { useState } from 'react';
import { SCHEDULE_TIMELINE, EVENT_INFO } from '../data/eventData';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  const [activeSession, setActiveSession] = useState(1); // Keynote session active by default

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#04060d]/50 backdrop-blur-[2px] border-t border-white/5 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan pointer-events-none opacity-15"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span>03 // ITINERARY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Event <span className="text-cyan-400">Schedule</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans">
              A curated timeline designed to maximize learning, networking, and exposure to breakthrough technical disciplines.
            </p>
          </div>

          {/* Quick Date & Venue Pill */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{EVENT_INFO.datePlaceholder} • {EVENT_INFO.venueShort}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (sm & above): Clean Two-Column Timeline        */}
        {/* ============================================================ */}
        <div className="hidden sm:block">
          <div className="space-y-6">
            {SCHEDULE_TIMELINE.map((item, index) => {
              const isSelected = activeSession === index;
              const isFirst = index === 0;
              const isLast = index === SCHEDULE_TIMELINE.length - 1;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveSession(index)}
                  className="flex items-start group cursor-pointer"
                >
                  {/* LEFT: Time Column (Fixed Width & Right Aligned) */}
                  <div className="w-36 lg:w-40 shrink-0 text-right pr-6 pt-3 select-none">
                    <div className="font-mono text-base lg:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.time}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {item.period}
                    </div>
                  </div>

                  {/* CENTER: Timeline Line & Node Dot */}
                  <div className="relative flex flex-col items-center px-4 self-stretch shrink-0">
                    {/* Vertical connecting line */}
                    <div
                      className={`w-px bg-slate-800 absolute ${
                        isFirst ? 'top-5 bottom-0' : isLast ? 'top-0 bottom-5' : 'top-0 bottom-0'
                      }`}
                    ></div>

                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 mt-4 w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.7)] scale-110'
                          : 'border-slate-600 bg-slate-900 group-hover:border-cyan-400 group-hover:bg-cyan-950'
                      }`}
                    ></div>
                  </div>

                  {/* RIGHT: Event Card (Clean & Aligned to same left edge) */}
                  <div className="flex-1 pl-4 pb-2">
                    <div
                      className={`rounded-xl p-6 border transition-all duration-200 text-left ${
                        isSelected
                          ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                          : 'bg-slate-950/60 border-white/5 hover:border-white/15 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <h3 className="text-lg lg:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-slate-800/80 text-slate-300 border border-white/5">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-sans mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE LAYOUT (below sm): Simplified Clean Stacked Cards     */}
        {/* ============================================================ */}
        <div className="block sm:hidden space-y-4">
          {SCHEDULE_TIMELINE.map((item, index) => {
            const isSelected = activeSession === index;

            return (
              <div
                key={item.time}
                onClick={() => setActiveSession(index)}
                className={`w-full rounded-xl p-5 border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-900/95 border-cyan-500/50 shadow-md shadow-cyan-950/30'
                    : 'bg-slate-950/70 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Time & Period Badge */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="font-mono text-sm font-bold text-white">
                      {item.time}
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400 font-semibold uppercase">
                      • {item.period}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-base font-bold text-white font-display mb-1.5">
                  {item.title}
                </h3>

                {/* Event Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                  {item.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-slate-500">
            * Schedule items are dynamically configurable in <code className="text-slate-400 bg-slate-900 px-2 py-0.5 rounded">src/data/eventData.js</code>.
          </p>
        </div>

      </div>
    </section>
  );
}
