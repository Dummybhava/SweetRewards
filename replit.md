# Dakshi Delight Loyalty Program

## Overview

This is a modern full-stack web application for a loyalty program system for "Dakshi Delight", a confectionery business. The application features a React frontend with a Node.js/Express backend, designed to manage customer loyalty points and rewards. The system is built with TypeScript and uses modern web development practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand colors
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful API with /api prefix for all endpoints

### Key Components

#### Database Layer
- **Schema**: Centralized in `/shared/schema.ts` using Drizzle ORM
- **Models**: User management with username/password authentication
- **Migrations**: Managed through Drizzle Kit with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

#### Authentication & Security
- Session-based authentication using PostgreSQL store
- Password hashing and validation (implementation pending)
- CORS and security middleware configured for Express

#### UI/UX Design
- **Design System**: Custom brand colors for Dakshi Delight (orange, yellow, red, cream, brown)
- **Component Library**: Comprehensive shadcn/ui component set
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Custom CSS animations for sparkles and interactive elements
- **Accessibility**: Built on Radix UI for ARIA compliance

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Layer**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: Client-side caching and synchronization via React Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Production bundling for server code

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with HMR for frontend
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: Neon serverless PostgreSQL for development

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Environment**: NODE_ENV-based configuration

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend (`client/`), backend (`server/`), and shared code (`shared/`) in one repository for easier development and type sharing

2. **Type-Safe Database**: Drizzle ORM chosen for excellent TypeScript integration and serverless compatibility over traditional ORMs

3. **Component-First UI**: shadcn/ui provides consistent, accessible components while allowing customization for brand requirements

4. **Session-Based Auth**: PostgreSQL sessions chosen over JWT for better security and server-side session management

5. **Development-First Storage**: In-memory storage implementation allows rapid prototyping before database setup

6. **Build Optimization**: Separate build processes for client (Vite) and server (ESBuild) optimize for their respective environments

The application is currently in early development with a loyalty program landing page implemented and backend infrastructure prepared for expansion.