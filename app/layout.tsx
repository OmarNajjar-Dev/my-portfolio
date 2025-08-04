// app/layout.tsx
import Header from "@/components/layout/Header";
import BackToTop from "@/components/ui/BackToTop";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Initialize Poppins font with Next.js optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Global SEO Metadata for Portfolio
export const metadata: Metadata = {
  title: "Omar Najjar | Web Developer Portfolio",
  description:
    "Explore my portfolio showcasing modern web development projects built with Next.js, React, and Tailwind CSS.",
  openGraph: {
    title: "Omar Najjar | Web Developer Portfolio",
    description: "Modern web experience built with Next.js 15.4.5",
    url: "https://your-portfolio-url.com",
    siteName: "Omar Najjar Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Najjar Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional portfolio website showcasing skills and projects"
        />
      </head>
      <body className={poppins.className}>
        {/* Global header for navigation */}
        <Header />

        {/* Main portfolio content */}
        <main className="mx-auto max-w-[1200px] py-4 md:py-6 lg:py-8 px-[5%]">
          <div className="flex flex-col gap-12">
            {children}
          </div>
        </main>

        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}
