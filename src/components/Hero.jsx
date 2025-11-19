import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm mb-6">
          <span>⚽ Live-ready dataset platform</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Football Intelligence for Matches and Players
        </h1>
        <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
          Explore rich match timelines, team performance, and player profiles in one place. Built for analysts, creators, and fans.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-500 text-emerald-950 font-semibold shadow-lg shadow-emerald-500/20 hover:brightness-110 transition"
          >
            Get Started
          </a>
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition"
          >
            Watch Demo
          </a>
        </div>

        {/* hero cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <div className="text-2xl">📊</div>
            <h3 className="mt-2 font-semibold text-white">Match Insights</h3>
            <p className="text-slate-300/80 text-sm">Possession, xG, shots, and momentum in clean, comparable views.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <div className="text-2xl">🧭</div>
            <h3 className="mt-2 font-semibold text-white">Event Timelines</h3>
            <p className="text-slate-300/80 text-sm">Minute-by-minute passes, shots, duels, cards, and substitutions.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <div className="text-2xl">🧑‍💻</div>
            <h3 className="mt-2 font-semibold text-white">Analyst Friendly</h3>
            <p className="text-slate-300/80 text-sm">Clean API and ready-to-use CSV exports for deeper modeling.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
