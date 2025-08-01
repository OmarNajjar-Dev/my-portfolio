"use client";
import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number; // optional delay in ms
}

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          // add visible class with optional delay
          setTimeout(() => {
            ref.current?.classList.add("visible");
          }, delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-${direction}`}>
      {children}
    </div>
  );
}
