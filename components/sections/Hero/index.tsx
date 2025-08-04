// app/sections/Hero/index.tsx
import Image from "next/image";
import { Code2 as Code, PenLine, Mail } from "lucide-react";
import IconLink from "@/components/ui/IconLink";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { heroData } from "./data";
import Link from "next/link";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Code2: Code,
  PenLine: PenLine,
  Mail: Mail,
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-12 py-4 md:py-6 lg:py-8">
      {/* text column with fade-in-left animation */}
      <AnimateOnScroll direction="left">
        <div className="space-y-2">
          <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold">
            {heroData.title}
            {heroData.wavingHandIcon && (
              <Image
                src={heroData.wavingHandIcon}
                alt="Waving hand"
                width={32}
                height={32}
                className="inline-block animate-bounce transform rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            )}
          </h1>

          {/* description */}
          <p className="text-sm text-gray-800 leading-relaxed mb-5">
            {heroData.description}
          </p>

          {heroData.links && (
            <nav aria-label="Hero shortcuts">
              <ul className="flex flex-wrap gap-4">
                {heroData.links.map((link) => {
                  const IconComponent = iconMap[link.icon];
                  return (
                    <li key={link.href}>
                      <IconLink
                        href={link.href}
                        text={link.text}
                        icon={<IconComponent className="w-4 h-4" />}
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </AnimateOnScroll>

      {/* image column with fade-in-up animation */}
      <AnimateOnScroll direction="up" delay={200}>
        <figure className="shrink-0 self-center w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={300}
            height={300}
            priority
            className="w-full h-full rounded-full object-cover transition-all duration-300 hover:scale-110"
          />
        </figure>
      </AnimateOnScroll>
    </section>
  );
}
