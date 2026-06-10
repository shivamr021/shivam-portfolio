"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Network, Bug, Workflow, ArrowRight } from "lucide-react";

const features = {
  chat: {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Q&A Chat",
    desc: "Ask anything. Get answers cited to exact files and lines.",
    query: "what's the project about?",
    results: [
      { file: "ASSISTANT · 5 CHUNKS USED", match: "The project appears to be a resume builder and reviewer. It uses AI suggestions to provide feedback on resumes (reviewer\\ai_suggestions.py at lines 14-59 and 64-97). The project also generates PDF resumes (builder\\pdf_generator.py at lines 10-134)." }
    ]
  },
  dependency: {
    icon: <Network className="w-5 h-5" />,
    title: "Dependency Graph",
    desc: "Interactive map of every module, import, and cycle.",
    query: "Analyzing Resume-Forge repository graph...",
    results: [
      { file: "GRAPH READY", match: "Nodes: 6 | Edges: 5 | Cycles: 0" },
      { file: "app.py", match: "→ builder\\form_handler.py" },
      { file: "app.py", match: "→ reviewer\\ai_suggestions.py" },
      { file: "app.py", match: "→ reviewer\\resume_parser.py" }
    ]
  },
  bugs: {
    icon: <Bug className="w-5 h-5" />,
    title: "Bug Report",
    desc: "LLM-surfaced issues ranked by severity with fixes.",
    query: "Scanning repository for vulnerabilities and logic flaws...",
    results: [
      { file: "🚨 HIGH SEVERITY · reviewer\\ai_suggestions.py:64", match: "Issue: Potential security vulnerability due to missing input validation. \nFix: Validate the 'resume_text' input to prevent potential security vulnerabilities." },
      { file: "⚠️ MEDIUM SEVERITY · app.py:34", match: "Issue: Broad exception handling can mask bugs. \nFix: Handle specific exceptions instead of catching all." }
    ]
  },
  architecture: {
    icon: <Workflow className="w-5 h-5" />,
    title: "Architecture",
    desc: "Auto-generated Mermaid diagram of the system.",
    query: "Generating high-level system overview...",
    results: [
      { file: "SYSTEM LAYOUT · Rendered Live", match: "[Entry Point] app.py → [API/Routes] api → Form Handler" },
      { file: "CORE LOGIC", match: "Form Handler invokes → PDF Generator, AI Suggestions, ATS Scoring." }
    ]
  }
};

export default function RepoMindShowcase() {
  const [activeTab, setActiveTab] = useState<keyof typeof features>("chat");

  return (
    <section className="py-10 relative z-10 scroll-mt-26" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - Tightened margins */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#8A2BE2]"></span>
            <p className="text-sm uppercase tracking-widest text-[#8A2BE2] font-bold">Flagship System</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Codebase.<span className="text-[#34d399]">Intel</span></h2>
          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
            From <span className="text-[#34d399]">git clone</span> to deep understanding. RepoMind combines vector embeddings with LLM reasoning to transform repositories into self-documenting knowledge bases.
          </p>
        </div>

        {/* Interactive UI Container */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls - Left side */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {(Object.keys(features) as Array<keyof typeof features>).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex flex-col gap-1 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive 
                      ? "glass-panel border-[#8A2BE2]/50 text-white shadow-[0_0_20px_rgba(138,43,226,0.15)]" 
                      : "bg-[#0b0f1c] border border-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isActive ? "text-[#DAA520]" : "text-zinc-500"}`}>
                    {features[key].icon}
                    <span className="font-bold text-base">{features[key].title}</span>
                  </div>
                  <p className={`text-xs md:text-sm ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
                    {features[key].desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Terminal/Display - Right side */}
          <div className="lg:col-span-8 glass-panel rounded-2xl border-white/10 overflow-hidden shadow-2xl relative min-h-[320px] flex flex-col">
            <div className="bg-[#050816]/90 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-[10px] md:text-xs font-mono text-zinc-500 tracking-wider uppercase">repomind_engine_v2.sh</p>
            </div>

            <div className="p-5 md:p-6 font-mono flex-grow bg-[#0b0f1c]/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex gap-3 text-zinc-400 text-sm mb-6">
                    <span className="text-[#34d399]">YOU &gt;</span>
                    <span className="text-white font-semibold">{features[activeTab].query}</span>
                  </div>

                  <div className="space-y-4">
                    {features[activeTab].results.map((result, idx) => (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        key={idx} 
                        className="bg-black/60 border border-white/5 rounded-xl p-4"
                      >
                        <p className="text-[11px] md:text-xs font-bold text-[#DAA520] mb-2 tracking-wide">{result.file}</p>
                        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{result.match}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}