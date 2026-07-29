# Manish Choudhary — Portfolio & AI Engineering Showcase: Technical Report & Resume Guide

**Project Name:** Developer Portfolio & AI Engineering Showcase  
**Live Demo:** [https://next-portfolio-stark.vercel.app](https://next-portfolio-stark.vercel.app)  
**Repository:** [https://github.com/manish-01882](https://github.com/manish-01882)  
**Developer:** Manish Choudhary (Data Science & AI Engineer / Full-Stack Developer)  
**Tech Stack:** Next.js 15 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS 4, Framer Motion v12, Lenis Smooth Scroll, Better Auth, TanStack Query v5, Zod.

---

## Executive Summary

An enterprise-grade, performance-optimized developer portfolio web application built with **Next.js 15**, **React 19**, and **TypeScript 5**. The project combines modern web design with an AI/ML engineering project showcase — featuring multi-model GPU serverless pipelines, deep learning medical image analysis, time-series stock forecasting models, and interactive modern UI engineering.

The repository features strict type safety, zero-runtime-error environment validation via `@t3-oss/env-nextjs` and **Zod**, custom **Better Auth** session management, smooth physics-based scrolling powered by **Lenis**, and declarative motion systems built with **Framer Motion v12**.

---

## Technical Highlights & Architecture

### 1. High-Performance Modern Web Architecture
- **Framework & Compiler:** Built on Next.js 15 App Router using Turbopack for near-instant development builds and optimized production server-side rendering (SSR) / static generation.
- **Type-Safe Environment Configuration (`src/config/env.ts`):** Utilized `@t3-oss/env-nextjs` and Zod schema validation to strictly validate environment variables on both client and server runtimes during build and runtime execution.
- **Ultra-Smooth UI Physics (`Lenis` Scroll Engine):** Integrated Lenis inertial smooth scrolling (`lerp: 0.04`, `wheelMultiplier: 0.7`) with custom scroll wrapper refs for a fluid, polished user browsing experience.
- **Data Fetching & State:** Implemented TanStack Query (React Query v5) for asynchronous API state management, cache revalidation, and loading states, paired with Zustand for lightweight client state handling.

### 2. Design System & Interactive Motion Engine
- **Modern Responsive Design:** Styled with Tailwind CSS v4 featuring sleek dark theme aesthetics, custom background grid overlays, decorative border accents, and dynamic status badges.
- **Interactive UI Micro-Animations:** Developed key interactive elements including dynamic `Typewriter` text loops, responsive avatar frame with status badge (`availableForWork` indicator), and a procedural interactive `Robot` mascot with eye-tracking logic.
- **Custom Intro Splash & Navigation:** Integrated a seamless entrance splash overlay (`IntroSplash`) and a sticky top navigation bar (`Navbar`) with smooth anchor link navigation.

### 3. Comprehensive AI/ML Project Showcase Integration
- **AI Music Generation Platform:** Detailed multi-model pipeline orchestrating 3 AI models (ACE-Step, Qwen2-7B, SDXL-Turbo) on Modal serverless GPUs with persistent caching, 2-stage LLM lyrics pipeline, Inngest task queues, Prisma/Neon Postgres state machine, AWS S3 presigned URLs, and Next.js 15 global audio player.
- **TB-MTNet Tuberculosis Classifier:** Highlights an end-to-end medical imaging system analyzing chest X-rays to detect TB (0.983 AUROC) and severity (8.51 MAE) using a dual-head Inception-v3 + Transformer encoder, deployed with FastAPI backend, U-Net lung segmentation, and Grad-CAM explainable heatmaps.
- **AI Stock Price Predictor:** Showcases time-series forecasting system for stock closing price prediction using a 4-layer LSTM trained on historical OHLCV data (1.22% MAPE on MSFT), deployed with FastAPI and Streamlit visualization dashboard.

### 4. Security & Authentication Infrastructure
- **Better Auth Integration (`src/lib/auth.ts`):** Integrated `Better Auth` with custom session plugins, GitHub and Google social provider support, sliding cookie cache duration, and session persistence.

---

## Resume Bullet Points (Ready to Copy/Paste)

### Option 1: AI / Data Science Engineer Focused (Recommended)
> - **Architected & Deployed an Enterprise Next.js 15 Portfolio Platform** using React 19, TypeScript 5, and Tailwind CSS 4 to showcase end-to-end AI/ML systems and high-throughput data engineering projects.
> - **Engineered Multi-Model AI Pipelines & Cloud Services** featuring Modal serverless GPU orchestration (ACE-Step, Qwen2-7B, SDXL-Turbo), 2-stage LLM pipelines, and deep learning medical imaging models (0.983 AUROC TB detection).
> - **Implemented Strict Runtime Type Safety & Validation** utilizing `@t3-oss/env-nextjs` with Zod schema validation to eliminate build-time configuration errors across server and client runtimes.
> - **Integrated Better Auth & Advanced UI Physics** deploying OAuth authentication providers, Lenis inertial smooth scrolling engine, and Framer Motion v12 fluid micro-interactions.

### Option 2: Full-Stack & Frontend Focused
> - **Engineered High-Performance Web Application** with Next.js 15 (App Router, Turbopack), TypeScript 5, Framer Motion v12, and Lenis smooth scroll engine for responsive user experience.
> - **Designed Custom Component Design System** featuring dynamic typewriter text rendering, interactive robot mascot animations, custom status badge indicators, and modular layout sections.
> - **Integrated Async Data Handling & OAuth Security** leveraging TanStack Query v5 for API state caching, Zustand for client state, and Better Auth for secure multi-provider authentication.

### Option 3: Concise 2-Bullet Version (Compact Resume Space)
> - **Next.js 15 Developer & AI Showcase Platform:** Built a full-stack web application using Next.js 15, React 19, TypeScript 5, and Tailwind CSS 4 to showcase deep learning, time-series forecasting, and cloud GPU architectures.
> - **Type-Safe Full-Stack Infrastructure:** Implemented Zod environment schema validation, Better Auth OAuth authentication, Lenis smooth scrolling engine, and Framer Motion micro-interactions.

---

## Master AI Prompts (For Tailoring Resumes & Cover Letters)

Use these prompts in LLM tools (ChatGPT, Claude, Gemini) when applying to specific job postings:

### Master Prompt 1: Tailored Resume Bullet Generator
```text
Act as an expert technical resume writer. I have built a Next.js 15 Portfolio application showcasing my Data Science and AI Engineering work with the following stack:
- Web Stack: Next.js 15 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS 4, Framer Motion v12, Lenis smooth scroll.
- Security & State: Better Auth (GitHub & Google OAuth), Zod + @t3-oss/env-nextjs schema validation, TanStack Query v5, Zustand.
- AI & Data Science Showcase: Modal GPU serverless AI music pipeline (PyTorch, SDXL, Qwen2-7B), TB-MTNet medical imaging (Inception-v3 + Transformer, 0.983 AUROC, Grad-CAM), Stock Price LSTM Predictor (FastAPI, Streamlit, 1.22% MAPE).

Please generate 4 high-impact, quantified resume bullet points tailored for the following Job Description using the STAR method:
[PASTE JOB DESCRIPTION HERE]
```

### Master Prompt 2: Technical Interview Preparation Prompt
```text
Act as a Senior AI & Full-Stack Engineering Manager interviewing me for a role. Based on my Next.js 15 portfolio architecture and AI project portfolio (Modal GPU serverless orchestration, Zod schema validation, Better Auth OAuth sessions, Lenis scroll engine, and FastAPI deep learning deployments), ask me 5 challenging technical interview questions with concise target answers.
```

---

## Key Metrics & Technologies Summary

| Category | Technology / Pattern | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router), Turbopack | Core full-stack architecture & dev server |
| **UI & Motion** | Tailwind CSS 4, Framer Motion v12, Lenis | Modern responsive styling, micro-animations & smooth physics scroll |
| **Type Safety** | TypeScript 5, Zod, `@t3-oss/env-nextjs` | Compile-time & runtime environment schema validation |
| **State & Caching**| TanStack Query v5, Zustand | Asynchronous API state management & client state hydration |
| **Authentication** | Better Auth, GitHub & Google OAuth | Secure user sessions, rolling cookie cache & social OAuth |
| **AI/ML Showcase** | PyTorch, TensorFlow, Modal GPUs, FastAPI | Deep learning medical imaging, LLM pipelines, time-series forecasting |

---
*Generated for Manish Choudhary — Data Science & AI Engineer | Computer Science & Engineering*
