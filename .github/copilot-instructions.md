# Cardápio (Restaurant Menu) - AI Coding Instructions

## Project Overview

This is a Next.js 16 e-commerce menu application for a restaurant ("Bella Massa") built with React 19, TypeScript, and Tailwind CSS. It's a single-page app that allows customers to browse products (pizzas, burgers, combos), add items to cart with customization options, and place orders via WhatsApp.

## Architecture & Key Patterns

### State Management

- **Zustand** (`src/store/cartStore.ts`) is the single source of truth for cart state
- Cart items include unique IDs composed of: `{product.id}-{size}-{extras}` to handle variants as separate items
- No server-side state - everything is client-side with React Server Components disabled (all components use `"use client"`)

### Data Model

- Products are statically defined in `src/data/products.ts`
- All products have a `category` (union type), `basePrice`, and optional `sizes` object for pizzas
- Categories and extras are exported from the same file as separate arrays
- Product interface: `{ id, name, description, basePrice, category, image?, sizes? }`

### Component Structure

- **Page composition**: `page.tsx` imports all top-level components and manages local state for search/filters
- **Modal pattern**: `ProductCard` opens `ProductModal` for product customization before adding to cart
- **Sheet pattern**: `Cart` uses shadcn/ui Sheet for slide-in cart drawer
- All UI components are from **shadcn/ui** in `src/components/ui/` (pre-configured with "new-york" style)

### WhatsApp Integration

- No backend - orders are sent directly via WhatsApp Web API (`wa.me/{phone}?text={message}`)
- Message formatting in `Cart.tsx` uses URL-encoded strings with line breaks (`%0A`)
- Phone numbers hardcoded in components (see `WhatsAppButton.tsx` and `Cart.tsx`)

## Development Workflow

### Running the App

```bash
npm run dev    # Starts dev server on localhost:3000
npm run build  # Production build
npm start      # Run production build
```

### Adding New Products

1. Add product object to `products` array in `src/data/products.ts`
2. Use existing categories or add new category to union type + `categories` array
3. For pizzas: include `sizes` object with all four keys (pequena, media, grande, familia)
4. For non-pizza items: omit `sizes`, use `basePrice` only

### Adding New UI Components

- This project uses shadcn/ui components installed via `npx shadcn@latest add <component>`
- Import paths use `@/` alias (maps to `./src/`)
- Style utilities: `cn()` helper from `src/lib/utils.ts` combines clsx + tailwind-merge

## Important Conventions

### TypeScript Patterns

- All components use explicit type interfaces (e.g., `ProductCardProps`, `CartProps`)
- Product categories use discriminated union types, not string literals
- Cart item IDs are composite strings to enable variant differentiation

### Styling

- Tailwind CSS with CSS variables for theming (defined in `src/app/globals.css`)
- Responsive breakpoints: mobile-first with `sm:`, `md:`, `lg:`, `xl:` prefixes
- Icons from **lucide-react** (not react-icons or heroicons)

### React Patterns

- All components use `"use client"` directive (Next.js 16 with App Router)
- useState for local UI state, Zustand for global cart state
- Toast notifications via **sonner** library (imported as `toast` from "sonner")

## File Organization

```
src/
├── app/                 # Next.js App Router (layout, page, globals.css)
├── components/          # Feature components (Header, Cart, ProductCard, etc.)
│   └── ui/              # shadcn/ui components (don't modify directly)
├── data/                # Static data (products, categories, extras)
├── hooks/               # Custom hooks (use-mobile, use-toast)
├── lib/                 # Utilities (cn helper)
└── store/               # Zustand stores (cartStore)
```

## Common Tasks

### Modifying Cart Logic

- Edit `src/store/cartStore.ts` - it's a Zustand store with actions (addItem, removeItem, etc.)
- Cart item deduplication happens in `addItem` based on `id + size + extras` combination

### Changing WhatsApp Number

- Update hardcoded phone numbers in `src/components/WhatsAppButton.tsx` and `src/components/Cart.tsx`
- Format: `"5511999999999"` (country code + area code + number)

### Adding Product Customization (Extras)

- Extras defined in `src/data/products.ts` as `{ id, name, price }[]`
- Modal displays extras as checkboxes (`ProductModal.tsx` lines ~120-150)
- Price calculation adds extra prices to base/size price

### Styling Changes

- Global styles and CSS variables: `src/app/globals.css`
- Component-specific: inline Tailwind classes
- Theme config: `components.json` defines shadcn/ui settings

## Dependencies Notes

- **Next.js 16** + **React 19** (latest versions, may have breaking changes from v15)
- **Zustand 5** for state (simpler than Redux/Context)
- **shadcn/ui** components are copied into repo (not a package dependency)
- No testing framework configured yet
