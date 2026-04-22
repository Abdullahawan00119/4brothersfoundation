# Reveal Component

A reusable wrapper component for scroll-triggered animations that enhances user experience with smooth, accessible entrance effects.

## Overview

The `Reveal` component uses Intersection Observer (via `react-intersection-observer`) and Framer Motion to create smooth scroll-triggered animations. It automatically respects user accessibility preferences and provides flexible configuration options.

## Features

- ✅ **Scroll-triggered animations**: Content animates when entering the viewport
- ✅ **Multiple directions**: Supports up, down, left, and right animations
- ✅ **Staggered animations**: Configurable delay for sequential reveals
- ✅ **Accessibility**: Respects `prefers-reduced-motion` media query
- ✅ **Flexible**: Supports different HTML elements and custom styling
- ✅ **Performance**: Uses GPU-accelerated transforms (opacity, x, y)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Content to be revealed |
| `delay` | `number` | `0` | Animation delay in seconds (useful for staggered effects) |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction of the entrance animation |
| `once` | `boolean` | `true` | Whether to animate only on first viewport entry |
| `className` | `string` | `undefined` | Additional CSS classes for the wrapper |
| `as` | `'div' \| 'section' \| 'article' \| 'header'` | `'div'` | HTML element to render |

## Usage Examples

### Basic Usage

```tsx
import { Reveal } from "@/components/site/Reveal";

function MyComponent() {
  return (
    <Reveal>
      <div>This content will slide up and fade in</div>
    </Reveal>
  );
}
```

### Different Directions

```tsx
// Slide from bottom (default)
<Reveal direction="up">
  <div>Slides up</div>
</Reveal>

// Slide from top
<Reveal direction="down">
  <div>Slides down</div>
</Reveal>

// Slide from right
<Reveal direction="left">
  <div>Slides from right to left</div>
</Reveal>

// Slide from left
<Reveal direction="right">
  <div>Slides from left to right</div>
</Reveal>
```

### Staggered Animations

Create sequential reveals by adding delays:

```tsx
<div className="grid grid-cols-3 gap-4">
  {items.map((item, index) => (
    <Reveal key={item.id} delay={index * 0.1}>
      <Card>{item.content}</Card>
    </Reveal>
  ))}
</div>
```

### Repeating Animations

By default, animations trigger only once. Set `once={false}` to animate every time the element enters the viewport:

```tsx
<Reveal once={false}>
  <div>This animates every time you scroll to it</div>
</Reveal>
```

### Custom HTML Elements

Use the `as` prop to render different semantic HTML elements:

```tsx
<Reveal as="section">
  <h2>Section Title</h2>
  <p>Section content...</p>
</Reveal>

<Reveal as="article">
  <h3>Article Title</h3>
  <p>Article content...</p>
</Reveal>
```

### With Custom Styling

```tsx
<Reveal className="max-w-4xl mx-auto">
  <div className="p-8 bg-card rounded-lg">
    Centered content with custom styling
  </div>
</Reveal>
```

## Real-World Examples

### Program Cards Grid

```tsx
function ProgramsSection() {
  const programs = [
    { id: 1, title: "Education", description: "..." },
    { id: 2, title: "Healthcare", description: "..." },
    { id: 3, title: "Food Relief", description: "..." },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <Reveal key={program.id} delay={index * 0.1}>
          <ProgramCard {...program} />
        </Reveal>
      ))}
    </div>
  );
}
```

### Hero Section with Staggered Content

```tsx
function Hero() {
  return (
    <section>
      <Reveal delay={0}>
        <h1>Welcome to Our Organization</h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p>Making a difference in communities</p>
      </Reveal>
      <Reveal delay={0.4}>
        <Button>Get Involved</Button>
      </Reveal>
    </section>
  );
}
```

### News Articles List

```tsx
function NewsList({ articles }) {
  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <Reveal key={article.id} delay={index * 0.05} direction="left">
          <NewsCard {...article} />
        </Reveal>
      ))}
    </div>
  );
}
```

## Accessibility

### Reduced Motion Support

The component automatically respects the user's motion preferences:

- When `prefers-reduced-motion: reduce` is enabled, animations are disabled
- Content appears immediately without motion effects
- Only opacity transitions remain for smooth appearance

