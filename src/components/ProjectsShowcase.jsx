import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

export default function ProjectsShowcase({ onOpenRegister }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 'ai-autonomy',
      title: 'Neural Vision & Autonomous Agents',
      category: 'ARTIFICIAL INTELLIGENCE',
      tag: 'Track 01 // Vision AI',
      description:
        'Next-generation edge intelligence, vision-language action models, and autonomous decision pipelines under constrained hardware.',
      metrics: '3 Keynote Demos • Hands-on Lab',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      accentColor: '#00acd7',
    },
    {
      id: 'robotics-manipulation',
      title: 'Robotic Kinematics & Manipulator Dynamics',
      category: 'ROBOTICS & HARDWARE',
      tag: 'Track 02 // Robotics',
      description:
        'Dynamic multi-axis robotic arms, ROS2 microcontrollers, inverse kinematics, and real-time obstacle avoidance.',
      metrics: 'Hardware Arena • Live Robotic Showcase',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
      accentColor: '#213ded',
    },
    {
      id: 'industry-automation',
      title: 'Smart Industry 4.0 & Cyber-Physical PLC',
      category: 'AUTOMATION',
      tag: 'Track 03 // Industrial IoT',
      description:
        'Intelligent automation networks, SCADA integrations, telemetry processing, and resilient distributed industrial infrastructure.',
      metrics: 'Industrial Testbed • Industry Mentor Sessions',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      accentColor: '#00b181',
    },
    {
      id: 'national-hackathon',
      title: 'InnovateX 24H National Hackathon',
      category: 'FLAGSHIP COMPETITION',
      tag: 'Track 04 // Hackathon',
      description:
        '24 hours of intense prototyping, problem-solving, and cross-functional engineering for prizes and mentorship.',
      metrics: '₹50,000+ Prize Pool • 24 Hours Non-Stop',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      accentColor: '#e6c82a',
    },
    {
      id: 'aerial-robotics',
      title: 'Autonomous Aerial Drones & Swarm Logic',
      category: 'AERIAL ROBOTICS',
      tag: 'Track 05 // Swarm Autonomy',
      description:
        'Quadrotor localization, LiDAR SLAM mapping, and cooperative decentralized swarm robotics in GPS-denied environments.',
      metrics: 'Aerial Flight Arena • Live Telemetry',
      image:
        'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
      accentColor: '#ff3700',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-36 bg-[#04060d] overflow-hidden">
      {/* Thermal Heatmap Gradient Accent in Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Play Signature 2-Column Grid: Vertical Title on Left, Project Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Iconic Gallery Play Vertical Title */}
          <div className="lg:col-span-4 text-left space-y-8 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SHOWCASE & TRACKS</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display text-white tracking-tight leading-[0.95]">
              Work <br />
              that <br />
              speaks <br />
              louder <br />
              than <br />
              words.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-sm">
              Discover the core tracks, hardware arenas, and competitive challenges engineered for IEEE InnovateX 2026.
            </p>

            {/* Navigation Buttons like Gallery Play */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                className="gp-button p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="gp-button p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400 ml-2">
                0{activeIndex + 1} / 0{projects.length}
              </span>
            </div>
          </div>

          {/* Right Column: Gallery Play Style 1:1 Aspect Ratio Listing Cards */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative aspect-square rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/15 scale-[1.01]'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {/* Background Visual */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
                      loading="lazy"
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Top Tag */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase text-white bg-black/60 border border-white/15 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom Content Header */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 space-y-2 text-left">
                      <div className="text-[11px] font-mono text-cyan-400">
                        {project.tag}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 font-sans opacity-90">
                        {project.description}
                      </p>
                    </div>

                    {/* Gallery Play Hover Overlay with Learn More & Arrow */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 bg-black/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono font-semibold text-cyan-400">
                          {project.metrics}
                        </span>
                        <div className="p-2.5 rounded-full bg-cyan-400 text-black">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="space-y-4 text-left">
                        <h4 className="text-2xl font-bold font-display text-white">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-300 font-sans leading-relaxed">
                          {project.description}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenRegister();
                          }}
                          className="gp-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
                        >
                          <span>Participate in Track</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
