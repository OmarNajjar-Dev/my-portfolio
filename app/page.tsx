import "./globals.css";

import SkillsSection from "@/components/sections/Skills";
import ContactSection from "@/components/sections/Contact";
import HeroSection from "@/components/sections/Hero";
import ProjectSection from "@/components/sections/Projects";
import TestimonySection from "@/components/sections/Testimony";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <TestimonySection />
      <ContactSection />
    </>
  );
}
