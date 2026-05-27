---
name: Vibrant Tech
colors:
  surface: "#081326"
  surface-dim: "#081326"
  surface-bright: "#2f394e"
  surface-container-lowest: "#040e21"
  surface-container-low: "#111b2f"
  surface-container: "#151f33"
  surface-container-high: "#202a3e"
  surface-container-highest: "#2b354a"
  on-surface: "#d8e2fd"
  on-surface-variant: "#bec8ce"
  inverse-surface: "#d8e2fd"
  inverse-on-surface: "#263045"
  outline: "#899298"
  outline-variant: "#3f484e"
  surface-tint: "#7bd1fa"
  primary: "#c5eaff"
  on-primary: "#003547"
  primary-container: "#7dd3fc"
  on-primary-container: "#005b78"
  inverse-primary: "#006686"
  secondary: "#a0cde5"
  on-secondary: "#003548"
  secondary-container: "#1f4e63"
  on-secondary-container: "#92bed7"
  tertiary: "#f1ddff"
  on-tertiary: "#411e65"
  tertiary-container: "#ddbaff"
  on-tertiary-container: "#66438b"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#c0e8ff"
  primary-fixed-dim: "#7bd1fa"
  on-primary-fixed: "#001e2b"
  on-primary-fixed-variant: "#004d66"
  secondary-fixed: "#c0e8ff"
  secondary-fixed-dim: "#a0cde5"
  on-secondary-fixed: "#001e2b"
  on-secondary-fixed-variant: "#1c4c60"
  tertiary-fixed: "#f0dbff"
  tertiary-fixed-dim: "#dcb8ff"
  on-tertiary-fixed: "#2b024f"
  on-tertiary-fixed-variant: "#59367d"
  background: "#081326"
  on-background: "#d8e2fd"
  surface-variant: "#2b354a"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
---

# Design System

## Brand & Style

The brand identity has shifted from a warm, professional tone to a high-energy, tech-forward aesthetic. It evokes feelings of innovation, clarity, and digital precision. The target audience is modern power users who appreciate a "Vibrant" look that balances high-contrast energy with deep, focused backgrounds.

The style leans into **Corporate / Modern** with a touch of **Glassmorphism**. It utilizes a dark, immersive environment where bright accent colors pop to draw attention to key actions and data. The UI is designed to feel fast, fluid, and responsive.

## Colors

This system uses a **dark color mode** to provide a sophisticated, low-strain backdrop. The primary color is a bright, sky-blue (#7dd3fc), used for main calls to action and active states. The secondary color (#88b4cc) provides a more muted blue-grey for supportive elements. The tertiary color is a soft lavender (#c8a0f0), adding a splash of variety for special highlights or distinct categories. The neutral base is a deep navy-charcoal (#1a2438), serving as the foundation for backgrounds and containers.

## Typography

The system uses **Inter** for all typographic roles. Inter provides excellent legibility in dark environments and a clean, neutral character that supports the "Vibrant" tech theme. Headlines are bold and clear, while body text uses a generous line height to ensure readability against the dark background. Labels use a slightly higher weight and increased letter spacing to remain distinct at smaller sizes.

## Layout & Spacing

The layout follows a **fluid grid** philosophy. Content stretches to fill the screen while maintaining consistent inner margins. We use an 8px base spacing unit to create a rhythmic hierarchy. On mobile, we use 16px side margins, which expand to 24px on desktop to provide more breathing room for complex data visualizations and multi-column layouts.

## Elevation & Depth

Depth is created through **tonal layers** and subtle **glassmorphism**. Instead of heavy shadows, higher-elevation elements use slightly lighter variants of the neutral background color. Subtle 1px borders with low opacity help define boundaries. Backdrop blurs are used on navigation bars and overlays to maintain context while focusing the user's attention.

## Shapes

The UI utilizes a **Rounded** shape language. Standard components like buttons and input fields have a 0.5rem (8px) corner radius. Larger containers, such as cards, use a 1rem (16px) radius. This moderate rounding softens the high-contrast color palette, making the interface feel approachable and modern without being overly playful.

## Components

- **Buttons:** Primary buttons use the primary sky-blue background with dark text for maximum contrast. Secondary buttons use an outlined style.
- **Input Fields:** Dark backgrounds with a subtle border that glows with the primary color when focused.
- **Cards:** Use a slightly elevated neutral surface with 16px padding and 16px corner radius.
- **Chips:** Small, rounded elements using secondary or tertiary colors with low-opacity backgrounds to denote categories or tags.
