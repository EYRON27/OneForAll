import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* bottom glow (behind content) - stronger and wider */}
      <div className="absolute left-0 right-0 bottom-0 h-[300px] blur-[64px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.95)_0%,_#7c3aed_10%,_rgba(124,58,237,0.95)_28%,_rgba(124,58,237,0.6)_48%,transparent_75%)] pointer-events-none z-5" />

      {/* Vertical beam from top to bottom - positioned at left side where TASKPASS is */}
      <div className="absolute left-[22%] top-0 bottom-0 w-[80px] -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.95)_90%,transparent_100%)] pointer-events-none z-5 blur-[2px]" />
      <div className="absolute left-[22%] top-0 bottom-0 w-[180px] -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(186,120,255,0.8)_8%,rgba(160,90,255,0.9)_50%,rgba(186,120,255,0.8)_92%,transparent_100%)] blur-[40px] pointer-events-none opacity-95 z-5" />
      <div className="absolute left-[22%] top-0 bottom-0 w-[280px] -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(124,58,237,0.6)_10%,rgba(140,60,240,0.7)_50%,rgba(124,58,237,0.6)_90%,transparent_100%)] blur-[64px] pointer-events-none opacity-85 z-5" />

      <div className="relative z-30 min-h-screen flex items-center">
        <section className="absolute left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="text-[9.5rem] leading-none font-extrabold text-[#ff7a2d] drop-shadow-[0_14px_6px_rgba(0,0,0,0.6)] font-montserrat relative z-20">TASK</div>
          <div className="text-[8.5rem] leading-none font-extrabold text-[#f6e7d8] drop-shadow-[0_28px_22px_rgba(0,0,0,0.65)] translate-y-2 font-montserrat relative z-20">PASS</div>

          <button className="mt-10 inline-flex items-center gap-3 border-2 rounded-xl px-6 py-3 text-lg font-semibold border-[#ff7a2d] text-[#ff7a2d] bg-transparent hover:bg-[#ff7a2d]/10 font-montserrat relative z-20">
            <span>Get Started</span>
            <span className="ml-2 text-xl">→</span>
          </button>
        </section>

        <aside className="absolute left-[45%] top-1/2 -translate-y-1/2">
          <h2 className="text-2xl font-semibold text-[#e6d5c0]">Qui fugit sunt est dicta dolore 33 maiores</h2>
        </aside>
      </div>

      {/* removed white rounded bottom panel to match design */}
    </section>
  );
};

export default Hero;