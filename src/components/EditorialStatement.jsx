import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Terminal, RefreshCw } from 'lucide-react';

export default function EditorialStatement({ onOpenRegister }) {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const triggerGlitch = () => {
    setIsVisible(false);
    setTimeout(() => {
      setGlitchKey((prev) => prev + 1);
      setIsVisible(true);
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      id="statement"
      className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-transparent via-[#060914] to-transparent cyber-scanline"
    >
      {/* Background ambient thermal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Gallery Play Signature Editorial Statement with Fade Glitch Animation */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* Header Tag with re-glitch control */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 // THE IEEE ETHOS</span>
            </div>

            <button
              onClick={triggerGlitch}
              className="gp-button flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 hover:text-cyan-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              title="Re-play fade glitch animation"
            >
              <RefreshCw className="w-3 h-3 text-cyan-400" />
              <span>GLITCH EFFECT</span>
            </button>
          </div>

          {/* Glitch-Fade Animated Statement Headline */}
          <div key={glitchKey} className="relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.14]">
              
              {/* Line 1 */}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  isVisible ? 'glitch-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '50ms' }}
              >
                Rooted in rigorous engineering,
              </span>{' '}
              
              {/* Line 2 with AI highlight */}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  isVisible ? 'glitch-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '180ms' }}
              >
                fluent in{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 glitch-text-hover cursor-pointer font-extrabold">
                  artificial intelligence
                </span>
                ,
              </span>{' '}

              {/* Line 3 with Robotics & Smart Automation highlight */}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  isVisible ? 'glitch-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '320ms' }}
              >
                autonomous robotics, and{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 glitch-text-hover cursor-pointer font-extrabold">
                  smart automation
                </span>
                .
              </span>{' '}

              {/* Line 4: IEEE InnovateX */}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  isVisible ? 'glitch-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '460ms' }}
              >
                IEEE InnovateX positions student builders, researchers, and creators where they belong:{' '}
              </span>

              {/* Line 5: Frontier of technology */}
              <span
                className={`inline-block transition-opacity duration-300 ${
                  isVisible ? 'glitch-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '600ms' }}
              >
                <span className="underline decoration-cyan-400/50 decoration-wavy underline-offset-8 glitch-text-hover text-white font-extrabold cursor-pointer">
                  at the frontier of technology.
                </span>
              </span>

            </h2>
          </div>

          {/* Action CTAs */}
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
