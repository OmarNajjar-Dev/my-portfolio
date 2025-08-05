"use client";

interface HeroLinkProps {
  icon?: React.ReactElement;
  href: string;
  text: string;
}

export default function IconLink({ icon, href, text }: HeroLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link (internal navigation)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the target section
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without page reload
        window.history.pushState(null, "", href);
      }
    }
    // For external links, let the default behavior handle it
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={text}
      className="
        inline-flex items-center gap-1.5 sm:gap-2
        text-accent h-7 sm:h-8 lg:h-9 px-1.5 md:px-3 sm:px-4 lg:px-5 rounded-sm border-2 border-accent 
        hover:text-primary hover:border-primary hover:scale-105
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        transition-all duration-200 ease-in-out
        text-xs sm:text-sm lg:text-base font-medium
      "
    >
      {icon && (
        <span
          aria-hidden
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0"
        >
          {icon}
        </span>
      )}
      <span className="whitespace-nowrap">{text}</span>
    </a>
  );
}
