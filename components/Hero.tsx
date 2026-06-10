"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // Reduced min-height and padding to keep it above the fold
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-8 overflow-hidden">
      <div className="glow-top-left" />
      <div className="glow-middle-right" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full glass-panel border border-[#8A2BE2]/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-zinc-300 font-semibold">
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* Adjusted text sizing slightly for better fit */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Architect of <br />
            <span className="text-gradient">Digital Pathways.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed">
            I specialize in backend architecture and applied AI. From extracting structure out of complex data to deploying production-ready intelligence, I build systems that solve real-world workflows.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <a href="#projects" className="glass-panel hover:bg-white/10 transition-all duration-300 px-8 py-3.5 rounded-xl text-white font-medium flex items-center gap-2 group border-[#8A2BE2]/50 hover:border-[#DAA520]/50 hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] cursor-pointer">
              Explore Systems
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl text-zinc-300 font-medium flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Terminal className="w-5 h-5" />
              View Resume
            </a>
          </motion.div>

          {/* Tightened margin and updated copy for recruiter readability */}
          <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">4+</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Production Systems</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">14★</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">GitHub Stars</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">650+</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">DSA Solved</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#DAA520]">100%</p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Delivery Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}