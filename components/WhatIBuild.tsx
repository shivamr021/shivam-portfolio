"use client";

import { motion } from "framer-motion";
import { Network, Server, Bot, Combine, TerminalSquare, Sprout } from "lucide-react";

const projects = [
  {
    title: "NetScope Pro",
    role: "System & Security",
    desc: "Real-time network monitoring platform with deep packet inspection, concurrent capture, and SYN flood detection.",
    icon: <Network className="w-6 h-6 text-[#DAA520]" />,
    tags: ["Python", "Scapy", "Traffic Analytics", "Threat Detection"]
  },
  {
    title: "The Missing Fit",
    role: "Full Stack Infrastructure",
    desc: "Production-ready rental platform. Architected the Django backend, inventory workflows, and Supabase integration.",
    icon: <Server className="w-6 h-6 text-[#8A2BE2]" />,
    tags: ["Django", "Supabase", "Cloudinary", "REST API"]
  },
  {
    title: "Resume Forge",
    role: "AI Integration",
    desc: "Semantic ATS scoring engine utilizing local NLP embeddings and Gemini to analyze skill-gaps and optimize resumes.",
    icon: <Bot className="w-6 h-6 text-[#34d399]" />,
    tags: ["Streamlit", "SentenceTransformers", "KeyBERT", "Gemini"]
  },
  {
    title: "FieldLens",
    role: "Backend & Automation",
    desc: "Telecom workflow orchestrator. Built a bilingual WhatsApp pipeline with computer vision validation for field techs.",
    icon: <Combine className="w-6 h-6 text-[#DAA520]" />,
    tags: ["FastAPI", "Twilio", "MongoDB", "Event-Driven"]
  },
  {
    title: "KrishiMitra AI",
    role: "Applied ML",
    desc: "Bilingual AI chatbot for farmers featuring a custom TensorFlow pest diagnosis model with a Gemini Vision fallback.",
    icon: <Sprout className="w-6 h-6 text-[#8A2BE2]" />,
    tags: ["TensorFlow", "FastAPI", "Computer Vision", "Hugging Face"]
  },
  {
    title: "Local Agents Hub",
    role: "Open Source",
    desc: "A suite of local LLM agents (RAG, Web Scraping, Voice) built entirely without cloud APIs. 14+ GitHub Stars.",
    icon: <TerminalSquare className="w-6 h-6 text-[#34d399]" />,
    tags: ["LangChain", "Ollama", "FAISS", "Local LLMs"]
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#DAA520]"></span>
            <p className="text-sm uppercase tracking-widest text-[#DAA520] font-bold">Production Systems</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Deployed Architecture</h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            A selection of freelance contracts and open-source systems engineered for scale, automation, and real-world utility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-panel p-6 rounded-2xl flex flex-col group hover:border-[#8A2BE2]/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  {project.icon}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-1 rounded">
                  {project.role}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A2BE2] transition-colors">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-mono text-zinc-300 bg-black/40 border border-white/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}