# CodeForjHQ Website

Premium AI Developer Productivity & Code Management Platform  
Multi-page frontend built with React + Tailwind CSS + Framer Motion.

Dark, command-center enterprise design. Fully responsive. Production ready.

---

## 🚀 Overview

This project is the official marketing website frontend for **CodeForjHQ.com**.

It includes:

- Multi-page architecture using React Router
- High-performance animations via Framer Motion
- Mobile-first responsive layout
- Enterprise dark UI
- Modular component architecture
- Production-ready structure

---

## 🎨 Design System

### Theme

| Element | Value |
|---------|--------|
| Background | `#000000` |
| Text | `#F1F9F4` |
| Accent | `#F60670` |
| Card Background | `#0E0E0E` |

### Typography
- Headings → **Onest**
- Body → **Manrope**

### UI Style
- Command-center aesthetic
- Minimal gradients
- Accent used only for CTAs, highlights, borders
- Subtle shadows
- Hover elevation on cards
- Glow only on CTA interactions

---

## 📄 Pages

### 1️⃣ Home
- Hero (animated headline + node background)
- About
- How It Works (sequential animation)
- Features
- Pricing (3 tiers + monthly/yearly toggle)
- Testimonials (fade carousel)
- FAQ (accordion)
- Final CTA

### 2️⃣ Features
- Hero
- Core Capabilities
- Architecture (flow animation)
- Security & Scalability

### 3️⃣ About
- Hero
- Mission
- Vision
- Platform Philosophy

### 4️⃣ Use Cases
- Hero
- Startup SaaS
- Enterprise Engineering
- DevOps Teams

### 5️⃣ Contact
- Hero
- Contact Form
- Enterprise Sales Info
- Platform Information

---

## 🧠 Animation System

Built using Framer Motion.

Includes:

- Page transitions (fade + 20px Y-slide)
- Hero stagger reveal
- Card hover lift + icon pulse
- Sequential step animation
- Accordion expand/collapse
- Carousel fade transition
- CTA breathing gradient
- Desktop-only subtle background motion
- Reduced animation on mobile for performance

---

## 🧱 Layout Structure

### Header
- Floating
- Backdrop blur
- Rounded (2xl)
- Semi-transparent black
- Desktop: Full nav + CTA
- Mobile: Hamburger + slide drawer

### Footer
- Product
- Company
- Resources
- Legal
- Docs/API (Coming Soon)
- Enterprise links
- Privacy & Terms
- Technical tagline

---

## 📱 Responsive Strategy

- Mobile-first
- Fluid hero typography (`text-4xl → text-6xl`)
- Grid columns: `1 → 2 → 3`
- Max width container:

```css
w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
