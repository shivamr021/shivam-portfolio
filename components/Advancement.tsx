"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, ShieldCheck, Code2, Activity } from "lucide-react";

const milestones = [
  {
    year: "2023 — 2028",
    title: "Integrated M.Tech (Information Technology)",
    org: "IIPS, Devi Ahilya Vishwavidyalaya",
    icon: <GraduationCap className="w-5 h-5 text-[#8A2BE2]" />,
    desc: "Advancing through an intensive 5-year technical architecture program. Maintaining an 8.71 CGPA while actively deploying production-grade freelance systems.",
    metrics: ["8.71 CGPA", "Systems Architecture", "Applied AI"]
  },
  {
    year: "September 2025",
    title: "Top 8 — AI Agent Architect",
    org: "IBM SkillsBuild Project Showcase",
    icon: <Trophy className="w-5 h-5 text-[#DAA520]" />,
    desc: "Recognized globally in the top 8 teams for architecting KrishiMitra-AI, a bilingual multi-agent system addressing real-world agricultural intelligence.",
    metrics: ["AI Agents", "LangChain", "Global Recognition"]
  },
  {
    year: "2024 — 2025",
    title: "Enterprise AI & Cloud Foundations",
    org: "Google & IBM",
    icon: <ShieldCheck className="w-5 h-5 text-[#34d399]" />,
    desc: "Secured foundational enterprise certifications validating expertise in cloud deployment, data analytics, and applied generative AI workflows.",
    metrics: ["Google AI Essentials", "IBM Data Fundamentals", "GCP"]
  },
  {
    year: "Ongoing",
    title: "Algorithmic Problem Solving",
    org: "Competitive Programming",
    icon: <Code2 className="w-5 h-5 text-[#8A2BE2]" />,
    desc: "Consistently sharpening core computer science fundamentals and data structures to ensure optimal, highly efficient backend system design.",
    metrics: ["650+ DSA Solved", "Peak LeetCode 1565", "Top 30% Globally"]
  }
];

export default function Advancement() {
  return (
    <section className="py-24 relative z-10" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#8A2BE2]"></span>
            <p className="text-sm uppercase tracking-widest text-[#8A2BE2] font-bold">Sequence Progression</p>
            <span className="w-8 h-[2px] bg-[#8A2BE2]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Advancement Path</h2>
          <p className="text-lg text-zinc-400">
            The academic foundation and technical milestones driving my system architecture.
          </p>
        </div>

        <div className="relative pb-20">
          {/* Glowing Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#8A2BE2] via-[#DAA520] to-[#34d399] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[18px] md:left-1/2 w-5 h-5 rounded-full bg-[#0b0f1c] border-2 border-[#8A2BE2] md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-[#DAA520]" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="glass-panel p-6 md:p-8 rounded-2xl hover:border-[#8A2BE2]/40 transition-colors group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                            {milestone.icon}
                          </div>
                          <span className="text-xs font-bold text-[#DAA520] tracking-wider bg-[#DAA520]/10 px-3 py-1 rounded-full border border-[#DAA520]/20">
                            {milestone.year}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#8A2BE2] transition-colors">{milestone.title}</h3>
                        <p className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wide">{milestone.org}</p>
                        <p className="text-sm md:text-base text-zinc-300 mb-6 leading-relaxed">{milestone.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {milestone.metrics.map((metric, mIdx) => (
                            <span key={mIdx} className="text-xs font-mono text-zinc-300 bg-black/40 border border-white/10 px-2.5 py-1 rounded-md">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* GPT Inspiration: Current Focus / Active Node at the bottom of the timeline */}
          <div className="relative mt-24">
            <div className="absolute left-[18px] md:left-1/2 w-5 h-5 rounded-full bg-[#0b0f1c] border-2 border-[#34d399] md:-translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.5)]">
              <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            </div>

            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:mr-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-[#050816]/80 border border-[#34d399]/30 p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-[0_0_30px_rgba(52,211,153,0.1)]"
              >
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#34d399] animate-pulse" />
                    <h3 className="text-lg font-bold text-white tracking-wide">ACTIVE PROTOCOLS</h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Running</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">Applied AI & GenAI Systems</span>
                      <span className="text-[#34d399]">Executing</span>
                    </div>
                    <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#34d399]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">Data Structures & Algorithms</span>
                      <span className="text-[#DAA520]">Continuous</span>
                    </div>
                    <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#DAA520]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">AI / Backend Internship Acquisition</span>
                      <span className="text-[#34d399]">Scanning</span>
                    </div>
                    <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#34d399]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}