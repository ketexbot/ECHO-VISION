# Echo Vision - Replit Project

## Overview
Echo Vision is a production-ready full-stack React application showcasing an innovative haptic feedback navigation system. Built with React 18, TypeScript, Vite, and Express, it demonstrates modern web development practices with a beautiful, responsive UI.

## Current State
The application is fully configured and running in the Replit environment:
- Development server running on port 5000
- Hot Module Replacement (HMR) properly configured for Replit
- Backend API integrated with frontend
- Ready for deployment

## Recent Changes (October 4, 2025)
- Configured Vite dev server for Replit environment
  - Changed port from 8080 to 5000
  - Set host to 0.0.0.0 for accessibility
  - Configured HMR to use Replit domain for WebSocket connection
- Set up development workflow using pnpm
- Configured deployment settings for autoscale deployment
- Backend API verified and working

## Tech Stack
- **Package Manager**: pnpm (preferred)
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite
- **Backend**: Express server integrated with Vite dev server
- **Styling**: TailwindCSS 3 + Radix UI components
- **Build Tool**: Vite 7
- **Testing**: Vitest
- **3D Graphics**: Three.js with React Three Fiber

## Project Structure
```
client/              # React frontend
├── pages/          # Route components
├── components/     # UI components
│   ├── layout/    # Layout components
│   ├── sections/  # Page sections
│   └── ui/        # Reusable UI components (Radix UI)
├── hooks/         # Custom React hooks
└── lib/           # Utility functions

server/             # Express backend
├── routes/        # API route handlers
├── index.ts       # Server setup
└── node-build.ts  # Production server entry

shared/            # Shared TypeScript types
```

## Development Commands
- `pnpm dev` - Start development server (port 5000)
- `pnpm build` - Build for production
- `pnpm start` - Run production server
- `pnpm test` - Run tests
- `pnpm typecheck` - Run TypeScript type checking

## API Endpoints
- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint

## Deployment
Configured for Replit Autoscale deployment:
- Build command: `pnpm build`
- Run command: `pnpm start`
- Serves static SPA files with API routes

## User Preferences
- Prefer pnpm for package management
- Follow existing code patterns and structure
- Keep API endpoints minimal (only when necessary for server-side logic)
