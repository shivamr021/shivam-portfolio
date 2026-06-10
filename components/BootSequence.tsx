"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootSequence() {
  const [isLoading, setIsLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const sequence = [
    "[INITIATING PROTOCOLS...]",
    "[LOADING VECTOR EMBEDDINGS...]",
    "[ACCESSING PATHWAY...]",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Sequence timing logic
    const timer1 = setTimeout(() => setTextIndex(1), 400);
    const timer2 = setTimeout(() => setTextIndex(2), 800);
    const timer3 = setTimeout(() => setTextIndex(3), 1200);
    
    // Unmount component after 1.8 seconds
    const finish = setTimeout(() => setIsLoading(false), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
        >
          <div className="font-mono text-sm md:text-base text-[#34d399] flex flex-col items-center">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="tracking-widest uppercase font-bold"
            >
              {sequence[textIndex]}
            </motion.div>
            
            {/* Loading Bar */}
            <div className="mt-6 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8A2BE2] to-[#34d399]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}