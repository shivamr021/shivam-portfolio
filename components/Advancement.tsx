"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, ShieldCheck, Code2 } from "lucide-react";

const milestones = [
  {
    year: "2023 — 2028",
    title: "Integrated M.Tech (Information Technology)",
    org: "IIPS, Devi Ahilya Vishwavidyalaya",
    icon: <GraduationCap className="w-5 h-5 text-[#8A2BE2]" />,
    desc: "Currently advancing through an intensive 5-year technical program. Maintaining an 8.71 CGPA while actively building production-grade freelance systems.",
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
        
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#8A2BE2]"></span>
            <p className="text-sm uppercase tracking-widest text-[#8A2BE2] font-bold">Sequence Progression</p>
            <span className="w-8 h-[2px] bg-[#8A2BE2]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Advancement Path</h2>
          <p className="text-lg text-zinc-400">
            The academic foundation and technical milestones driving my system architecture.
          </p>
        </div>

        <div className="relative">
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

          <div className="space-y-12">
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
                      className="glass-panel p-6 rounded-2xl hover:border-[#8A2BE2]/40 transition-colors group relative overflow-hidden"
                    >
                      {/* Subtle hover glow inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-white/5">
                            {milestone.icon}
                          </div>
                          <span className="text-xs font-mono text-[#DAA520] tracking-wider bg-[#DAA520]/10 px-2 py-1 rounded">
                            {milestone.year}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#8A2BE2] transition-colors">{milestone.title}</h3>
                        <p className="text-sm text-zinc-300 font-medium mb-3">{milestone.org}</p>
                        <p className="text-sm text-zinc-400 mb-5 leading-relaxed">{milestone.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {milestone.metrics.map((metric, mIdx) => (
                            <span key={mIdx} className="text-[11px] font-mono text-zinc-300 bg-black/40 border border-white/10 px-2 py-1 rounded-md">
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

        </div>
      </div>
    </section>
  );
}