import React from "react";

const features = [
  {
    title: "Matches",
    emoji: "🏟️",
    points: [
      "Team vs team dashboards",
      "xG, shots, passes, PPDA",
      "Shot maps & momentum",
    ],
  },
  {
    title: "Players",
    emoji: "🧑‍🎤",
    points: [
      "Profiles & career history",
      "Per 90 metrics & radars",
      "Similarity search",
    ],
  },
  {
    title: "Data",
    emoji: "🗂️",
    points: [
      "Events, tracking, models",
      "CSV & JSON export",
      "Public API access",
    ],
  },
  {
    title: "Platform",
    emoji: "🧱",
    points: [
      "Saved views & compare",
      "Shareable links",
      "Dark mode by default",
    ],
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(16,185,129,0.06))] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          What you can explore
        </h2>
        <p className="text-slate-300 text-center mt-2 max-w-2xl mx-auto">
          Built for scouting, analysis, and content creation. Everything is fast, searchable, and exportable.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-2 font-semibold text-white">{f.title}</h3>
              <ul className="mt-2 space-y-1 text-slate-300/90 text-sm">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
