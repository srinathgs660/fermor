# Fermor — 3D Financial Experience

> **"Financial clarity, without the complexity."**

A next-generation, production-grade 3D interactive homepage for **Fermor**, built to model personal finances as an intelligent, unified universe.

---

## 1. Overview

Fermor is a modern financial platform engineered to help individuals understand where they stand today, simulate the future consequences of their choices, and grow with confidence. 

Instead of traditional fintech dashboards that overwhelm users with disjointed tables and transactional guilt, Fermor visualizes money as a cohesive, living ecosystem. Through real-time 3D simulation, users experience their income, spending, emergency reserves, index investments, and life goals in harmonic relation to one another.

---

## 2. Design Direction: "A Financial Universe"

The core creative metaphor of the website is **"The Financial Universe"**:
- **Central Core**: Represents the user's financial nucleus — consolidated liquidity, emergency stability, and compounding capital.
- **Orbital Rings**: Represent recurring dynamics — cash inflows, fixed overheads, and automated investments cycling at calibrated speeds.
- **Floating Financial Nodes**: Individual capital vectors (Income, Spending, Reserves, Portfolio Growth, Milestones) that react dynamically to cursor proximity, clicks, and device tilt.
- **Negative Space & Calm Aesthetics**: A warm ivory/off-white background (`#F7F7F3`), crisp editorial typography (`Geist` / `Inter`), deep carbon text (`#111111`), and refined emerald accents (`#10B981`) maintain an atmosphere of quiet intelligence rather than noisy crypto-hype.

---

## 3. Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **3D Graphics**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens, backdrop filters, and glassmorphism helpers
- **Animations & Micro-interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Optimization**: Dynamic imports (`next/dynamic` with `ssr: false`), device-aware particle scaling, and WebGL fail-safe fallbacks.

---

## 4. Key Features & Sections

1. **Floating Frosted Navigation (`Navbar`)**:
   - Transparent over hero; morphs into a frosted glass pill with blur upon scroll.
   - Smooth mobile slide drawer.

2. **Full-Screen 3D Hero (`Hero` & `HeroScene`)**:
   - Translucent glass core with transmission and refraction.
   - Interactive 3D financial nodes displaying real-time metrics (`+$8,450/mo`, `32% reserve`, `+14.8% CAGR`).
   - Mouse parallax camera interpolation and click-to-inspect flyout modals.
   - Graceful CSS/SVG fallback if WebGL is unavailable.

3. **Subtle Trust Strip (`TrustStrip`)**:
   - 4 compact product pillars: *One Clear Picture*, *Smarter Decisions*, *Built Around Your Goals*, *Everyday Simplicity*.

4. **The Fragmentation Interactive Problem (`ProblemSection`)**:
   - The signature interaction demonstrating **Fragmented → Connected → Clear**.
   - Visually scattered financial accounts (Checking, Brokerage, Expenses, Bills, Savings, Goals) that dynamically pull into an aligned orbit and fuse into a unified financial organism.

5. **3D Stylized Product Visualization (`ProductSection`)**:
   - Perspective 3D tilt dashboard with 4 interactive viewpoints: *Financial Overview*, *Spending Dynamics*, *Wealth Growth*, and *Life Goals*.

6. **Four Distinct Architectural Dimensions (`Features`)**:
   - **01 — Understand**: Dynamic cash flow spectrum breakdown.
   - **02 — Plan**: Milestone pathway progress tracking.
   - **03 — Act**: Interactive slider simulating the 10-year compounding impact of surplus cash.
   - **04 — Grow**: Strategy selector (Defensive vs. Balanced vs. Long Horizon).

7. **Signature 3D Section: "Your financial life, in motion" (`Signature3DSection` & `EcosystemScene`)**:
   - Central financial nucleus with 6 orbiting layers: *Cash Flow*, *Spending*, *Savings*, *Investments*, *Goals*, *Growth*.
   - Orbit explorer where users can cycle through layers with synchronized camera perspectives and metric highlights.

8. **Predictive Insights (`Insights`)**:
   - Realistic illustrative scenarios demonstrating high-leverage opportunities (e.g., discretionary spend contraction, idle cash yield optimization).
   - Clear illustrative disclaimer badge.

9. **The Workflow: How It Works (`HowItWorks`)**:
   - 3-step progressive timeline: *01 Connect* → *02 Understand* → *03 Move Forward*.
   - Responsive horizontal progress tracker that adapts to vertical timeline on mobile.

10. **Design Philosophy Manifesto (`Philosophy`)**:
    - Large editorial typography and generous whitespace to slow the pacing down.
    - Floating geometric accent ring.

11. **High-Impact Contrast CTA (`FinalCTA` & `DarkCtaScene`)**:
    - Carbon dark background (`#0D0F11`) with rotating glowing 3D icosahedron lattice.
    - Instant call-to-actions with security and privacy indicators.

12. **Minimalist Footer (`Footer`)**:
    - Semantic navigation columns, legal disclaimers, and social links.

---

## 5. Design Decisions

- **Why 3D for the Hero?**  
  Personal finance is inherently multi-dimensional. A flat table fails to show how a decision made in spending ripples through liquidity, goals, and decades of compounding. The 3D cosmos makes these relationships tangible and intuitive.
- **Why the Fragmentation Section?**  
  Every prospective user already suffers from fragmented accounts and disjointed apps. Showing that fragmentation physically on screen and resolving it into a clean, unified structure creates an emotional feeling of relief.
- **Why Ivory Background Instead of Pure White or Full Dark?**  
  Pure white creates sterile clinical fatigue; full dark often feels like crypto speculation or gaming. A warm ivory (`#F7F7F3`) evokes editorial financial publications, trustworthiness, and sophisticated calm.

---

## 6. Performance & Accessibility

- **Device-Aware Particle Counts**: Particles and geometry segments are throttled on mobile devices to preserve high frame rates.
- **Clamped Device Pixel Ratio**: DPR clamped to `[1, 1.8]` to avoid GPU overheating on high-density Retina screens.
- **Graceful WebGL Fallback**: If WebGL is disabled or unsupported, the scene cleanly falls back to an animated CSS/SVG composition.
- **Reduced Motion Support**: Detects `prefers-reduced-motion: reduce` and halts camera parallax, orbit rotations, and custom cursor animations.
- **Lazy Loading**: 3D scenes load dynamically via Next.js `dynamic(..., { ssr: false })` with Suspense.

---

## 7. Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation

```bash
# Clone the repository and navigate into the folder
cd fermor

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 8. Production Build & Linting

```bash
# Build production bundle
npm run build

# Run ESLint validation
npm run lint

# Start production server
npm run start
```

---

## 9. Deployment to Vercel

The application is pre-configured for instant zero-config deployment on Vercel:

1. Push your code to a GitHub/GitLab repository.
2. In the [Vercel Dashboard](https://vercel.com), select **Add New Project** and import the repository.
3. Keep the default build settings (`npm run build` with Next.js preset).
4. Click **Deploy**.
