import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Eye, 
  Layers, 
  ChevronUp, 
  ChevronDown, 
  Sliders, 
  Sparkles,
  Bot,
  Compass
} from 'lucide-react';

const ASSEMBLY_PHASES = [
  { range: [0, 0.18], name: '01 // ARM CALIBRATION & INGESTION', targetId: 'hero', desc: 'Robotic servos initialize telemetry & align chassis' },
  { range: [0.18, 0.38], name: '02 // ACTUATOR POSITIONING & TRACKS', targetId: 'about', desc: 'Precision multi-axis arms engage component tracks' },
  { range: [0.38, 0.62], name: '03 // MICRO-COMPONENT COMPOSITION', targetId: 'experience', desc: 'High-speed robotic assembly of processing cores' },
  { range: [0.62, 0.82], name: '04 // FUSION WELDING & BUS ROUTING', targetId: 'schedule', desc: 'Automated interconnect routing and thermal joints' },
  { range: [0.82, 1.0], name: '05 // CORE ACTIVATION & INSPECTION', targetId: 'register', desc: 'Assembled device diagnostics & system ignition' },
];

export default function ScrollableVideoBackground() {
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);
  const targetTimeRef = useRef(0);
  const smoothTimeRef = useRef(0);
  const isSeekingRef = useRef(false);

  // States
  const [mode, setMode] = useState('scroll'); // 'scroll' | 'ambient'
  const [duration, setDuration] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [overlayIntensity, setOverlayIntensity] = useState('balanced'); // 'cinematic' | 'balanced' | 'focus'
  const [isHudCollapsed, setIsHudCollapsed] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);

  // Current Phase
  const currentPhase = ASSEMBLY_PHASES.find(
    (p) => progress >= p.range[0] && progress <= p.range[1]
  ) || ASSEMBLY_PHASES[0];

  // Overlay opacity values
  const overlayOpacities = {
    cinematic: 'bg-black/40',
    balanced: 'bg-black/60',
    focus: 'bg-black/75',
  };

  // Video loaded metadata handler
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 10;
      setDuration(dur);
      setIsVideoLoaded(true);

      if (mode === 'scroll') {
        const maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        );
        const initialProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
        const initialTarget = initialProgress * dur;
        targetTimeRef.current = initialTarget;
        smoothTimeRef.current = initialTarget;
        try {
          videoRef.current.currentTime = initialTarget;
        } catch {
          // ignore
        }
      }
    }
  };

  // Scroll listener to update targetTime
  const handleScroll = useCallback(() => {
    if (mode !== 'scroll') return;
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollRatio = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    const dur = videoRef.current?.duration || duration || 10;
    
    targetTimeRef.current = scrollRatio * dur;
    setProgress(scrollRatio);
  }, [mode, duration]);

  // RequestAnimationFrame lerp loop for ultra-smooth video scrubbing
  useEffect(() => {
    const updateScrub = () => {
      if (mode === 'scroll' && videoRef.current && isVideoLoaded) {
        const target = targetTimeRef.current;
        const current = smoothTimeRef.current;
        const diff = target - current;

        // Smooth exponential interpolation (lerp)
        if (Math.abs(diff) > 0.005) {
          const nextTime = current + diff * 0.18; // smooth dampening factor
          smoothTimeRef.current = nextTime;

          if (!isSeekingRef.current && !videoRef.current.seeking) {
            try {
              videoRef.current.currentTime = nextTime;
              setCurrentTime(nextTime);
            } catch {
              // Ignore seek collisions
            }
          }
        } else if (Math.abs(current - target) > 0.0001) {
          smoothTimeRef.current = target;
          if (!isSeekingRef.current && !videoRef.current.seeking) {
            try {
              videoRef.current.currentTime = target;
              setCurrentTime(target);
            } catch {
              // Ignore
            }
          }
        }
      }
      rafIdRef.current = requestAnimationFrame(updateScrub);
    };

    rafIdRef.current = requestAnimationFrame(updateScrub);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [mode, isVideoLoaded]);

  // Setup scroll event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Mode change handler
  const toggleMode = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);

    if (newMode === 'ambient') {
      if (videoRef.current) {
        videoRef.current.loop = true;
        videoRef.current.play().then(() => {
          setIsPlayingAmbient(true);
        }).catch(() => {
          // Auto-play was prevented
        });
      }
    } else {
      // Revert to scroll sync
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.loop = false;
        setIsPlayingAmbient(false);
        handleScroll();
      }
    }
  };

  // Ambient timeupdate tracking
  const handleTimeUpdate = () => {
    if (mode === 'ambient' && videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || duration || 10;
      setCurrentTime(cur);
      setProgress(cur / dur);
    }
  };

  // Ambient play/pause toggle
  const toggleAmbientPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlayingAmbient(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlayingAmbient(false);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Manual scrubber jump
  const handleScrubberChange = (e) => {
    const val = parseFloat(e.target.value);
    const dur = videoRef.current?.duration || duration || 10;
    const newTargetTime = val * dur;

    setProgress(val);
    targetTimeRef.current = newTargetTime;
    smoothTimeRef.current = newTargetTime;

    if (videoRef.current) {
      try {
        videoRef.current.currentTime = newTargetTime;
        setCurrentTime(newTargetTime);
      } catch {
        // ignore
      }
    }

    // Also scroll the page to match this position!
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    window.scrollTo({
      top: val * maxScroll,
      behavior: 'smooth',
    });
  };

  // Jump to specific section
  const jumpToPhase = (phase) => {
    const targetEl = document.getElementById(phase.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else if (phase.targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Format time MM:SS.SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return `${mins.toString().padStart(2, '0')}:${secs.padStart(4, '0')}`;
  };

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FIXED BACKGROUND VIDEO CONTAINER                          */}
      {/* ============================================================ */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden bg-[#04060d]"
        aria-hidden="true"
      >
        {/* Video Stream */}
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}robotic-assembly.mp4`}
          playsInline
          muted={isMuted}
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={() => { isSeekingRef.current = true; }}
          onSeeked={() => { isSeekingRef.current = false; }}
          className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.01] will-change-transform opacity-90 filter contrast-[1.08] saturate-[1.1]"
        />

        {/* Dynamic Darkness & Contrast Layer */}
        <div 
          className={`absolute inset-0 transition-colors duration-500 ${overlayOpacities[overlayIntensity]} backdrop-blur-[1px]`} 
        />

        {/* Cinematic Vignette Overlay (Dark edges and top/bottom gradient) */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#04060d_95%] opacity-85" />
        
        {/* Vertical gradient to protect top navbar and bottom footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060d]/90 via-transparent to-[#04060d]/95 pointer-events-none" />

        {/* Tech Cyber Grid scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-screen pointer-events-none" />

        {/* Corner HUD Telemetry Reticle Brackets */}
        <div className="hidden lg:block absolute top-20 left-6 text-cyan-500/30 font-mono text-[10px] tracking-widest uppercase select-none">
          ┌ REC [1080P/60FPS] • ROBOTIC_ASSEMBLY_SYS
        </div>
        <div className="hidden lg:block absolute top-20 right-6 text-cyan-500/30 font-mono text-[10px] tracking-widest uppercase select-none text-right">
          SYS_NODE: IEEE_RAS_IAS_MITS ┐
        </div>
        <div className="hidden lg:block absolute bottom-6 left-6 text-cyan-500/30 font-mono text-[10px] tracking-widest uppercase select-none">
          └ TELEMETRY_FEED: SCROLL_DRIVEN_GPU
        </div>
        <div className="hidden lg:block absolute bottom-6 right-6 text-cyan-500/30 font-mono text-[10px] tracking-widest uppercase select-none text-right">
          STATUS: ACTIVE_SYNC ┘
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FLOATING ROBOTIC ASSEMBLY TELEMETRY HUD WIDGET            */}
      {/* ============================================================ */}
      <aside 
        aria-label="Robotic Assembly Background Telemetry & Controls"
        className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-auto transition-all duration-300"
      >
        <div className="relative rounded-2xl bg-[#090e1d]/90 border border-cyan-500/30 p-4 sm:p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl text-slate-200">
          
          {/* Top Header / Collapsible Row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white tracking-wider">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>ROBOTIC BACKGROUND HUD</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Audio Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-white/10 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>

              {/* Collapse / Expand Toggle */}
              <button
                type="button"
                onClick={() => setIsHudCollapsed(!isHudCollapsed)}
                title={isHudCollapsed ? "Expand Controls" : "Collapse Controls"}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-white/10 transition-colors cursor-pointer"
              >
                {isHudCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Collapsible Content */}
          {!isHudCollapsed && (
            <div className="mt-3.5 pt-3 border-t border-white/10 space-y-3.5">
              
              {/* Assembly Stage Status */}
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-left">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-cyan-400 font-bold">ASSEMBLY PROGRESS</span>
                  <span className="text-white font-semibold">{Math.round(progress * 100)}%</span>
                </div>
                <div className="text-xs font-mono font-semibold text-slate-100 truncate">
                  {currentPhase.name}
                </div>
                <div className="text-[10px] text-slate-400 font-sans mt-0.5 line-clamp-1">
                  {currentPhase.desc}
                </div>
              </div>

              {/* Interactive Timeline Scrubber */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>TIMECODE</span>
                  <span className="text-cyan-300 font-bold">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={progress}
                  onChange={handleScrubberChange}
                  aria-label="Video scrubber"
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
                />
              </div>

              {/* Mode Selection & Quick Presets */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => toggleMode('scroll')}
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    mode === 'scroll'
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/10'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Scroll Sync</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (mode !== 'ambient') {
                      toggleMode('ambient');
                    } else {
                      toggleAmbientPlay();
                    }
                  }}
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    mode === 'ambient'
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/10'
                  }`}
                >
                  {mode === 'ambient' && isPlayingAmbient ? (
                    <Pause className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                  <span>{mode === 'ambient' ? (isPlayingAmbient ? 'Playing' : 'Paused') : 'Ambient Loop'}</span>
                </button>
              </div>

              {/* Tint Intensity Presets */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cyan-400" />
                  <span>Tint:</span>
                </span>
                <div className="flex items-center gap-1">
                  {(['cinematic', 'balanced', 'focus']).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setOverlayIntensity(tier)}
                      className={`px-2 py-0.5 rounded capitalize text-[10px] font-mono transition-colors cursor-pointer ${
                        overlayIntensity === tier
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jump to Sections based on Assembly Phase */}
              <div className="pt-1 text-left">
                <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>JUMP TO ASSEMBLY MILESTONE</span>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {ASSEMBLY_PHASES.map((p, idx) => (
                    <button
                      key={p.targetId}
                      type="button"
                      onClick={() => jumpToPhase(p)}
                      title={`${p.name} - ${p.desc}`}
                      className={`h-6 rounded text-[10px] font-mono font-bold flex items-center justify-center transition-all cursor-pointer ${
                        currentPhase.targetId === p.targetId
                          ? 'bg-cyan-400 text-black'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/10'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Compact Bar when Collapsed */}
          {isHudCollapsed && (
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span className="text-cyan-400 font-semibold truncate max-w-[170px]">
                {currentPhase.name.split('//')[1] || currentPhase.name}
              </span>
              <span className="text-white font-bold">{Math.round(progress * 100)}%</span>
            </div>
          )}

        </div>
      </aside>
    </>
  );
}
