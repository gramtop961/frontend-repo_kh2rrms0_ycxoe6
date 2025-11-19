import React from "react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8">
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            Ready to explore football data?
          </h3>
          <p className="text-slate-300 mt-2">
            Start with sample matches and player profiles. No signup required.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#sample"
              className="px-5 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:brightness-95"
            >
              View Samples
            </a>
            <a
              href="/"
              onClick={(e) => e.preventDefault()}
              className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
