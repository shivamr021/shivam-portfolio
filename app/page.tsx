import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import CodebaseIntelligenceShowcase from "@/components/CodebaseIntelligence";
import Advancement from "@/components/Advancement";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CodebaseIntelligenceShowcase />
      <WhatIBuild />
      <Advancement />
      <Contact />
    </main>
  );
}