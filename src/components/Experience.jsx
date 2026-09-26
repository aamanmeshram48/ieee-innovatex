import React from 'react';
import { EXPERIENCE_BENEFITS } from '../data/eventData';
import { BookOpen, Hammer, Users, Lightbulb, ArrowUpRight } from 'lucide-react';

const ICON_MAP = {
  learn: BookOpen,
  build: Hammer,
  connect: Users,
  innovate: Lightbulb,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#04060d]/55 backdrop-blur-[2px] border-t border-white/5 scroll-mt-20 tech-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] radial-glow-purple pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span>02 // EVENT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Why <span className="text-cyan-400">InnovateX</span>?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans">
              An immersive environment engineered to accelerate your trajectory from student developer to industry-ready innovator.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>ASYMMETRIC ENGINEERING EXPERIENCE</span>
          </div>
        </div>

        {/* Asymmetric Modern Bento Grid (4 benefits: LEARN, BUILD, CONNECT, INNOVATE) */}
        <div className="grid grid-cols-12 gap-6">
          {EXPERIENCE_BENEFITS.map((item) => {
            const Icon = ICON_MAP[item.id] || Lightbulb;

            return (
              <div
                key={item.id}
                className={`${item.span} group relative rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.borderColor} p-8 sm:p-10 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-slate-400 tracking-wider">
                      {item.badge}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 text-white group-hover:border-white/20 transition-colors">
                      <Icon className={`w-5 h-5 ${item.accentColor}`} />
                    </div>
                  </div>

                  {/* Keyword Title & Subtitle */}
                  <div className="space-y-2 mb-4">
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white group-hover:${item.accentColor} transition-colors`}>
                      {item.keyword}
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </div>
                  </div>

                  {/* Core Description (Requirement exact text) */}
                  <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Additional Context */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="group-hover:text-white transition-colors">IEEE CHAPTER EMPOWERED</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
