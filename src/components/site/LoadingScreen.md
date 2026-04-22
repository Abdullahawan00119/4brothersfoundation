# LoadingScreen Component

## Overview

The `LoadingScreen` component provides a full-screen loading animation displayed during initial page load. It features the organization's logo with smooth fade-in/scale animations, an animated loading indicator, and a smooth fade-out transition.

## Features

- ✅ Full-screen loading animation with custom logo
- ✅ Fade-in logo animation (0-400ms)
- ✅ Loading indicator animation (400ms-complete)
- ✅ Smooth fade-out transition (200ms)
- ✅ Minimum display time of 800ms to avoid flash
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Glow effect behind logo
- ✅ Animated loading dots

## Props

```typescript
interface LoadingScreenProps {
  isLoading: boolean;        // Controls visibility of loading screen
  onLoadComplete?: () => void; // Optional callback when fade-out completes
}
```

## Animation Sequence

1. **Logo Animation (0-400ms)**: Logo fades in and scales from 0.8 to 1.0
2. **Loading Indicator (400ms+)**: Three animated dots appear with staggered timing
3. **Fade Out (200ms)**: Entire screen fades out when loading completes

## Minimum Display Time

The component enforces a minimum display time of 800ms to prevent jarring flashes on fast connections. Even if `isLoading` becomes `false` before 800ms, the component will remain visible until the minimum time has elapsed.

## Usage

### Basic Usage

```tsx
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/site/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    const loadResources = async () => {
      await Promise.all([
        // Load critical resources
        fetch('/api/config'),
        document.fonts.ready,
      ]);
      
      setIsLoading(false);
    };

    loadResources();
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <YourApp />
    </>
  );
}
```

### With Callback

```tsx
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    console.log("Loading screen animation completed");
    // Additional logic after loading screen is fully hidden
    // e.g., start analytics, show welcome message, etc.
  };

  return (
    <LoadingScreen 
      isLoading={isLoading} 
      onLoadComplete={handleLoadComplete}
    />
  );
}
```

### Integration with TanStack Router

To integrate the LoadingScreen at the application root level, modify `src/routes/__root.tsx`:

```tsx
import { useState, useEffect } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function RootComponent() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    
    if (hasLoaded) {
      // Skip loading screen on subsequent navigations
      setIsInitialLoad(false);
    } else {
      // Show loading screen on first visit
      sessionStorage.setItem("hasLoaded", "true");
      
      // Wait for critical resources
      Promise.all([
        document.fonts.ready,
        // Add other critical resources here
      ]).then(() => {
        setIsInitialLoad(false);
      });
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isInitialLoad} />
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
```

### Show Only on First Visit

```tsx
function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show on first visit
    return !sessionStorage.getItem("hasVisited");
  });

  useEffect(() => {
    if (isLoading) {
      sessionStorage.setItem("hasVisited", "true");
      
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [isLoading]);

  return <LoadingScreen isLoading={isLoading} />;
}
```

## Styling

The component uses the following Tailwind classes and custom styles:

- `bg-gradient-hero`: Custom gradient background (navy gradient)
- `bg-gold`: Gold color from theme
- `text-white/70`: Semi-transparent white text
- Fixed positioning with `z-50` to overlay entire screen

## Animation Details

### Logo Animation
- Initial: `opacity: 0, scale: 0.8`
- Animate: `opacity: 1, scale: 1`
- Duration: 400ms
- Easing: ease-out

### Glow Effect
- Pulsing opacity: `[0.3, 0.6, 0.3]`
- Duration: 2s
- Repeat: Infinite

### Loading Dots
- Three dots with staggered animation
- Delay: 0ms, 200ms, 400ms
- Opacity: `[0.3, 1, 0.3]`
- Scale: `[0.8, 1.2, 0.8]`
- Duration: 1.2s per cycle

### Fade Out
- Duration: 200ms
- Triggered when both `isLoading` is false AND minimum time has elapsed

## Accessibility

- Uses semantic HTML
- Logo has descriptive alt text
- Respects user motion preferences (via Framer Motion)
- High contrast colors for visibility

## Performance

- Uses GPU-accelerated properties (`opacity`, `scale`)
- Minimal DOM elements
- Efficient animation with Framer Motion
- Lazy unmounting after fade-out completes

## Browser Support

Works in all modern browsers that support:
- CSS transforms
- CSS opacity
- ES6+ JavaScript
- Framer Motion requirements

## Requirements Satisfied

This component satisfies the following requirements from the spec:

- **Requirement 1.1**: Full-screen loading animation with custom logo ✅
- **Requirement 1.2**: Smooth transition effects (300-800ms) ✅
- **Requirement 1.4**: Fade out smoothly once resources loaded ✅
- **Requirement 1.5**: Visually consistent with design aesthetic ✅

## Testing

See `LoadingScreen.test.tsx` for unit tests covering:
- Rendering when isLoading is true
- Hiding when isLoading is false
- Minimum display time enforcement
- onLoadComplete callback timing
- Logo and loading indicator presence

## Troubleshooting

### Loading screen doesn't appear
- Ensure `isLoading` prop is set to `true`
- Check that component is rendered in the DOM
- Verify z-index isn't being overridden

### Loading screen doesn't disappear
- Ensure `isLoading` is being set to `false`
- Check browser console for errors
- Verify minimum 800ms has elapsed

### Animation is choppy
- Check for other heavy operations during load
- Ensure GPU acceleration is enabled
- Verify Framer Motion is properly installed

## Related Components

- `Hero`: Uses similar animation patterns
- `SiteHeader`: Navigation component
- `Reveal`: Scroll-based animation wrapper
