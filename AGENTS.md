# AGENTS.md

# Job Portal Listing Page Development Guide

## Project Context

The Home Page has already been completed and approved.

Your task is to build a new **Job Listing Page** while preserving the exact design language, branding, visual hierarchy, spacing system, typography, animations, and component quality used throughout the Home Page.

### Critical Requirements

* DO NOT modify any existing Home Page code.
* DO NOT redesign existing components.
* DO NOT change colors, spacing, typography, shadows, border radius, or animation styles.
* The Listing Page must feel like a natural extension of the Home Page.
* Reuse existing shared components whenever possible.

The final experience should feel like a premium enterprise recruitment platform similar to LinkedIn Jobs, Indeed Premium, Wellfound, and Glassdoor.

---

# Technology Stack

Required:

* React JS
* TypeScript
* HTML5
* CSS3
* Bootstrap 5
* React Hooks
* Functional Components

Allowed:

```txt
React + TypeScript + Bootstrap 5 + CSS3
```

Optional:

```txt
Vanilla JavaScript
```

Use Vanilla JS only when absolutely necessary.

Do NOT use:

* Tailwind CSS
* Next.js
* Material UI
* Chakra UI
* Styled Components
* jQuery
* Class Components

---

# Design System Inheritance

The Listing Page must inherit the existing Home Page design system.

## Color Palette

```css
Primary Blue: #2454FF;
Gradient Blue: #1448FF;
Purple Accent: #7B3EFF;
Dark Navy: #0B1739;
Footer Navy: #071B6B;
Background: #F8FAFF;
Border: #EDF0F7;
Text Gray: #6B7280;
Success Green: #14B87A;
```

## Typography

Font Family:

```css
font-family: "Inter", sans-serif;
```

### H1

