import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import SampleData from "./components/SampleData";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl">⚽</span>
            <span className="font-semibold text-white">Soccer Data</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/80 hover:text-white">Features</a>
            <a href="#sample" className="text-white/80 hover:text-white">Samples</a>
            <a href="/" onClick={(e)=>e.preventDefault()} className="text-white/80 hover:text-white">Docs</a>
          </nav>
          <a href="#sample" className="px-3 py-1.5 rounded-lg bg-emerald-500 text-emerald-950 text-sm font-semibold">Try it</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <SampleData />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Soccer Data. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="/" onClick={(e)=>e.preventDefault()} className="hover:text-white">Privacy</a>
            <a href="/" onClick={(e)=>e.preventDefault()} className="hover:text-white">Terms</a>
            <a href="/" onClick={(e)=>e.preventDefault()} className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
