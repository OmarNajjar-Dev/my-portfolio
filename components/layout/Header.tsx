import Link from "next/link";
import styles from "@/styles/effects.module.css";
import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function Header() {
  return (
    <AnimateOnScroll direction="left">
      <header className="flex justify-between items-center mx-auto max-w-[1200px] pt-[1rem] pb-6 px-[5%]">
        {/* Website logo or name */}
        <div>
          <Link
            href="#home"
            aria-label="Go to top"
            className="font-semibold text-primary text-lg md:text-xl"
          >
            Omar Najjar
          </Link>
        </div>

        {/* Navigation links */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://github.com/OmarNajjar-Dev"
                className={`${styles.navLink} flex items-center gap-2 text-sm`}
                aria-label="Visit my GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/omar-najjar-0a768933a"
                className={`${styles.navLink} flex items-center gap-2 text-sm`}
                aria-label="Visit my LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </li>

            <li>
              {/* Email styled as a button */}
              <a
                href="mailto:najjar_omar@outlook.com"
                className="flex items-center gap-2 md:bg-primary md:text-white md:rounded-md md:px-3 md:py-1.25 md:-mt-1.25 md:mr-0 mr-3 text-sm md:hover:brightness-90 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Send me an email"
              >
                <Email className="w-4 h-4" />
                <span className="hidden md:inline">Email</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </AnimateOnScroll>
  );
}
