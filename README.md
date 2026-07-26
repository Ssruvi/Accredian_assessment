# Accredian Enterprise Page — Partial Clone

A responsive single-page implementation of the Accredian Enterprise experience, built as a Full Stack Developer Intern assignment using Next.js App Router.

## Live demo

Add your Vercel deployment URL here after deployment.

## Features

- Full landing page with hero, company logos, enterprise edge, domain expertise, course segmentation, CAT audience, process, FAQs, testimonials, and footer.
- Responsive desktop, tablet, and mobile layouts.
- Sticky navigation with smooth section scrolling and a mobile navigation menu.
- Accessible interactive FAQ accordion.
- Lead-capture form connected to a mock Next.js API endpoint at `POST /api/contact`.
- Client-side form validation/loading feedback and server-side API validation.

## Tech stack

- Next.js 16 (App Router)
- React functional components and hooks
- TypeScript
- Tailwind CSS import plus custom responsive CSS
- Lucide React icons

## Project structure

```text
app/
  api/contact/route.ts   # Mock lead-capture API
  components/            # Reusable UI building blocks
  globals.css            # Responsive design system and layout styles
  layout.tsx             # Shared root layout and metadata
  page.tsx               # Enterprise landing page
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
```

## Approach

I translated the supplied reference into a single, cohesive enterprise-learning experience instead of copying a template. The layout uses reusable data-driven lists for repeated UI (navigation links, statistics, expertise cards, course categories, process steps, and FAQ data). CSS grid, fluid typography, and targeted breakpoints keep the page usable from mobile through wide desktop screens.

The callback form posts name, email, and company to a Next.js Route Handler. It validates required fields in both the browser and API route and returns a clear success/error message. This makes it easy to replace the mock response with a database, email service, or CRM later.

## AI usage

AI tools were used to accelerate development in the following ways:

- Turning the visual reference into a first-pass component hierarchy and responsive layout plan.
- Drafting the initial design tokens, CSS layout scaffolding, and content structure.
- Identifying visual patterns such as the hero composition, metric cards, CTA panels, and FAQ behavior.

Manual improvements made afterwards:

- Adjusted the responsive breakpoints, spacing, hierarchy, colors, and interaction states.
- Implemented the navigation, accordion behavior, form submission state, and API validation.
- Refined copy, accessibility labels, loading feedback, and project documentation.
- Removed external image dependencies so the submitted project remains self-contained.

## Improvements with more time

- Persist leads to a database and notify a team inbox or CRM.
- Add automated unit and end-to-end tests.
- Add a CMS for editable program/testimonial content.
- Add richer motion with reduced-motion support and complete keyboard focus testing.
- Add real partner/logo assets subject to brand permission.

## Deployment

1. Push this folder to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the default Next.js build settings and click **Deploy**.
4. Copy the generated Vercel URL into the **Live demo** section above and the assignment submission form.
