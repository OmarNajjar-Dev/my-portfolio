import Link from "next/link";
import styles from "@/styles/effects.module.css";
import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AnimateOnScroll direction="up">
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="mx-auto max-w-[1200px] px-[5%] py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary text-lg">
                Omar Najjar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-stack web developer passionate about creating modern,
                user-friendly applications with cutting-edge technologies.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-base">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className={`${styles.navLink} text-sm text-gray-600 hover:text-primary transition-colors duration-200`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`${styles.navLink} text-sm text-gray-600 hover:text-primary transition-colors duration-200`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={`${styles.navLink} text-sm text-gray-600 hover:text-primary transition-colors duration-200`}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`${styles.navLink} text-sm text-gray-600 hover:text-primary transition-colors duration-200`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-base">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:najjar_omar@outlook.com"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="Send me an email"
                >
                  <Email className="w-4 h-4" />
                  <span>najjar_omar@outlook.com</span>
                </a>
                <a
                  href="https://github.com/OmarNajjar-Dev"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="Visit my GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-najjar-0a768933a"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="Visit my LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright and tech stack */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>© {currentYear} Omar Najjar. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Made with</span>
                <FaHeart className="w-3 h-3 text-red-500" />
                <span className="hidden md:inline">
                  using Next.js & Tailwind CSS
                </span>
              </div>

              {/* Tech stack badges */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </AnimateOnScroll>
  );
}
