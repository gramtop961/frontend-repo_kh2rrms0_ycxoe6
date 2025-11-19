import React, { useEffect, useState } from "react";

const base = import.meta.env.VITE_BACKEND_URL || "";

const SampleData = () => {
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        setLoading(true);
        setError("");
        const [m, p] = await Promise.all([
          fetch(`${base}/api/sample/matches`).then((r) => r.json()),
          fetch(`${base}/api/sample/players`).then((r) => r.json()),
        ]);
        setMatches(m.items || []);
        setPlayers(p.items || []);
      } catch (e) {
        setError("Unable to load samples right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchSamples();
  }, []);

  return (
    <section id="sample" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-white text-2xl font-bold text-center">Sample Data</h3>
        <p className="text-slate-300 text-center mt-2">
          A quick taste of match and player entries returned by the API.
        </p>

        <div className="mt-8">
          {loading && (
            <div className="text-center text-slate-300">Loading samples…</div>
          )}
          {error && (
            <div className="text-center text-rose-300">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <span>🏟️</span> Matches
                </h4>
                <ul className="mt-3 space-y-3">
                  {matches.map((m) => (
                    <li key={m.id} className="text-slate-300/90 text-sm">
                      <div className="font-medium text-white/90">
                        {m.home_team} vs {m.away_team} — {m.competition}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {m.date} • {m.venue} • Score: {m.score}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <span>🧑‍🎤</span> Players
                </h4>
                <ul className="mt-3 space-y-3">
                  {players.map((p) => (
                    <li key={p.id} className="text-slate-300/90 text-sm">
                      <div className="font-medium text-white/90">
                        {p.name} — {p.position}
                      </div>
                      <div className="text-slate-400 text-xs">
                        Age {p.age} • Club: {p.club} • Nation: {p.nation}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SampleData;
