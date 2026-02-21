# TSES Frontend Developer Technical Assessment

## Live Demo

[Add your Vercel URL here]

## Project Overview

This project demonstrates a responsive frontend application built with modern web technologies, showcasing proficiency in React, Next.js, TypeScript, and state management(Redux Toolkit) .

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **API Integration:** RTK Query
- **Deployment:** Vercel

## Folder Structure

## Getting Started

src/
├── app/
│ ├── store/
│ │ ├── store.ts # Redux store configuration
│ │ ├── features/
│ │ │ └── user/ # User slice for dummy auth
│ │ └── api/
│ │ └── apiSlice.ts # RTK Query API configuration
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── common/ # Shared components (Header, Footer)
│ ├── sections/ # Page sections from Figma
│ └── ui/ # Reusable UI components
├── hooks/ # Custom hooks
├── types/ # TypeScript type definitions
└── utils/ # Utility functions

## Setup Instructions

### Prerequisites

- Node.js 18+
- pnpm or npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/okekevicktur/victor-tses-assessment.git
   cd victor-tses-assessment

   ```

2. Install dependencies

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features Implemented

- Redux Toolkit Setup
- Configured store with user slice
- Dummy authentication state with toggle action
- Type-safe hooks (useAppDispatch, useAppSelector)
- RTK Query Integration
- API slice with multiple endpoints
- Mock data for courses
- Real API integration with JSONPlaceholder
- Proper caching and invalidation
- Component Architecture
- Reusable UI components (Button, Card, Container)
- Separation of concerns
- TypeScript interfaces for all props

### Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints
- Flexible grid layouts

## Deployment

The application is deployed on Vercel:
[Live Demo URL]

License
This project is created for assessment purposes.

Author
Victor Okeke
