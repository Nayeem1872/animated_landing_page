# Installed UI Libraries

This document outlines the UI libraries that have been installed in your project and how to use them.

## 1. Framer Motion

For animations and transitions in React components.

**Usage:**

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content here
</motion.div>;
```

## 2. Shadcn UI

A collection of accessible, customizable UI components built with Radix UI and Tailwind CSS.

**Usage:**
Components can be added using the shadcn CLI:

```bash
npx shadcn-ui@latest add button
```

## 3. Aceternity UI

Beautiful animated components and effects for modern web applications.

**Usage:**
Import components directly:

```tsx
import { TypewriterEffect } from "aceternity-ui";
```

## 4. 21st Dev

Design engineering tools and components.

**Usage:**

```tsx
import { SomeComponent } from "@21st-dev/magic";
```

## Available Components

- [Button Component](./src/components/ui/button.tsx) - A custom animated button using Framer Motion

## Dependencies Installed

- `framer-motion` - For animations
- `@shadcn/ui` - UI component library
- `aceternity-ui` - Animated UI components
- `@21st-dev/magic` - Design engineering tools
- `@21st-extension/toolbar-react` - Toolbar components
- `@radix-ui/*` - Radix UI primitives
- `@tabler/icons-react` - Icon library
- `class-variance-authority` - Component variance management
- `clsx` - Conditional class management
- `tailwind-merge` - Class merging utility
- `tailwindcss-animate` - Tailwind CSS animation plugin

## Getting Started

1. To use the custom button component:

```tsx
import { Button } from "@/components/ui/button";

<Button animate>Click me</Button>;
```

2. To add more shadcn components:

```bash
npx shadcn-ui@latest add [component-name]
```
