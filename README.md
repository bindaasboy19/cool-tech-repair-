# Cool Tech Repair

Lead-generation business website for a local appliance repair service in Barhni, Siddharth Nagar, Uttar Pradesh.

Built with Next.js App Router and Tailwind CSS, with a strong focus on mobile-first UX, click-to-call actions, WhatsApp conversions, and SEO-friendly page structure.

## Features

- Multi-page website
- Mobile-friendly and desktop-friendly responsive layout
- Sticky header navigation
- Floating WhatsApp button
- Sticky mobile "Call Now" button
- SEO metadata for each page
- Google Maps embed on contact page
- Formspree-ready contact and booking forms
- Google Reviews widget section with Elfsight support
- Reusable components for easy maintenance

## Pages

- `/` Home
- `/services` Services
- `/about` About
- `/contact` Contact
- `/book-service` Book Service

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- Lucide React icons

## Project Structure

```text
cool-tech-repair/
├── app/
│   ├── about/page.tsx
│   ├── book-service/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css
│   ├── icon.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── services/page.tsx
│   └── sitemap.ts
├── components/
│   ├── before-after-gallery.tsx
│   ├── cta-section.tsx
│   ├── floating-actions.tsx
│   ├── footer.tsx
│   ├── lead-form.tsx
│   ├── navbar.tsx
│   ├── review-section.tsx
│   ├── section-heading.tsx
│   ├── service-card.tsx
│   ├── service-detail.tsx
│   └── testimonial-card.tsx
├── lib/
│   └── site.ts
├── public/
│   └── images/
├── .env.example
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file and add the values below:

```env
NEXT_PUBLIC_SITE_URL=https://cooltechrepair.in
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID=your-elfsight-widget-id
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID
```

## Form Handling

The site uses Formspree for:

- Contact form
- Book service form

Once `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is configured, both forms will submit directly without needing a custom backend.

## Google Reviews Widget

The homepage includes a reusable Google Reviews section powered by Elfsight.

To enable live reviews:

1. Create a Google Reviews widget in Elfsight
2. Copy the widget ID
3. Add it to `NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID`
4. Add your direct Google review URL to `NEXT_PUBLIC_GOOGLE_REVIEW_URL`

If these values are not configured yet, the site shows a polished preview state instead of fake live reviews.

## Responsive Design Notes

The website is built mobile-first and is designed to work well on:

- Small phones
- Large phones
- Tablets
- Laptops
- Desktop screens

Responsive UX includes:

- Large tap-friendly CTA buttons
- Collapsible mobile navigation
- Single-column mobile layouts that expand to multi-column on larger screens
- Sticky bottom call action for mobile users
- Flexible card grids and content sections for desktop spacing

## Build

Run a production build:

```bash
npm run build
```

## Business Details

- Business Name: Cool Tech Repair
- Services: AC Repair, Fridge Repair, Washing Machine Repair, Geyser Repair
- Location: Barhni, Siddharth Nagar, Uttar Pradesh, India
- Phone: +91 8097710143, +91 8173098151
- WhatsApp: https://wa.me/918097710143
- Instagram: `lokesh_air_care`
