# Omar Najjar - Web Developer Portfolio

A modern portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15.4.5** - React framework
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - CSS framework
- **Lucide React** - Icons
- **EmailJS** - Contact form

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
my-portfolio/
├── app/
│   ├── sections/
│   │   ├── Hero/         # Hero section
│   │   ├── Skills/       # Skills showcase
│   │   ├── Projects/     # Project gallery
│   │   ├── Testimony/    # Testimonials
│   │   └── Contact/      # Contact form
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site favicon
├── components/
│   ├── layout/           # Layout components
│   └── ui/              # UI components
├── lib/
│   └── emailjs.ts       # EmailJS configuration
└── public/
    ├── images/          # Images and photos
    └── icons/           # SVG icons
```

## Contact Form Setup

The contact form uses EmailJS. Add these environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Skills & Technologies

- HTML5, CSS3, JavaScript
- TypeScript, React, Next.js
- Tailwind CSS, PHP, MySQL
- Python, Git, GitHub

## Projects

- **Small Portfolio** - Basic HTML/CSS/JS portfolio
- **To Do List** - Task manager with local storage
- **Snake Game** - Python game with Turtle
- **Weather App** - Bilingual React weather app
- **ShopHub** - E-commerce React application

---

**Built by Omar Najjar**
