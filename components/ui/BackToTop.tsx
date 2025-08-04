"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50 cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 text-gray-700" />
    </button>
  ) : null;
}