```css
font-size: 62px;
font-weight: 800;
line-height: 1.1;
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

# Project Structure

```txt
src/
│
├── pages/
│   └── JobListing/
│       ├── JobListing.tsx
│       └── JobListing.css
│
├── components/
│
│   ├── ListingHero/
│   │   ├── ListingHero.tsx
│   │   └── ListingHero.css
│   │
│   ├── JobFilters/
│   │   ├── JobFilters.tsx
│   │   └── JobFilters.css
│   │
│   ├── ActiveFilters/
│   │   ├── ActiveFilters.tsx
│   │   └── ActiveFilters.css
│   │
│   ├── JobResultsHeader/
│   │   ├── JobResultsHeader.tsx
│   │   └── JobResultsHeader.css
│   │
│   ├── JobListingGrid/
│   │   ├── JobListingGrid.tsx
│   │   ├── JobCard.tsx
│   │   └── JobListingGrid.css
│   │
│   ├── FeaturedCompanies/
│   │   ├── FeaturedCompanies.tsx
│   │   └── FeaturedCompanies.css
│   │
│   ├── CareerResources/
│   │   ├── CareerResources.tsx
│   │   └── CareerResources.css
│   │
│   ├── ListingCTA/
│   │   ├── ListingCTA.tsx
│   │   └── ListingCTA.css
│   │
│   └── Pagination/
│       ├── Pagination.tsx
│       └── Pagination.css
```

---

# Page Layout

Build the page in the following order:

## 1. Shared Navbar

Reuse existing Navbar component.

Requirements:

* No design modifications
* No spacing changes
* No color changes
* Preserve all interactions

---

## 2. Listing Hero Section

Purpose:

Provide a premium search experience.

Content:

* Breadcrumb Navigation
* Large Heading
* Supporting Description
* Keyword Search
* Location Search
* Category Dropdown
* Search Button

Example Heading:

```txt
Discover Your Dream Career
```

Example Description:

```txt
Browse thousands of verified opportunities from leading companies around the world.
```

Design:

* Premium gradient background
* Glassmorphism search panel
* Floating abstract shapes
* Subtle blur effects
* Soft shadows

---

## 3. Job Filters Sidebar

Desktop:

* Sticky left sidebar

Mobile:

* Slide-in filter drawer

Filters:

* Job Category
* Job Type
* Work Mode
* Experience Level
* Salary Range
* Company Size
* Posted Date
* Required Skills

UI Requirements:

* Bootstrap Accordion
* Premium checkboxes
* Custom radio buttons
* Toggle switches
* Sticky positioning

---

## 4. Active Filters Section

Display selected filters.

Example:

```txt
React
TypeScript
Remote
Full Time
₹10L+
```

Features:

* Remove single filter
* Clear all filters
* Smooth animations

---

## 5. Results Header

Display:

```txt
Showing 1–12 of 1,248 Jobs
```

Include:

* Sort Dropdown
* Grid View Toggle
* List View Toggle
* Save Search Button

---

## 6. Job Listing Grid

Desktop:

```txt
3 Columns
```

Tablet:

```txt
2 Columns
```

Mobile:

```txt
1 Column
```

Use Bootstrap Grid System.

---

# Job Card Design

Each card must contain:

## Header

* Company Logo
* Featured Badge (optional)

## Content

* Job Title
* Company Name
* Location
* Salary Range
* Experience Level
* Employment Type

## Skills Section

Examples:

```txt
React
TypeScript
Node.js
AWS
MongoDB
```

## Description

2–3 line preview.

## Footer

* Posted Time
* Apply Now Button

---

# Card Hover Effects

Use:

```css
transition: all 0.3s ease;
```

Effects:

* Slight lift
* Enhanced shadow
* Border glow
* Smooth scaling

---

## 7. Featured Companies Section

Display premium company cards.

Include:

* Logo
* Company Name
* Industry
* Open Positions

Examples:

```txt
Google
Microsoft
Amazon
Adobe
Netflix
Spotify
```

Design:

* Glassmorphism cards
* Hover interactions
* Consistent spacing

---

## 8. Career Resources Section

Purpose:

Provide career guidance.

Cards:

```txt
Resume Building Tips
Interview Preparation
Salary Negotiation Guide
Remote Work Success
Career Growth Strategies
```

Design:

Reuse Home Page blog card styling.

---

## 9. Recruitment CTA Banner

Premium call-to-action section.

Headline:

```txt
Looking to Hire Top Talent?
```

Buttons:

```txt
Post a Job
```

```txt
Contact Sales
```

Design:

* Gradient background
* Glassmorphism layer
* Floating decorations
* Enterprise SaaS appearance

---

## 10. Pagination Section

Include:

* Previous
* Next
* Page Numbers

Requirements:

* Active page highlighted
* Smooth hover animations
* Mobile-friendly layout

---

## 11. Newsletter Section

Reuse existing Newsletter component.

No modifications allowed.

---

## 12. Footer

Reuse existing Footer component.

No modifications allowed.

---

# HTML5 Requirements

Use semantic structure.

Required:

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

* aria-label
* semantic headings
* keyboard navigation
* proper focus states
* descriptive alt attributes

---

# Bootstrap 5 Requirements

Use Bootstrap for:

* Grid Layout
* Responsive Design
* Containers
* Flex Utilities
* Accordions
* Offcanvas Filters

Preferred Classes:

```txt
container
container-fluid
row
col-lg-4
col-md-6
col-sm-12
d-flex
align-items-center
justify-content-between
gap-3
```

---

# CSS Guidelines

Use separate CSS files per component.

Requirements:

* No inline styles
* No CSS-in-JS
* No Tailwind CSS
* No Styled Components

Use CSS for:

* Branding
* Animations
* Gradients
* Glassmorphism
* Card Effects
* Hover States

---

# Responsive Design

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

* Fully responsive layout
* Collapsible filters
* Mobile search experience
* Touch-friendly controls
* No horizontal overflow

---

# Animations

Use subtle modern animations.

Examples:

* Fade Up
* Fade Left
* Fade Right
* Scale In
* Hover Lift
* Glow Effects

Keep animations smooth and professional.

---

# Performance Requirements

Target:

```txt
90+ Lighthouse Score
```

Must:

* Lazy-load images
* Reusable components
* Optimized rendering
* Efficient state management
* Minimal bundle size

---

# UI/UX Requirements

Maintain:

* Premium SaaS appearance
* Enterprise recruitment platform feel
* Luxury gradients
* Glassmorphism accents
* Consistent spacing
* Large whitespace
* Modern card system
* Smooth micro-interactions

Avoid:

* Generic templates
* Cluttered layouts
* Inconsistent spacing
* Outdated UI patterns
* Excessive Bootstrap styling

---

# Final Goal

Create a production-ready, enterprise-grade Job Listing Page that perfectly matches the existing Home Page design system.

The page should feel like it was designed alongside the Home Page from day one while maintaining a premium SaaS recruitment experience, responsive design, reusable architecture, accessibility compliance, and modern UI/UX standards.
