# Rakit Digital - Design Document

## 1. Overview
Rakit Digital is a modern landing page built with **Vue 3** and **Vite**. The application uses a component-based architecture for its single-page layout, providing a smooth, continuous scrolling experience.

## 2. Tech Stack
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Variables for consistent theming. No external CSS frameworks (like Tailwind or Bootstrap) are used, ensuring a lightweight footprint.
- **Animations:** CSS Transitions, Keyframes, and Vue's reactivity coupled with `IntersectionObserver` for scroll-triggered animations.

## 3. Architecture & Project Structure
The project follows a standard Vue application structure:

```text
src/
├── assets/       # Static assets (images, icons)
├── components/   # Vue components for different UI sections
├── data/         # Static data and content files (TypeScript/JavaScript)
├── services/     # API or external service integrations
├── utils/        # Utility functions (e.g., Google Drive URL parsing)
├── App.vue       # Root component assembling the landing page
├── main.js       # Application entry point
└── style.css     # Global CSS and Design Tokens
```

## 4. UI/UX Design System

### 4.1. Color Palette (Design Tokens)
Defined in `src/style.css` via CSS Custom Properties (`:root`):
- **Primary Accent:** `#AC58E9` (Purple) - Used for wave backgrounds and gradients.
- **Button Gradient:** Linear gradient from `#ff6b6b` (Coral/Red) to `#ff4785` (Pink).
- **Text Gradient:** Linear gradient from `#AC58E9` to `#C384FA`.
- **Backgrounds:** Pure White (`#FFFFFF`) and Black (`#000000`).
- **Text Colors:** Dark (`#000000`), Light (`#FFFFFF`), and Muted (`#64748B`).

### 4.2. Typography
- **Font Family:** 'Inter', sans-serif (Weights: 400, 600, 700, 800)
- **Characteristics:** Clean, highly readable, modern aesthetic.

### 4.3. Component Breakdown (`App.vue`)
The main layout is constructed sequentially:
1. **Navbar:** Fixed navigation with smooth scroll links to sections.
2. **HeroSection:** Introduction with an animated entrance, text gradient, call-to-action button, and a floating image. Includes a stylized SVG wave background.
3. **AboutSection:** Details about the company/individual.
4. **ServicesSection:** Grid or list of services offered.
5. **ShowcaseSection:** Portfolio or past work gallery.
6. **ContactSection:** Reach out form or contact information.
7. **FooterSection:** Copyright and secondary links.

### 4.4. Animations & Interactions
- **Scroll Animations:** Sections use `IntersectionObserver` to detect when they enter the viewport. Once visible, an `animate-in` class is applied, triggering CSS transitions (e.g., elements sliding in from the left, fading in, or scaling up).
- **Micro-interactions:** Buttons feature hover states with vertical translation (`translateY(-3px)`) and enhanced drop shadows for a tactile feel.
- **Continuous Animations:** Floating effects on hero images using CSS `@keyframes float`.

### 4.5. Responsiveness
The design is fully responsive, utilizing CSS media queries (e.g., `@media (max-width: 900px)`) to:
- Stack flexbox layouts vertically.
- Hide non-essential decorative elements (like the hero image) on smaller screens to prioritize content.
- Adjust typography sizes and spacing for mobile viewports.

## 5. Data Management
Content is decoupled from the Vue components and stored in the `src/data/` directory (e.g., `hero.ts`, `about.ts`). This allows for easy content updates without modifying the underlying component markup. External assets, such as images hosted on Google Drive, are parsed and optimized using utilities located in `src/utils/`.
