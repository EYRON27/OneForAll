import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* bottom glow (behind content) - stronger and wider */}
      <div className="absolute left-0 right-0 bottom-0 h-[300px] blur-[64px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.95)_0%,_#7c3aed_10%,_rgba(124,58,237,0.95)_28%,_rgba(124,58,237,0.6)_48%,transparent_75%)] pointer-events-none z-5" />

      <div className="max-w-6xl mx-auto px-12 pt-36 pb-44 flex items-center gap-16 relative z-30">
        <section className="w-[360px] relative flex flex-col items-center justify-center">
          {/* layered vertical beam inside left column (core, purple mid, outer glow) */}
          <div className="absolute left-1/2 top-8 bottom-40 w-[80px] -translate-x-1/2 bg-white opacity-100 blur-[8px] pointer-events-none z-15" />
          <div className="absolute left-1/2 top-12 bottom-44 w-[180px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(124,58,237,1)_0%,rgba(140,60,240,0.9)_40%,rgba(255,255,255,0.95)_50%,rgba(140,60,240,0.9)_60%,rgba(124,58,237,1)_100%)] blur-[28px] pointer-events-none opacity-95 z-10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[300px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.95)_0%,rgba(34,12,53,0.85)_40%,transparent_80%)] blur-[48px] pointer-events-none opacity-80 z-5" />

          <div className="text-[9.5rem] leading-none font-extrabold text-[#ff7a2d] drop-shadow-[0_14px_6px_rgba(0,0,0,0.6)] font-montserrat z-30">TASK</div>
          <div className="text-[8.5rem] leading-none font-extrabold text-[#f6e7d8] drop-shadow-[0_28px_22px_rgba(0,0,0,0.65)] translate-y-2 font-montserrat z-30">PASS</div>

          <button className="mt-10 inline-flex items-center gap-3 border-2 rounded-xl px-6 py-3 text-lg font-semibold border-[#ff7a2d] text-[#ff7a2d] bg-transparent hover:bg-[#ff7a2d]/10 font-montserrat">
            <span>Get Started</span>
            <span className="ml-2 text-xl">→</span>
          </button>
        </section>

        <aside className="w-1/2 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-[#e6d5c0]">Qui fugit sunt est dicta dolore 33 maiores</h2>
        </aside>
      </div>

      {/* removed white rounded bottom panel to match design */}
    </section>
  );
};

export default Hero;