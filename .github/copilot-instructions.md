# Portfolio Codebase Guide for AI Agents

## Project Overview
React + Vite portfolio website with scroll-triggered animations, 3D fog effects (Vanta.js + Three.js), and an infinite carousel for project showcase.

**Tech Stack:** React 19, Vite, Anime.js, Three.js, Vanta.js  
**Architecture:** Component-based with custom hooks for animations and scroll detection

## Key Architecture Patterns

### 1. Component Structure
- **Page Layout:** `src/App.jsx` orchestrates main sections (Home, AboutMe, Works, Contact, Footer)
- **Navigation:** `Sidebar` component provides persistent navigation
- **Scroll Effects:** Vanta.js fog effect initialized in App.jsx as background
- **Component Organization:** Each major section in `src/components/{sectionName}/` with related styles and subcomponents

```
src/components/
├── home/ (Hero section with Vanta.js effect)
├── aboutMe/ (About section with icon showcase)
├── works/ (Project carousel - **key component**)
├── contact/ (Contact information)
├── footer/ (Site footer)
└── sidebar/ (Navigation component)
```

### 2. Critical Component: ImageSlider (Infinite Carousel)
**Location:** `src/components/works/ImageSlider.jsx`

This is a heavily-tuned infinite carousel with:
- **9 total images** (3 sets of 3 unique images) for performance
- **Seamless wrapping:** After scrolling through all images, jumps back to center position invisibly
- **Responsive visibility:** Shows 1/2/3 images based on screen width breakpoints
- **Smooth transitions:** 300ms cubic-bezier animations with transition flag to disable during wrap

**Critical Pattern:** When `newIndex` crosses boundaries (>= 6 or < 3), it resets to middle set without visible jump:
```jsx
if (newIndex >= images.length * 2) {
    resetIndex = images.length; // Jump to set 2 start
} else if (newIndex < images.length) {
    resetIndex = images.length * 2; // Jump to set 3 start
}
```

### 3. Scroll Animation Hook
**Location:** `src/hooks/useScrollAnimation.js`

Custom hook using Intersection Observer for scroll-triggered animations:
- **Options:** `threshold`, `rootMargin`, `animation` class name, `once` flag
- **Pattern:** Adds/removes CSS class to trigger animations based on visibility
- **CSS Location:** Animations defined in `src/styles/scrollAnimations.css`

Usage example:
```jsx
const { ref } = useScrollAnimation({ threshold: 0.1, animation: 'fadeIn' });
return <div ref={ref} className="animated-element">Content</div>
```

### 4. 3D Background Effect
**Location:** `src/App.jsx`, initialized with `Vanta.FOG` + Three.js
- Initializes once on mount, cleaned up on unmount
- Requires ref attached to container div
- Three.js is heavy; only needed in App root

## CSS Conventions

### Box Shadow Overlay Pattern
**File:** `src/components/works/ImageSlider.css`

For visible overlays on images, use `::after` pseudo-element with `pointer-events: none`:
```css
.slider-image-container::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    box-shadow: inset 0 0 100px rgba(18, 7, 180, 0.7);
    pointer-events: none;
    transition: box-shadow 0.3s ease; /* For hover effects */
}
```

## Build & Development

- **Dev:** `npm run dev` (Vite dev server)
- **Build:** `npm run build` (Production bundle)
- **Lint:** `npm run lint` (ESLint)
- **Preview:** `npm run preview` (Local production preview)

## Common Modification Points

1. **Adding New Projects to Carousel:** Edit `images` array in `ImageSlider.jsx`
2. **Adjusting Carousel Responsiveness:** Modify `visibleCount` breakpoints (currently 1/<1400, 2/<2000, 3/default)
3. **Scroll Animation Triggers:** Use `useScrollAnimation()` hook with custom `rootMargin` values
4. **Colors & Theme:** CSS files in component directories and `src/styles/`

## Performance Notes

- ImageSlider uses 9 DOM elements (3 image sets) - sufficient for infinite scroll without reloading
- Vanta.js fog effect is GPU-intensive; consider disabling on low-end devices
- Lazy loading images not currently implemented (images are small)

## Git Workflow
- Main branch: deployed version
- Commit message convention: component-focused (e.g., "ImageSlider: fix wrap-around logic")
