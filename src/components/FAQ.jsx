import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function FAQ({ onOpenRegister }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Who is eligible to participate in IEEE InnovateX 2026?',
      answer:
        'IEEE InnovateX 2026 is open to undergraduate and postgraduate students from all engineering disciplines, universities, and polytechnics. Both IEEE members and non-IEEE members are welcome to attend and compete.',
      tag: 'ELIGIBILITY',
    },
    {
      question: 'Is there a registration fee for the summit & competitions?',
      answer:
        'General admission and keynote sessions have free entry upon approved registration. Specific hands-on workshops and competitive tracks (e.g. RoboWars or 24H Hackathon) may require team kit fees with special discounts for active IEEE IAS & RAS members.',
      tag: 'REGISTRATION',
    },
    {
      question: 'Can I participate as a solo builder or do I need a team?',
      answer:
        'You can register individually for keynotes, speaker sessions, and research paper presentations. For the Hackathon and Robotics Arena challenges, teams of 2 to 4 members are encouraged. Solo participants can also join our team-formation mixer.',
      tag: 'TEAMS',
    },
    {
      question: 'Will participants receive certificates and prize awards?',
      answer:
        'Yes! All verified attendees receive an official Certificate of Participation from IEEE IAS & IEEE RAS. Winning teams across hackathons and hardware showcases receive cash prizes (pool of ₹50,000+), trophies, and incubation mentorship.',
      tag: 'REWARDS',
    },
    {
      question: 'Where will the physical events take place?',
      answer:
        'The summit will be hosted physically at the Madhav Institute of Technology & Science (MITS) Campus in Gwalior, Madhya Pradesh. Specific room and auditorium allocations will be emailed to registered attendees.',
      tag: 'VENUE',
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-36 bg-[#04060d] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>05 // FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            Everything you need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              to know before joining.
            </span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/60 border-cyan-400/40 shadow-xl shadow-cyan-500/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-semibold">
                      {faq.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2.5 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cyan-400 text-black rotate-180'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-slate-300 font-sans text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-display">
              Have another question?
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Reach out directly to the IEEE IAS × RAS organizing committee.
            </p>
          </div>

          <a
            href="#contact"
            className="gp-button inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
          >
            <span>Ask in Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
