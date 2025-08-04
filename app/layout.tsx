import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { generateMetadata } from "@/lib/metadata";

// Initialize Poppins font with Next.js optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Global SEO Metadata for Portfolio
export const metadata: Metadata = generateMetadata();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        {/* Global header for navigation */}
        <Header />

        {/* Main portfolio content */}
        <main className="mx-auto max-w-[1200px] py-4 md:py-6 lg:py-8 px-[5%]">
          <div className="flex flex-col gap-12">{children}</div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}
