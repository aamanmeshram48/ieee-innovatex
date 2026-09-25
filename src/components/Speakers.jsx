import React from 'react';
import { KEYNOTE_SPEAKERS } from '../data/eventData';
import { UserCheck, Sparkles, Binary, Award, ShieldAlert } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from './BrandIcons';

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24 sm:py-32 bg-[#04060d] border-t border-white/5 scroll-mt-20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] radial-glow-blue pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <span>04 // KEYNOTE FACULTY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Keynote <span className="text-cyan-400">Speakers</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Hear from industry visionaries and pioneering researchers at the vanguard of autonomous systems and machine intelligence.
          </p>

          {/* Explicit Editable Placeholder Notice as required by Task Instructions */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-amber-500/20 text-amber-300/90 text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>
              Placeholder Profiles: Real speaker details & headshots can be configured in <code className="text-white bg-black/40 px-1 py-0.5 rounded">src/data/eventData.js</code>.
            </span>
          </div>
        </div>

        {/* Exactly 2 Keynote Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {KEYNOTE_SPEAKERS.map((speaker, index) => {
            return (
              <div
                key={speaker.id}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/10 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 hover:-translate-y-1"
              >
                {/* Subtle Card Accent Stripe */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

                <div className="space-y-6">
                  {/* Top Role Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {speaker.roleLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">IEEE IAS × RAS GUEST</span>
                  </div>

                  {/* Abstract Futuristic Avatar Visual */}
                  <div className="relative aspect-video rounded-xl bg-slate-950 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    {/* Abstract Neural Grid & Waveform */}
                    <div className="absolute inset-0 tech-grid-dense opacity-40"></div>
                    
                    {/* Gradient background circles */}
                    <div className="absolute w-32 h-32 rounded-full bg-cyan-500/10 blur-xl"></div>
                    <div className="absolute w-24 h-24 rounded-full bg-purple-500/10 blur-xl"></div>

                    {/* Futuristic Geometric Tech Avatar Graphic */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform duration-300">
                        {index === 0 ? (
                          <Binary className="w-10 h-10 text-cyan-400" />
                        ) : (
                          <Sparkles className="w-10 h-10 text-purple-400" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                        // PROFILE CONFIRMATION PENDING
                      </span>
                    </div>

                    {/* Placeholder image indicator watermark */}
                    <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-400">
                      INSERT PHOTO HERE
                    </div>
                  </div>

                  {/* Speaker Name & Topic */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                      "{speaker.name}"
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 font-mono">
                      {speaker.topic}
                    </div>
                    <div className="text-xs text-slate-400 pt-1">
                      {speaker.affiliation}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {speaker.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {speaker.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Social Connectors */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">CONNECT WITH SPEAKER</span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a
                      href={speaker.socials.linkedin}
                      className="hover:text-cyan-400 transition-colors p-1"
                      aria-label={`${speaker.name} LinkedIn Profile`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={speaker.socials.twitter}
                      className="hover:text-cyan-400 transition-colors p-1"
                      aria-label={`${speaker.name} Twitter Profile`}
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
