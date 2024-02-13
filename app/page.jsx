"use client";

import Hero from "@/components/layout/Hero";
import Award from "@/components/layout/Award";
import Alternatives from "@/components/layout/Alternatives";
import HowItWorks from "@/components/layout/HowItWorks";
import Diet from "@/components/layout/Diet";

export default function Home() {
  return (
    <main>
      <Hero />
      <Award />
      <Alternatives />
      <HowItWorks />
      <Diet />
    </main>
  );
}
