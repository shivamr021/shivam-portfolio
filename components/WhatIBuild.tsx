"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Network, Server, Bot, Combine, TerminalSquare, Sprout, ExternalLink } from "lucide-react";

// --- Custom SVG Icon ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const projects = [
  {
    title: "Resume Forge",
    role: "AI Integration",
    class: "Freelance Contract",
    classColor: "text-[#DAA520] bg-[#DAA520]/10 border-[#DAA520]/20",
    desc: "AI-powered resume optimization platform using Streamlit, local NLP embeddings, and Gemini for semantic ATS scoring.",
    highlights: [
      "Hybrid embedding + Gemini evaluation pipeline",
      "Automated ATS-friendly PDF generation"
    ],
    icon: <Bot className="w-6 h-6 text-[#34d399]" />,
    tags: ["Streamlit", "SentenceTransformers", "KeyBERT", "Gemini"],
    links: { live: "https://resume-forge-ai.streamlit.app/" }
  },
  {
    title: "KrishiMitra AI",
    role: "Applied ML",
    class: "Hackathon Product",
    classColor: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20",
    desc: "Multilingual agricultural system integrating a custom TensorFlow disease model with a Gemini Vision fallback, deployed via WhatsApp.",
    highlights: [
      "Real-time weather & market price orchestration",
      "Hybrid computer vision + LLM inference pipeline"
    ],
    icon: <Sprout className="w-6 h-6 text-[#8A2BE2]" />,
    tags: ["FastAPI", "WhatsApp/Twilio", "TensorFlow", "Hugging Face"],
    links: { github: "https://github.com/shivamr021/KrishiMitra-AI", live: "https://krishi-mitra-dev-ai.vercel.app/" }
  },
  {
    title: "FieldLens",
    role: "Backend & Automation",
    class: "Freelance Contract",
    classColor: "text-[#DAA520] bg-[#DAA520]/10 border-[#DAA520]/20",
    desc: "Automation-first backend for telecom field verification, orchestrating technician tasks via a structured, bilingual WhatsApp pipeline.",
    highlights: [
      "14-step automated verification via Twilio",
      "Automated blur detection & MongoDB sync"
    ],
    icon: <Combine className="w-6 h-6 text-[#DAA520]" />,
    tags: ["FastAPI", "Twilio", "MongoDB", "Event-Driven"]
  },
  {
    title: "Local Agents Hub",
    role: "Open Source",
    class: "Open Source",
    classColor: "text-[#8A2BE2] bg-[#8A2BE2]/10 border-[#8A2BE2]/20",
    desc: "A suite of local LLM agents (RAG, Web Scraping, Voice) built entirely without cloud APIs. 14+ GitHub Stars.",
    highlights: [
      "Fully local FAISS vector retrieval",
      "Offline LangChain + Ollama agentic workflows"
    ],
    icon: <TerminalSquare className="w-6 h-6 text-[#34d399]" />,
    tags: ["LangChain", "Ollama", "FAISS", "Local LLMs"],
    links: { github: "https://github.com/shivamr021/ollama-langchain-agents" }
  },
  {
    title: "The Missing Fit",
    role: "Full Stack Infrastructure",
    class: "Freelance Contract",
    classColor: "text-[#DAA520] bg-[#DAA520]/10 border-[#DAA520]/20",
    desc: "Production-ready rental platform. Architected the Django backend and enhanced the frontend UI/UX for seamless full-stack workflows.",
    highlights: [
      "Django inventory & Supabase/Cloudinary sync",
      "Custom frontend integration & feature expansion"
    ],
    icon: <Server className="w-6 h-6 text-[#8A2BE2]" />,
    tags: ["Django", "Supabase", "React", "REST API"],
    links: { live: "https://themissingfit.vercel.app/" }
  },
  {
    title: "NetScope Pro",
    role: "System & Security",
    class: "Freelance Contract",
    classColor: "text-[#DAA520] bg-[#DAA520]/10 border-[#DAA520]/20",
    desc: "Real-time network monitoring and forensic system with deep packet inspection and a local Streamlit dashboard for traffic visualization.",
    highlights: [
      "Concurrent PCAP extraction & DNS analysis",
      "IPv4/IPv6 SYN flood anomaly detection"
    ],
    icon: <Network className="w-6 h-6 text-[#DAA520]" />,
    tags: ["Python", "Scapy", "Streamlit", "Threat Detection"]
  },
];

export default function WhatIBuild() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              // 3D Tilt Effect
              whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
              whileTap={{ scale: 0.98 }}
              // Handle hover/active state logic together
              onHoverStart={() => setActiveCard(idx)}
              onHoverEnd={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === idx ? null : idx)}
              className={`glass-panel p-6 rounded-2xl flex flex-col transition-all duration-500 overflow-hidden relative cursor-pointer border
                ${activeCard === idx ? "border-[#8A2BE2]/50 shadow-[0_0_25px_rgba(138,43,226,0.2)]" : "border-white/10"}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-3 rounded-lg bg-white/5">{project.icon}</div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border ${project.classColor}`}>
                    {project.class}
                  </span>
                  {project.links && (
                    <div className="flex gap-2">
                       {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:text-[#8A2BE2] transition-colors"><GithubIcon className="w-4 h-4" /></a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:text-[#DAA520] transition-colors"><ExternalLink className="w-4 h-4" /></a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{project.desc}</p>
              </div>

              {/* Bullet points logic */}
              <div className="mt-auto relative h-[60px] z-10">
                <div className={`absolute inset-0 flex flex-wrap gap-2 transition-all duration-300 ${activeCard === idx ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-zinc-300 bg-black/40 border border-white/10 px-2 py-1 rounded-md h-fit">{tag}</span>
                  ))}
                </div>
                <div className={`absolute inset-0 transition-all duration-300 flex flex-col justify-center ${activeCard === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <ul className="space-y-1.5 border-l-2 border-[#8A2BE2]/50 pl-3">
                    {project.highlights.map((h, i) => <li key={i} className="text-xs text-zinc-300 font-medium leading-snug">{h}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}