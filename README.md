# Toyota Material Handling - Forklift Ranges

A modern, responsive Vue.js application for browsing Toyota forklift product ranges with advanced filtering capabilities.

## 🚀 Project Overview

This project is a frontend application built with **Nuxt 3** and **Vue 3** that displays Toyota Material Handling forklift products with real-time filtering functionality. The application fetches data from a REST API and provides an intuitive user interface for product discovery.

### 🎯 Key Features

- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔍 Advanced Filtering** - Usage intensity, transport distance, and load capacity filters
- **⚡ Real-time API Integration** - Dynamic data fetching from external API
- **🎨 Smooth Animations** - Transition effects for filtering and interactions
- **📄 Pagination** - Efficient product browsing with page navigation
- **♿ Accessibility** - WCAG compliant with proper ARIA labels
- **🎯 TypeScript** - Fully typed for better development experience
- **🔧 Modular Architecture** - Component-based structure for maintainability

## 🛠️ Tech Stack

- **Framework:** Nuxt 3 (Vue 3)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Nuxt Icon with Iconify
- **Image Optimization:** Nuxt Image
- **HTTP Client:** Built-in useFetch
- **State Management:** Vue 3 Composition API

## 📁 Project Structure

```
toyota/forklift-ui/
├── assets/
│   └── css/
│       └── main.css          # Global styles and animations
├── components/
│   ├── base/
│   │   ├── Header.vue        # Application header
│   │   └── Footer.vue        # Application footer
│   ├── filters/
│   │   ├── UsageIntensityFilter.vue    # Usage intensity selector
│   │   ├── TransportDistanceFilter.vue # Transport distance selector
│   │   └── LoadCapacityFilter.vue      # Load capacity range slider
│   ├── sections/
│   │   ├── FiltersSection.vue          # Main filters container
│   │   └── ProductsSection.vue         # Products grid with pagination
│   └── ui/
│       └── cards/
│           └── Product.vue             # Individual product card
├── composables/
│   ├── useFilters.ts         # Filter data management
│   └── useProducts.ts        # Product data management
├── layouts/
│   └── default.vue           # Default page layout
├── pages/
│   └── index.vue             # Main products page
├── types/
│   ├── api.d.ts              # API response types
│   ├── filter.d.ts           # Filter-related types
│   └── product.d.ts          # Product types
└── public/
    └── assets/images/        # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd toyota/forklift-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Utilities
npm run generate     # Generate static site
```

## 🎨 Features Deep Dive

### 🔍 Advanced Filtering System

- **Usage Intensity Filter:** 5-level intensity selector (Low to High)
- **Transport Distance Filter:** 5-level distance selector (Short to Long)
- **Load Capacity Filter:** Interactive range slider with input fields
- **Real-time Updates:** Filters apply immediately without page refresh
- **Filter Chips:** Visual indicators of active filters with easy removal

### 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Breakpoints:**
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (4 columns)

### ⚡ Performance Optimizations

- **Lazy Loading:** Images load as needed
- **Image Optimization:** WebP format with fallbacks
- **Component Splitting:** Modular architecture for better tree-shaking
- **TypeScript:** Better development experience and catch errors early

### 🎯 API Integration

- **Base URL:** `https://api-forklift.code95.info/v1/`
- **Endpoints:**
  - `GET /products` - Fetch all products
  - `GET /products/filters` - Fetch filter options and ranges
- **Error Handling:** Graceful fallbacks for API failures
- **Loading States:** User feedback during data fetching

## 🏗️ Component Architecture

### Core Components

1. **FiltersSection.vue** - Stateless filter UI that receives props and emits events
2. **ProductsSection.vue** - Product grid with pagination and transitions
3. **Product.vue** - Reusable product card component

### Composables

1. **useFilters.ts** - Manages filter data and API calls
2. **useProducts.ts** - Handles product data fetching and state

### Type Safety

Full TypeScript implementation with:

- API response types
- Component prop interfaces
- Event emission types
- Filter and product data structures

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Component-scoped styles** for specific animations
- **Global animations** in main.css for reusability
- **Consistent design tokens** for spacing, colors, and typography

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Static Generation

```bash
npm run generate
```

The application can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📊 Performance Considerations

- **Image Optimization:** Automatic WebP conversion and responsive images
- **Code Splitting:** Automatic route-based code splitting
- **Lazy Loading:** Components and images load on demand
- **Minimal Bundle Size:** Tree-shaking removes unused code
- **Caching:** Proper HTTP caching headers for static assets

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 👨‍💻 Development Notes

This project demonstrates proficiency in:

- **Vue 3 Composition API** - Modern reactive programming
- **Nuxt 3** - Full-stack Vue framework
- **TypeScript** - Type-safe development
- **API Integration** - RESTful API consumption
- **Responsive Design** - Mobile-first CSS
- **Component Architecture** - Reusable, maintainable components
- **State Management** - Reactive data management
- **Performance Optimization** - Fast, efficient applications

## 📝 License

This project is for demonstration purposes as part of a Vue.js developer application.

---

**Built By Nehal using Vue 3, Nuxt 3, and TypeScript**
