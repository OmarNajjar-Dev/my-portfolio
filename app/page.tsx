import "./globals.css";

import SkillsSection from "./sections/Skills";
import ContactSection from "./sections/Contact";
import HeroSection from "./sections/Hero";
import ProjectSection from "./sections/Projects";
import TestimonySection from "./sections/Testimony";

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
