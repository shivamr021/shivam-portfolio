import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import RepoMindShowcase from "@/components/RepoMindShowcase";
import Advancement from "@/components/Advancement";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <RepoMindShowcase />
      <WhatIBuild />
      <Advancement />
      <Contact />
    </main>
  );
}