This ensures the component is accessible to users with vestibular disorders or motion sensitivity.

### Implementation

```tsx
const shouldReduceMotion = useReducedMotion();

const initial = shouldReduceMotion 
  ? { opacity: 1 } 
  : { opacity: 0, ...offset };
```

## Performance Considerations

### GPU Acceleration

The component uses GPU-accelerated properties for optimal performance:
- `opacity` - GPU accelerated
- `transform: translateX()` - GPU accelerated (via `x` prop)
- `transform: translateY()` - GPU accelerated (via `y` prop)

### Intersection Observer

Uses Intersection Observer API for efficient scroll detection:
- Only animates when element is near viewport
- Configurable threshold (default: 0.15 = 15% visible)
- No scroll event listeners (better performance)

### Animation Settings

```tsx
{
  duration: 0.7,           // 700ms animation
  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier easing
}
```

## Technical Details

### Dependencies

- `framer-motion` - Animation library
- `react-intersection-observer` - Viewport detection

### Animation Offset

The component uses a 28px offset for directional animations:

```tsx
const getDirectionOffset = (direction: Direction = "up") => {
  const offset = 28;
  switch (direction) {
    case "up":    return { x: 0, y: offset };   // Starts 28px below
    case "down":  return { x: 0, y: -offset };  // Starts 28px above
    case "left":  return { x: offset, y: 0 };   // Starts 28px right
    case "right": return { x: -offset, y: 0 };  // Starts 28px left
  }
};
```

### Intersection Observer Configuration

```tsx
useInView({ 
  triggerOnce: once,  // Controlled by once prop
  threshold: 0.15     // Trigger when 15% visible
})
```

## Best Practices

### 1. Use Appropriate Delays

For staggered animations, use small increments:
```tsx
// Good: Subtle stagger
delay={index * 0.1}

// Too slow: Feels sluggish
delay={index * 0.5}
```

### 2. Choose Meaningful Directions

- `up`: Default, works for most content
- `left/right`: Good for horizontal layouts, alternating content
- `down`: Use sparingly, can feel unnatural

### 3. Limit Nesting

Avoid nesting Reveal components - it can cause timing issues:
```tsx
// ❌ Bad: Nested reveals
<Reveal>
  <Reveal>
    <div>Content</div>
  </Reveal>
</Reveal>

// ✅ Good: Single reveal
<Reveal>
  <div>Content</div>
</Reveal>
```

### 4. Use Semantic HTML

Choose appropriate `as` prop values for better semantics:
```tsx
<Reveal as="section">  {/* For major sections */}
<Reveal as="article">  {/* For self-contained content */}
<Reveal as="header">   {/* For header content */}
```

### 5. Test with Reduced Motion

Always test your animations with reduced motion enabled:
```css
/* Browser DevTools or System Settings */
prefers-reduced-motion: reduce
```

## Requirements Mapping

This component satisfies the following requirements from the spec:

- **12.1**: Triggers entrance animations when content sections enter viewport ✅
- **12.2**: Uses fade-in and slide-in effects appropriate to content type ✅
- **12.3**: Implements staggered timing for multiple elements within a section ✅
- **12.4**: Respects user preferences for reduced motion (prefers-reduced-motion) ✅
- **12.5**: Performs smoothly without causing layout shifts or jank ✅
- **12.6**: Only triggers once per section to avoid repetitive animations ✅
- **14.6**: Respects the prefers-reduced-motion media query ✅

## Testing

The component includes comprehensive tests covering:
- Basic rendering
- All direction options
- Delay functionality
- Once/repeat behavior
- Reduced motion support
- Custom className and HTML elements

Run tests:
```bash
npm test src/components/site/Reveal.test.tsx
```

## Related Components

- `LoadingScreen` - Full-page loading animation
- `PageTransition` - Route transition animations
- `Hero` - Uses Reveal for staggered hero content

## Migration Notes

### Breaking Changes from Previous Version

The `y` prop has been replaced with the `direction` prop:

```tsx
// ❌ Old API
<Reveal y={28}>Content</Reveal>

// ✅ New API (equivalent)
<Reveal direction="up">Content</Reveal>
```

All existing usages without the `y` prop continue to work without changes.
