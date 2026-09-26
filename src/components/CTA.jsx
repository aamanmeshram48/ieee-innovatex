import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Sparkles, Shield, User, Mail, School } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export default function CTA({ isOpen, onClose, onOpen }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: 'MITS Gwalior',
    isIeeeMember: 'yes',
    interest: 'all',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      institution: 'MITS Gwalior',
      isIeeeMember: 'yes',
      interest: 'all',
    });
    onClose();
  };

  return (
    <>
      {/* Registration Section in Page */}
      <section id="register" className="relative py-24 sm:py-32 bg-[#04060d]/60 backdrop-blur-[2px] border-t border-white/5 scroll-mt-20">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] radial-glow-cyan pointer-events-none opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <span>// ADMISSIONS OPEN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Ready to <span className="text-cyan-400">Innovate</span>?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Your next idea could be the beginning of something bigger.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-mono text-sm uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-500">
            Free registration for student delegates • Certificates awarded by IEEE IAS & RAS Chapters
          </div>
        </div>
      </section>

      {/* Interactive Registration Modal (Task 1 Placeholder Form) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-slate-950 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Ambient Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 radial-glow-cyan pointer-events-none opacity-30"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-colors"
              aria-label="Close registration dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Header */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    DELEGATE REGISTRATION PASS
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {EVENT_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {EVENT_INFO.venueShort} • {EVENT_INFO.datePlaceholder}
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600 font-sans"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300">
                    Student / Professional Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="alex@mitsgwalior.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600 font-sans"
                    />
                  </div>
                </div>

                {/* Institution */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300">
                    Institution / University
                  </label>
                  <div className="relative">
                    <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-sans"
                    />
                  </div>
                </div>

                {/* IEEE Member radio */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-300">
                    Are you an IEEE Member?
                  </label>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer ${formData.isIeeeMember === 'yes' ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'}`}>
                      <input
                        type="radio"
                        name="ieeeMember"
                        value="yes"
                        checked={formData.isIeeeMember === 'yes'}
                        onChange={(e) => setFormData({ ...formData, isIeeeMember: e.target.value })}
                        className="text-cyan-400 focus:ring-0"
                      />
                      <span>Yes (Member)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer ${formData.isIeeeMember === 'no' ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'}`}>
                      <input
                        type="radio"
                        name="ieeeMember"
                        value="no"
                        checked={formData.isIeeeMember === 'no'}
                        onChange={(e) => setFormData({ ...formData, isIeeeMember: e.target.value })}
                        className="text-cyan-400 focus:ring-0"
                      />
                      <span>Non-Member</span>
                    </label>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CONFIRM REGISTRATION →</span>
                  </button>
                  <p className="text-[11px] font-mono text-center text-slate-500 mt-2">
                    * Interactive placeholder form for Technical Task 1.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    REGISTRATION CONFIRMED
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">
                    Welcome, {formData.fullName}!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto pt-1 font-sans">
                    A confirmation pass has been simulated for <span className="text-cyan-300">{formData.email}</span>. See you at MITS Gwalior!
                  </p>
                </div>

                {/* Simulated Badge */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 text-left font-mono text-xs space-y-1.5">
                  <div className="text-slate-400 flex justify-between">
                    <span>PASS TIER:</span>
                    <span className="text-white font-bold">{formData.isIeeeMember === 'yes' ? 'IEEE DELEGATE' : 'STUDENT DELEGATE'}</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>EVENT:</span>
                    <span className="text-white font-bold">{EVENT_INFO.acronym}</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>DATE:</span>
                    <span className="text-cyan-400 font-bold">{EVENT_INFO.datePlaceholder}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
