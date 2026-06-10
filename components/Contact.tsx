"use client";

import { useState } from "react";
import { Send, ExternalLink, Mail } from "lucide-react";

// --- Custom SVG Brand Icons to replace removed Lucide brand icons ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
// ----------------------------------------------------------------------

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-[2px] bg-[#34d399]"></span>
                <p className="text-sm uppercase tracking-widest text-[#34d399] font-bold">Initiate Comm</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">System Contact</h2>
              <p className="text-lg text-zinc-400">
                Currently open for freelance architecture and backend systems development. I usually respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required 
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8A2BE2] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-4 mt-2">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? "Transmitting..." : "Send Data"}
                  <Send className="w-4 h-4" />
                </button>
                
                {status === "success" && <span className="text-[#34d399] text-sm font-medium">Transmission Successful.</span>}
                {status === "error" && <span className="text-red-400 text-sm font-medium">Transmission Failed. Try again.</span>}
              </div>
            </form>
          </div>

          {/* Right Column: Elsewhere & Footer */}
          <div className="lg:pl-10 flex flex-col justify-between h-full pt-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Elsewhere</h3>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:shivamrathod145@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-colors">
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-[#DAA520]/50 transition-colors">
                      <Mail className="w-4 h-4 group-hover:text-[#DAA520]" />
                    </div>
                    <span className="font-medium">shivamrathod145@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shivamr021" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-colors">
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-[#8A2BE2]/50 transition-colors">
                      <GithubIcon className="w-4 h-4 group-hover:text-[#8A2BE2]" />
                    </div>
                    <span className="font-medium">github.com/shivamr021</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shivamrathod021" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-colors">
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-[#34d399]/50 transition-colors">
                      <LinkedinIcon className="w-4 h-4 group-hover:text-[#34d399]" />
                    </div>
                    <span className="font-medium">linkedin.com/in/shivamrathod021</span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/shivamr017" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-colors">
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-white/50 transition-colors">
                      <XIcon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">x.com/shivamr017</span>
                  </a>
                </li>
                <li>
                  <a href="https://codolio.com/profile/shivamr021/card" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white group transition-colors">
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:border-[#DAA520]/50 transition-colors">
                      <ExternalLink className="w-4 h-4 group-hover:text-[#DAA520]" />
                    </div>
                    <span className="font-medium">Codolio Profile</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-20 pt-8 border-t border-white/10 text-zinc-500 text-sm flex flex-col md:flex-row items-center justify-between">
              <p>© {new Date().getFullYear()} Shivam Rathod. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Architected in Khargone, MP.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}