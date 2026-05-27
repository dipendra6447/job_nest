# AGENTS.md

# Job Portal Website Agent Guide

## Project Overview

Build a premium, modern, highly responsive **Job Portal Landing Website** using:

- React JS
- TypeScript
- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript (only if necessary)

The website must feel:

- Premium SaaS
- Enterprise HR Platform
- Modern Recruitment Portal
- Corporate Landing Page
- Luxury UI Experience

Design goals:

- clean whitespace
- modern card system
- smooth animations
- premium blue gradients
- glassmorphism highlights
- responsive layout
- enterprise-grade visual hierarchy

---

# Tech Stack

Required:

- React JS
- TypeScript
- HTML5 semantic structure
- CSS3
- Bootstrap 5
- React Hooks
- Functional Components

Allowed:

```txt
React + TypeScript + Bootstrap 5 + CSS
```

Optional:

```txt
Vanilla JavaScript
```

Use Vanilla JS only for:

- DOM interaction if unavoidable
- lightweight UI behavior
- third-party plugin fallback

Prefer React logic first.

Do NOT use:

- Tailwind CSS
- Next.js
- jQuery
- Material UI
- Chakra UI
- Styled Components
- Class Components

---

# Project Structure

Use scalable architecture.

```txt
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   │
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   └── NavbarData.ts
│   │
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.css
│   │
│   ├── SearchBar/
│   │   ├── SearchBar.tsx
│   │   └── SearchBar.css
│   │
│   ├── CategorySection/
│   │   ├── CategorySection.tsx
│   │   └── CategorySection.css
│   │
│   ├── TrendingJobs/
│   │   ├── TrendingJobs.tsx
│   │   ├── TrendingJobs.css
│   │   └── JobCard.tsx
│   │
│   ├── StatsBanner/
│   │   ├── StatsBanner.tsx
│   │   └── StatsBanner.css
│   │
│   ├── PromotionCards/
│   │   ├── PromotionCards.tsx
│   │   └── PromotionCards.css
│   │
│   ├── SpecialPromotions/
│   │   ├── SpecialPromotions.tsx
│   │   └── SpecialPromotions.css
│   │
│   ├── DiscoverJobs/
│   │   ├── DiscoverJobs.tsx
│   │   └── DiscoverJobs.css
│   │
│   ├── HiringBanner/
│   │   ├── HiringBanner.tsx
│   │   └── HiringBanner.css
│   │
│   ├── BlogSection/
│   │   ├── BlogSection.tsx
│   │   └── BlogSection.css
│   │
│   ├── BrowseJobs/
│   │   ├── BrowseJobs.tsx
│   │   └── BrowseJobs.css
│   │
│   ├── Newsletter/
│   │   ├── Newsletter.tsx
│   │   └── Newsletter.css
│   │
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.css
│
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── Home.css
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   ├── bootstrap-overrides.css
│   └── responsive.css
│
├── types/
│
├── hooks/
│
├── utils/
│
├── App.tsx
├── main.tsx
│
└── AGENTS.md
```

---

# HTML5 Rules

Use semantic HTML5.

Required tags:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Accessibility:

- proper alt text
- aria-label where needed
- semantic headings
- keyboard accessible navigation

Example:

```tsx
<section className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        ...
      </div>
    </div>
  </div>
</section>
```

---

# Bootstrap 5 Rules

Bootstrap is REQUIRED.

Install:

```bash
npm install bootstrap
```

Import:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

Use Bootstrap for:

- grid system
- spacing utilities
- responsive layout
- flex utilities
- navbar collapse
- containers

Preferred Bootstrap utilities:

```txt
container
container-fluid
row
col-lg-6
col-md-6
col-sm-12
d-flex
justify-content-between
align-items-center
gap-3
```

Avoid excessive utility abuse.

Custom CSS should control:

- branding
- colors
- hover effects
- card styling
- animations
- premium visual design

Do not rely only on Bootstrap styling.

---

# CSS Rules

Use:

```txt
CSS3 + Bootstrap 5
```

Structure:

```tsx
import "./Hero.css";
```

Rules:

- Separate CSS per component
- No inline styles
- No Tailwind
- No CSS-in-JS
- No styled-components

Use CSS for:

- custom UI
- premium styling
- gradients
- shadows
- hover animations
- typography
- glassmorphism

---

# Design System

## Colors

Primary Blue:

```css
#2454FF
```

Gradient Blue:

```css
#1448FF
```

Purple Accent:

```css
#7B3EFF
```

Dark Navy:

```css
#0B1739
```

Footer Navy:

```css
#071B6B
```

Background:

```css
#F8FAFF
```

Border:

```css
#EDF0F7
```

Text Gray:

```css
#6B7280
```

Success:

```css
#14B87A
```

---

# Typography

Use:

```txt
Inter
```

Fallback:

```css
sans-serif
```

### H1

```css
font-size: 62px;
font-weight: 800;
line-height: 1.1;
color: #0B1739;
```

### H2

```css
font-size: 42px;
font-weight: 700;
```

### Paragraph

```css
font-size: 16px;
line-height: 1.8;
color: #6B7280;
```

---

# Website Sections

Build in this order:

1. Navbar  
2. Hero  
3. Search Bar  
4. Career Categories  
5. Trending Jobs  
6. Statistics Banner  
7. Promotion Cards  
8. Special Promotions  
9. Discover Jobs  
10. Hiring Banner  
11. Blog Section  
12. Browse Jobs & Companies  
13. Newsletter  
14. Footer

---

# Responsive Rules

Breakpoints:

Desktop:

```txt
1200px+
```

Laptop:

```txt
992px–1199px
```

Tablet:

```txt
768px–991px
```

Mobile:

```txt
320px–767px
```

Requirements:

- Bootstrap responsive grid
- stacked mobile layout
- responsive typography
- collapsible navbar
- touch-friendly buttons
- no horizontal overflow

---

# Performance Rules

Must:

- lazy load images
- optimize assets
- reusable components
- avoid unnecessary renders

Target:

```txt
90+ Lighthouse Score
```

---

# UI/UX Rules

Maintain:

- premium SaaS feeling
- luxury gradients
- whitespace-heavy layout
- smooth hover animations
- enterprise quality spacing
- rounded cards
- subtle shadows
- glassmorphism highlights

Avoid:

- cluttered layouts
- outdated UI
- inconsistent spacing
- overusing Bootstrap defaults
- generic templates

---

# Final Goal

Build a production-ready, premium-quality, highly responsive Job Portal website using React JS, HTML5, CSS3, Bootstrap 5, and TypeScript while maintaining clean architecture, reusable components, scalable structure, and enterprise-level UI/UX quality.

Strictly avoid Tailwind CSS.