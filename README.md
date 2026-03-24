# Developmental Milestones

A React + TypeScript reference app for browsing developmental milestones from birth through 6 years.

## Overview

This project provides a clean, filterable interface for milestone data organized by:

- **Age group** (birth to 6 years)
- **Developmental domain** (e.g., gross motor, fine motor, language, social-emotional)

The app is intended as a quick educational reference and includes a reminder that it does not replace professional developmental assessment.

## Features

- Age-based milestone navigation
- Domain filtering with multi-select behavior
- Milestone count for active filters
- Fast in-app milestone search
- Responsive card-based layout

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Routing:** React Router
- **UI:** Tailwind CSS + shadcn/ui + Radix primitives
- **Data/state helpers:** TanStack Query (provider scaffolded)
- **Testing:** Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run test` — run Vitest once
- `npm run test:watch` — run Vitest in watch mode

## Project Structure

```text
src/
  components/        # Reusable UI and milestone components
  data/              # Milestone dataset and domain types
  pages/             # Route pages
  hooks/             # Shared hooks
```

## Data Source & Disclaimer

Milestone content is based on:

> Scharf, R. J., Scharf, G. J., & Stroustrup, A. (2016). Developmental Milestones. *Pediatrics in Review*.

This repository is for reference and educational use only.
