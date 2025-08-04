import type { Metadata } from "next";

// Centralized metadata configuration
export const siteMetadata = {
  title: "Omar Najjar | Web Developer Portfolio",
  description:
    "Explore my portfolio showcasing modern web development projects built with Next.js, React, and Tailwind CSS. Full-stack developer specializing in responsive web applications.",
  url: "https://my-portfolio-lovat-delta-90.vercel.app/",
  siteName: "Omar Najjar Portfolio",
  author: "Omar Najjar",
  twitterHandle: "@omar_najjar",
  image:
    "https://my-portfolio-lovat-delta-90.vercel.app/public/images/profile.png",
  keywords: [
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "web development",
    "UI/UX",
    "responsive design",
  ],
};

// Generate metadata for different pages
export function generateMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: siteMetadata.url,
      siteName: siteMetadata.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteMetadata.image,
          width: 1200,
          height: 630,
          alt: "Omar Najjar Portfolio Preview",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: [siteMetadata.image],
      creator: siteMetadata.twitterHandle,
    },
    alternates: {
      canonical: siteMetadata.url,
    },
    category: "technology",
    classification: "portfolio",
    ...overrides,
  };
}

// Helper function to create page-specific metadata
export function createPageMetadata(
  title?: string,
  description?: string,
  image?: string
): Metadata {
  return generateMetadata({
    title: title ? `${title} | ${siteMetadata.author}` : siteMetadata.title,
    description: description || siteMetadata.description,
    openGraph: {
      title: title ? `${title} | ${siteMetadata.author}` : siteMetadata.title,
      description: description || siteMetadata.description,
      url: siteMetadata.url,
      siteName: siteMetadata.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image || siteMetadata.image,
          width: 1200,
          height: 630,
          alt: title
            ? `${title} - ${siteMetadata.author}`
            : "Omar Najjar Portfolio Preview",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteMetadata.author}` : siteMetadata.title,
      description: description || siteMetadata.description,
      images: [image || siteMetadata.image],
      creator: siteMetadata.twitterHandle,
    },
  });
}
