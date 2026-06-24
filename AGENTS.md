# =====================================================
# SUBSCRIPTION PAGE DEVELOPMENT GUIDE
# =====================================================

## Project Context

The Home Page and Job Listing Page have already been completed and approved.

Build a premium Subscription & Pricing Page that feels like a natural extension of the existing JobNest platform.

The page should clearly communicate premium offerings for:

- Job Seekers
- Employers
- Business Promoters

The design should match the quality of:

- LinkedIn Premium
- Indeed Premium
- Glassdoor
- Wellfound
- AngelList Talent

---

# Business Rules

## Job Seeker

- Search jobs is free.
- First 3 job applications are free.
- From the 4th application onward, a subscription is required.
- Premium plans unlock unlimited applications.

## Employer

- Companies can post up to 3 jobs free.
- From the 4th posting onward, a subscription is required.
- Premium plans unlock unlimited job postings.

## Business Promotion

- Business promotion is always paid.
- Promotion duration is configured by Admin.
- Expired promotions automatically lose visibility.
- Active promotions receive priority placement.

---

# Technology Stack

Required:

- Next.js 15+
- React
- TypeScript
- Bootstrap 5
- GSAP
- ScrollTrigger
- CSS3

Do NOT use:

- Tailwind CSS
- Material UI
- Chakra UI
- Styled Components
- jQuery

---

# Design Theme

Luxury SaaS Experience

Premium Black & Gold Theme

Enterprise Recruitment Platform

Modern Glassmorphism Design

---

# Color Palette

Primary Gold: #D4AF37
Dark Gold: #B8860B
Background Black: #0A0A0A
Card Background: #111111
Border Gold: rgba(212,175,55,0.2)
White: #FFFFFF
Secondary Text: #B0B0B0

---

# Project Structure

src/
│
├── app/
│   └── subscription/
│       └── page.tsx
│
├── components/
│
│   ├── PricingHero/
│   ├── BillingToggle/
│   ├── JobSeekerPlans/
│   ├── EmployerPlans/
│   ├── BusinessPromotionPlans/
│   ├── ComparisonTable/
│   ├── PremiumBenefits/
│   ├── Testimonials/
│   ├── FAQ/
│   └── SubscriptionCTA/
│
├── styles/
│   └── subscription.css

---

# Page Layout

1. Shared Navbar

Reuse existing Navbar.

No modifications allowed.

---

2. Hero Section

Badge:
✨ Premium Membership Plans

Heading:
Unlock More Opportunities With JobNest Premium

Description:
Get unlimited job applications, premium employer tools, and business promotion features with flexible subscription plans.

Buttons:
- View Plans
- Contact Sales

Design:
- Animated gold particles
- Black gradient background
- Glassmorphism effects
- Floating glow elements

---

3. Billing Toggle

Options:

- Daily
- Weekly
- Monthly

Default:
Monthly

GSAP animated indicator.

---

4. Job Seeker Plans

Free Plan

Price:
₹0

Features:

✓ Search Unlimited Jobs
✓ First 3 Applications Free
✓ Basic Profile
✓ Apply Tracking

Premium Plan

Daily:
₹29/day

Weekly:
₹99/week

Monthly:
₹299/month

Features:

✓ Unlimited Applications
✓ Priority Visibility
✓ Featured Candidate Badge
✓ Resume Enhancement
✓ Analytics Dashboard
✓ Premium Support

Badge:
Most Popular

---

5. Employer Plans

Free Plan

Price:
₹0

Features:

✓ Post Up To 3 Jobs
✓ Company Profile
✓ Applicant Management

Professional Plan

Daily:
₹49/day

Weekly:
₹199/week

Monthly:
₹599/month

Features:

✓ Unlimited Job Posting
✓ Featured Jobs
✓ Recruitment Dashboard
✓ Candidate Shortlisting
✓ Verification Badge
✓ Hiring Analytics

---

6. Business Promotion Plans

Price:

Daily:
₹99/day

Weekly:
₹499/week

Monthly:
₹1499/month

Features:

✓ Homepage Promotion
✓ Featured Business Placement
✓ Search Ranking Boost
✓ Banner Placement
✓ Analytics Dashboard
✓ Lead Generation Support

Admin controls promotion duration.

---

7. Feature Comparison Table

Columns:

- Feature
- Free
- Job Seeker Premium
- Employer Premium
- Business Promotion

Features:

- Job Applications
- Job Posting
- Featured Visibility
- Business Promotion
- Analytics
- Priority Support
- Verification Badge

Use gold checkmarks.

---

8. Premium Benefits Section

Cards:

🚀 Faster Hiring
💼 Better Opportunities
📈 Growth Analytics
⭐ Priority Visibility
🔒 Verified Profiles
🎯 Better Reach

---

9. Testimonials

Include:

- Job Seeker Review
- Employer Review
- Business Promotion Review

Glassmorphism cards.

Auto slider.

---

10. FAQ

Questions:

- How many applications are free?
- How many jobs can companies post for free?
- What happens after free limits?
- Can I cancel anytime?
- How does promotion work?
- Who controls promotion duration?

---

11. CTA Section

Heading:

Ready To Unlock Premium Features?

Description:

Choose a plan and accelerate your hiring, job search, or business growth.

Buttons:

- Get Premium
- Contact Sales

---

# GSAP Requirements

Required Animations:

- Hero Fade Up
- Card Stagger
- ScrollTrigger
- Floating Gold Shapes
- Card Hover Scale
- FAQ Reveal
- CTA Reveal
- Magnetic Buttons

Animations must remain elegant and professional.

---

# Performance Requirements

Target:

90+ Lighthouse Score

Must:

- Lazy Loaded Assets
- Optimized Images
- Reusable Components
- Minimal Re-renders
- SSR Compatible

---

# Final Goal

Create a world-class luxury SaaS Subscription Page that communicates JobNest premium offerings for Job Seekers, Employers, and Business Promoters while maintaining enterprise-grade UI quality, accessibility compliance, responsive design, and smooth GSAP-powered interactions.