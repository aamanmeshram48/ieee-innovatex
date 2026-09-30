import React, { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user already saw intro in this session
    const hasSeenIntro = sessionStorage.getItem('innovatex_intro_seen');
    if (hasSeenIntro) {
      setIsLoaded(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsLoaded(true);
              sessionStorage.setItem('innovatex_intro_seen', 'true');
              if (onComplete) onComplete();
            }, 850);
          }, 400);
          return 100;
        }
        // Organic non-linear acceleration
        const jump = prev < 30 ? 4 : prev < 75 ? 8 : 5;
        return Math.min(100, prev + jump);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsLoaded(true);
      sessionStorage.setItem('innovatex_intro_seen', 'true');
      if (onComplete) onComplete();
    }, 400);
  };

  if (isLoaded) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden select-none transition-opacity duration-700 ${
        isExiting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-label="Website Loading Animation"
      role="status"
    >
      {/* Top Curtain Panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#06080f] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Curtain Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#06080f] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isExiting ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Center Content Container */}
      <div
        className={`relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-12 transition-all duration-500 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top Bar: Brand & Skip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-300">
              IEEE IAS × IEEE RAS
            </span>
          </div>

          <button
            onClick={handleSkip}
            className="gp-button px-4 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* Center: Bold Editorial Typography & Thermal Heat Wave */}
        <div className="max-w-4xl mx-auto w-full my-auto py-12 text-center sm:text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
            <span className="opacity-70">// INITIALIZING ARCHITECTURE</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">MITS GWALIOR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white leading-none">
            IEEE INNOVATEX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              2026
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 font-sans max-w-xl">
            Where Ideas Become Innovation. Exploring the frontier of Artificial Intelligence, Robotics & Automation.
          </p>

          {/* Gallery Play Signature Thermal Progress Bar */}
          <div className="w-full pt-4 space-y-3">
            <div className="w-full h-1.5 sm:h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div
                className="h-full rounded-full transition-all duration-150 ease-out"
                style={{
                  width: `${progress}%`,
                  background:
                    'linear-gradient(90deg, #213ded 0%, #00acd7 25%, #00b181 50%, #e6c82a 75%, #ff3700 100%)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="tracking-widest">
                {progress < 30
                  ? 'LOADING ASSETS...'
                  : progress < 70
                  ? 'CONFIGURING THERMAL CORES...'
                  : progress < 100
                  ? 'SYNCHRONIZING REVOLUTION...'
                  : 'READY'}
              </span>
              <span className="font-bold text-cyan-400 text-sm">{progress}%</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: System Specs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 border-t border-white/5 pt-4">
          <div className="flex items-center gap-4">
            <span>CORE: MITS GWALIOR</span>
            <span>EDITION: ANNUAL SUMMIT</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
