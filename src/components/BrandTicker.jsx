import React from 'react';
import { ASSETS } from '../assets';

export default function BrandTicker() {
  const partners = [
    { name: 'IEEE Global', type: 'Sponsor Organization', logo: ASSETS.ieee.src },
    { name: 'IEEE IAS Chapter', type: 'Industry Applications', logo: ASSETS.ias.src },
    { name: 'IEEE RAS Chapter', type: 'Robotics & Automation', logo: ASSETS.ras.src },
    { name: 'MITS Gwalior', type: 'Host Institution', text: 'MITS GWALIOR' },
    { name: 'IEEE Madhya Pradesh Section', type: 'Section Partner', text: 'IEEE MP SECTION' },
    { name: 'Robotics Lab', type: 'Advanced Research', text: 'ROBOTICS & AI LAB' },
    { name: 'Industry 4.0 Center', type: 'Automation Hub', text: 'INDUSTRY 4.0 LAB' },
    { name: 'Student Branch', type: 'Community', text: 'IEEE SB MITS' },
  ];

  // Duplicate for seamless loop
  const tickerItems = [...partners, ...partners, ...partners];

  return (
    <div className="w-full py-6 sm:py-8 border-y border-white/5 bg-[#060810]/60 backdrop-blur-md overflow-hidden relative select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#04060d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#04060d] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {tickerItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-6 sm:px-8 group cursor-default"
          >
            {item.logo ? (
              <div className="h-7 sm:h-9 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
                {item.text}
              </div>
            )}

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-mono text-slate-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                {item.type}
              </span>
            </div>

            <span className="text-slate-700 text-xs font-mono ml-4 select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
