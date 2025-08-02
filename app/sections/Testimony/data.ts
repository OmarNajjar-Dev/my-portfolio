export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "john-doe",
    name: "John Doe",
    title: "Lorem ipsum dolor sit.",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/profile.png",
  },
] as const;
