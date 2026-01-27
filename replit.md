# Ameena Travels - Luxury Vehicle Rental Website

## Overview
Ameena Travels is a production-ready luxury vehicle rental website for a business based in Hyderabad, India. The website offers wedding cars, self-drive rentals, airport transfers, corporate transport, buses, and motorcycle/bike rentals.

## Current State
- **Status**: Production-ready, pending final deployment
- **Framework**: React + Vite + TypeScript + Tailwind CSS + Shadcn/UI
- **Routing**: React Router DOM v6

## Recent Changes (January 27, 2026)
- Migrated project from Lovable to Replit environment
- Removed all Lovable references (lovable-tagger package, README, vite.config.ts)
- Added bike/motorcycle rental category with 8 vehicles
- Fixed footer placeholder links (Privacy Policy, Terms of Service)
- Added Bike Rentals to footer navigation

## Project Architecture

### Key Directories
- `src/pages/` - Page components (Home, Fleet, NotFound)
- `src/components/` - Reusable UI components (Navbar, Footer, sections)
- `src/data/` - Static data files (carImages.ts, bikeImages.ts)
- `src/lib/` - Utility functions and constants

### Fleet Structure
| Category | Count | Description |
|----------|-------|-------------|
| Wedding | 8 | Luxury cars for weddings/events |
| Self-Drive | 10 | Self-drive rental vehicles |
| Buses | 3 | Mini and luxury buses |
| Airport | 3 | Airport transfer vehicles |
| Corporate | 3 | Corporate event vehicles |
| Bikes | 8 | Motorcycle rentals |
| **Total** | **35** | All vehicles |

### Contact Information
- Phone: +91 93925 54899
- WhatsApp integration for booking
- Location: Hyderabad, India

## User Preferences
- Dark theme with gold (#DAA520) accent colors
- Luxury/premium branding aesthetic
- Mobile-first responsive design
- WhatsApp-based booking flow

## Development
```bash
npm run dev  # Start development server on port 5000
npm run build  # Build for production
```

## Deployment
- Configured for static site deployment
- netlify.toml configured with SPA routing
- Build output: `dist/` directory
