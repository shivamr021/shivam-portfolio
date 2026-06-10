"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to trigger the glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0b0f1c]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-white">
          Shivam<span className="text-[#8A2BE2]">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Systems</a>
          <a href="#experience" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:shivamrathod145@gmail.com" 
            className="text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#DAA520]/50 px-5 py-2.5 rounded-lg transition-all duration-300"
          >
            Initiate Comm
          </a>
        </div>
        
      </div>
    </motion.header>
  );
}