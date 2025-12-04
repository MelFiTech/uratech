# Uratech - Premium Business Landing Page

A modern, animated landing page for car consultancy and business services built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Black & Gold Theme** - Elegant black background with gold accents
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📱 **Responsive Design** - Fully responsive across all devices
- 🎯 **Component-Based** - Modular section components for easy maintenance
- 🔤 **Inter Font** - Clean, modern typography using Inter font family

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
uratech/
├── app/
│   ├── layout.tsx      # Root layout with Inter font
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and theme configuration
├── components/
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx        # Hero section with animated background
│   ├── Services.tsx    # Services grid with hover effects
│   ├── About.tsx       # About section with stats
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with social links
└── public/             # Static assets
```

## Sections

1. **Hero** - Eye-catching hero section with call-to-action buttons
2. **Services** - Grid of service cards with icons and descriptions
3. **About** - Company information with statistics
4. **Contact** - Contact form and contact information
5. **Footer** - Footer with links and social media

## Customization

### Colors

The theme colors are defined in `app/globals.css`:

- `--gold`: #d4af37 (Primary gold)
- `--gold-light`: #f4d03f (Light gold)
- `--gold-dark`: #b8941f (Dark gold)
- `--background`: #000000 (Black background)
- `--foreground`: #ffffff (White text)

### Fonts

The project uses Inter font family, configured in `app/layout.tsx`.

## Build for Production

```bash
yarn build
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
