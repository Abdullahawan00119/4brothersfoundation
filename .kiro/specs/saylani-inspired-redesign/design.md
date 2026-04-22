# Design Document: Saylani-Inspired Redesign

## Overview

This design document outlines the technical architecture for a comprehensive website redesign inspired by the Saylani Welfare website. The redesign transforms the existing 4 Brothers Welfare Trust website into a modern, professional platform featuring enhanced visual design, smooth animations, improved navigation, and comprehensive content sections.

### Design Goals

1. **Visual Excellence**: Create a professional, visually appealing design that matches the sophistication of the Saylani reference site
2. **Smooth Animations**: Implement a comprehensive animation system for loading states, page transitions, and scroll-based reveals
3. **Performance**: Maintain excellent performance despite rich animations and imagery
4. **Accessibility**: Ensure WCAG AA compliance and respect user motion preferences
5. **Responsive Design**: Deliver consistent experience across all device sizes
6. **Maintainability**: Use component-based architecture with clear separation of concerns

### Technology Stack

- **Framework**: React 19 with TanStack Router
- **Animation**: Framer Motion (already integrated)
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS 4.x
- **Image Optimization**: Lazy loading, responsive images
- **Performance**: Code splitting, bundle optimization
- **Deployment**: Cloudflare Pages (existing setup)

## Architecture

### Component Hierarchy

```
App
├── LoadingScreen (global page loader)
├── SiteHeader (enhanced navigation)
├── Router
│   ├── Home Page
│   │   ├── Hero (enhanced)
│   │   ├── Programs (enhanced)
│   │   ├── ImpactStats (enhanced with count-up)
│   │   ├── LatestNews (enhanced)
│   │   ├── Stories/Gallery Preview
│   │   └── DonateCTA
│   ├── About Page (new)
│   ├── Programs Page (enhanced)
│   ├── Gallery Page (new with lightbox)
│   ├── Media Page (new)
│   ├── Get Involved Page (new)
│   ├── Contact Page (enhanced)
│   └── Donate Page (enhanced)
└── SiteFooter (enhanced)
```

### Animation System Architecture

The animation system consists of three layers:

1. **Global Animations**: Page loader, route transitions
2. **Component Animations**: Entrance animations, hover states, micro-interactions
3. **Scroll Animations**: Viewport-triggered reveals using Intersection Observer

### State Management

- **Router State**: TanStack Router for navigation and route state
- **UI State**: Local component state with React hooks
- **Animation State**: Framer Motion's built-in animation state
- **Form State**: React Hook Form for contact and donation forms
- **Scroll State**: Intersection Observer API for scroll-triggered animations

## Components and Interfaces

### 1. LoadingScreen Component

**Purpose**: Full-screen loading animation displayed during initial page load

**Props**:
```typescript
interface LoadingScreenProps {
  isLoading: boolean;
  onLoadComplete?: () => void;
}
```

**Behavior**:
- Displays custom logo with animated elements
- Fades out smoothly when `isLoading` becomes false
- Uses Framer Motion for orchestrated animations
- Minimum display time: 800ms to avoid flash

**Animation Sequence**:
1. Logo fades in and scales (0-400ms)
2. Loading indicator animates (400ms-load complete)
3. Entire screen fades out (200ms)

### 2. Enhanced SiteHeader Component

**Purpose**: Sticky navigation with scroll-based styling changes

**Props**:
```typescript
interface SiteHeaderProps {
  transparent?: boolean; // For hero overlay
}
```

**Features**:
- Scroll-based background opacity change
- Mobile hamburger menu with animated drawer
- Prominent "Donate" CTA button
- Active page highlighting
- Logo with hover animation
- Smooth transitions between states

**State**:
```typescript
interface HeaderState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}
```

### 3. Enhanced Hero Component

**Purpose**: Impactful first impression with mission statement and CTAs

**Features**:
- Full-viewport height with background image/video support
- Parallax scroll effect on background
- Staggered text animations on load
- Multiple CTA buttons with distinct styling
- Inline impact statistics
- Scroll indicator animation
- Floating particle effects for visual interest

**Animation Timing**:
- Badge: 0ms delay
- Headline: 150ms delay
- Description: 450ms delay
- CTAs: 700ms delay (staggered 150ms each)
- Stats: 1200ms delay
- Scroll indicator: 1600ms delay

### 4. Programs Component (Enhanced)

**Purpose**: Showcase welfare programs with engaging card layouts

**Features**:
- Grid layout (responsive: 1/2/3 columns)
- Card hover effects (scale, shadow, image zoom)
- Staggered entrance animations
- Category badges with counts
- "Learn More" links to detail pages
- Lazy-loaded images

**Card Structure**:
```typescript
interface ProgramCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  impactCount: string;
  link: string;
}
```

### 5. ImpactStats Component (Enhanced)

**Purpose**: Display quantifiable metrics with count-up animations

**Features**:
- Count-up animation triggered on viewport entry
- Large, bold typography for numbers
- Descriptive labels
- Responsive grid layout
- Background styling for visual distinction

**Implementation**:
```typescript
interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

// Uses react-countup library
// Triggers when component enters viewport (Intersection Observer)
```

### 6. LatestNews Component (Enhanced)

**Purpose**: Display recent news and updates

**Features**:
- Card-based layout with thumbnails
- Date formatting
- Excerpt text with character limit
- "Read More" links
- "View All News" CTA
- Entrance animations on scroll

**News Item Structure**:
```typescript
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: Date;
  slug: string;
  category?: string;
}
```

### 7. Gallery Component (New)

**Purpose**: Photo gallery with lightbox functionality

**Features**:
- Masonry or grid layout
- Category filtering
- Lazy loading
- Lightbox with navigation
- Swipe gestures on mobile
- Keyboard navigation
- Image captions

**Implementation**:
```typescript
interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  caption?: string;
  category: string;
}

interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
}
```

**Lightbox Controls**:
- Previous/Next arrows
- Close button
- Keyboard: Arrow keys, Escape
- Touch: Swipe gestures
- Click outside to close

### 8. Donation Component (Enhanced)

**Purpose**: Streamlined donation interface

**Features**:
- Preset amount buttons
- Custom amount input
- Payment method selection
- Progress indicator for multi-step flow
- Security badges
- Mobile-optimized layout
- Form validation

**Form Structure**:
```typescript
interface DonationForm {
  amount: number;
  isRecurring: boolean;
  frequency?: 'monthly' | 'quarterly' | 'yearly';
  paymentMethod: 'card' | 'bank' | 'mobile';
  donorInfo: {
    name: string;
    email: string;
    phone?: string;
  };
}
```

### 9. Contact Component (Enhanced)

**Purpose**: Contact form with validation and submission feedback

**Features**:
- Form fields: name, email, subject, message
- Real-time validation
- Loading state on submission
- Success/error messages
- Contact information display
- Map integration (optional)

**Form Validation**:
```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});
```

### 10. SiteFooter Component (Enhanced)

**Purpose**: Comprehensive footer with links, contact info, and newsletter

**Features**:
- Multi-column layout (responsive)
- Logo and organization name
- Contact information
- Social media links
- Link categories (Quick Links, Programs, Get Involved, Legal)
- Newsletter subscription form
- Copyright notice

**Structure**:
```typescript
interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}
```

### 11. Reveal Component (Scroll Animation Wrapper)

**Purpose**: Reusable wrapper for scroll-triggered animations

**Props**:
```typescript
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean; // Animate only once
}
```

**Implementation**:
- Uses Intersection Observer via react-intersection-observer
- Triggers Framer Motion animation when in viewport
- Respects prefers-reduced-motion
- Configurable threshold and root margin

### 12. PageTransition Component

**Purpose**: Smooth transitions between route changes

**Features**:
- Fade in/out on route change
- Configurable duration (300-800ms)
- Prevents layout shift
- Scroll restoration

**Implementation**:
```typescript
// Wraps route content
<AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

## Data Models

### Program Model

```typescript
interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'education' | 'healthcare' | 'food' | 'water' | 'emergency' | 'skills';
  image: string;
  images: string[]; // Gallery images
  impactCount: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  slug: string;
  featured: boolean;
}
```

### News Article Model

```typescript
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  image: string;
  author?: string;
  date: Date;
  category: string;
  tags: string[];
  slug: string;
  featured: boolean;
}
```

### Gallery Image Model

```typescript
interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  caption?: string;
  category: string;
  program?: string; // Link to program
  date?: Date;
  photographer?: string;
}
```

### Volunteer Opportunity Model

```typescript
interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  timeCommitment: string;
  location: string;
  category: string;
  active: boolean;
}
```

### Team Member Model

```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
  order: number;
}
```

## Error Handling

### Loading States

1. **Initial Page Load**: LoadingScreen component with minimum display time
2. **Route Transitions**: PageTransition component with loading indicator
3. **Async Content**: Skeleton loaders for content sections
4. **Image Loading**: Blur placeholder → full image transition

### Error States

1. **Network Errors**: Toast notifications with retry option
2. **Form Validation**: Inline error messages with clear guidance
3. **404 Pages**: Custom not-found page with navigation options
4. **Image Load Failures**: Fallback placeholder images
5. **API Failures**: User-friendly error messages with support contact

### Error Boundaries

```typescript
// Wrap route components with error boundaries
<ErrorBoundary
  fallback={<ErrorFallback />}
  onError={(error) => logError(error)}
>
  <RouteComponent />
</ErrorBoundary>
```

### Form Error Handling

```typescript
// Validation errors
interface FormErrors {
  [field: string]: string;
}

// Submission errors
interface SubmissionError {
  message: string;
  code: string;
  retryable: boolean;
}
```

## Testing Strategy

### Testing Approach

This feature is primarily focused on UI rendering, animations, and visual design - areas where property-based testing is not appropriate. The testing strategy will focus on:

1. **Component Testing**: Example-based unit tests for component logic
2. **Snapshot Testing**: Visual regression detection for UI components
3. **Integration Testing**: User interaction flows and form submissions
4. **Accessibility Testing**: Automated a11y checks
5. **Visual Regression Testing**: Screenshot comparison for design consistency
6. **Performance Testing**: Lighthouse audits and bundle size monitoring

### Unit Testing

**Test Coverage Areas**:
- Component rendering with various props
- State management and hooks
- Event handlers and callbacks
- Form validation logic
- Utility functions (date formatting, text truncation, etc.)
- Responsive behavior (using viewport mocking)

**Example Tests**:
```typescript
describe('SiteHeader', () => {
  it('should render logo and navigation links', () => {
    render(<SiteHeader />);
    expect(screen.getByAlt(/logo/i)).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should toggle mobile menu when hamburger clicked', () => {
    render(<SiteHeader />);
    const menuButton = screen.getByLabelText(/toggle menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toHaveClass('open');
  });

  it('should change background on scroll', () => {
    render(<SiteHeader />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(screen.getByRole('banner')).toHaveClass('scrolled');
  });
});

describe('ContactForm', () => {
  it('should show validation errors for invalid email', async () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.blur(emailInput);
    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
  });

  it('should submit form with valid data', async () => {
    const onSubmit = jest.fn();
    render(<ContactForm onSubmit={onSubmit} />);
    // Fill form...
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
```

### Snapshot Testing

**Purpose**: Detect unintended visual changes

```typescript
describe('Programs Component Snapshots', () => {
  it('should match snapshot for desktop layout', () => {
    const { container } = render(<Programs />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot for mobile layout', () => {
    mockViewport(375, 667);
    const { container } = render(<Programs />);
    expect(container).toMatchSnapshot();
  });
});
```

### Integration Testing

**User Flows to Test**:
1. Navigation between pages
2. Form submission (contact, donation, volunteer)
3. Gallery lightbox interaction
4. Mobile menu interaction
5. Newsletter subscription
6. Search functionality (if implemented)

**Example Integration Test**:
```typescript
describe('Donation Flow', () => {
  it('should complete donation from hero CTA to confirmation', async () => {
    render(<App />);
    
    // Click donate button in hero
    fireEvent.click(screen.getByText(/donate now/i));
    
    // Should navigate to donation page
    expect(await screen.findByText(/make a donation/i)).toBeInTheDocument();
    
    // Select amount
    fireEvent.click(screen.getByText('$50'));
    
    // Fill donor info
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    
    // Submit
    fireEvent.click(screen.getByText(/continue/i));
    
    // Should show confirmation
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });
});
```

### Accessibility Testing

**Automated Checks**:
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should have no a11y violations on home page', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should be keyboard navigable', () => {
    render(<SiteHeader />);
    const firstLink = screen.getAllByRole('link')[0];
    firstLink.focus();
    expect(firstLink).toHaveFocus();
    
    // Tab through navigation
    userEvent.tab();
    expect(screen.getAllByRole('link')[1]).toHaveFocus();
  });

  it('should respect prefers-reduced-motion', () => {
    mockPrefersReducedMotion(true);
    render(<Hero />);
    // Verify animations are disabled or simplified
  });
});
```

### Performance Testing

**Metrics to Monitor**:
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.5s
- Cumulative Layout Shift (CLS) < 0.1
- Bundle size < 300KB (gzipped)

**Testing Approach**:
```typescript
// Lighthouse CI configuration
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000', 'http://localhost:3000/programs'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
      },
    },
  },
};
```

### Visual Regression Testing

**Tools**: Percy, Chromatic, or Playwright screenshots

```typescript
// Example with Playwright
test('Programs section visual regression', async ({ page }) => {
  await page.goto('/');
  await page.locator('#programs').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500); // Wait for animations
  expect(await page.screenshot()).toMatchSnapshot('programs-section.png');
});
```

### Test Organization

```
src/
├── components/
│   ├── site/
│   │   ├── Hero.tsx
│   │   ├── Hero.test.tsx
│   │   ├── Programs.tsx
│   │   ├── Programs.test.tsx
│   │   └── __snapshots__/
│   └── ui/
│       ├── button.tsx
│       └── button.test.tsx
├── __tests__/
│   ├── integration/
│   │   ├── navigation.test.tsx
│   │   ├── donation-flow.test.tsx
│   │   └── contact-form.test.tsx
│   ├── accessibility/
│   │   └── a11y.test.tsx
│   └── visual/
│       └── visual-regression.spec.ts
└── test-utils/
    ├── setup.ts
    ├── mocks.ts
    └── helpers.ts
```

### Why Property-Based Testing Is Not Applicable

Property-based testing (PBT) is not appropriate for this feature because:

1. **UI Rendering**: The feature is primarily about visual components and layouts, which don't have universal properties that hold across all inputs
2. **Animation Behavior**: Animations are time-based and visual, not pure functions with testable properties
3. **User Interactions**: Click handlers, form submissions, and navigation are specific behaviors, not universal properties
4. **Styling and Layout**: CSS and responsive design are visual concerns that require snapshot/visual regression testing
5. **No Complex Algorithms**: The feature doesn't involve parsers, serializers, data transformations, or algorithms that benefit from PBT

Instead, we use:
- **Snapshot tests** for UI consistency
- **Example-based unit tests** for specific behaviors
- **Visual regression tests** for design validation
- **Integration tests** for user flows
- **Accessibility tests** for WCAG compliance

This testing approach is more appropriate and effective for UI-focused features.

## Implementation Notes

### Animation Performance

**Optimization Strategies**:
1. Use `transform` and `opacity` for animations (GPU-accelerated)
2. Avoid animating `width`, `height`, `top`, `left` (causes reflow)
3. Use `will-change` sparingly and remove after animation
4. Implement animation throttling for scroll events
5. Use `requestAnimationFrame` for custom animations

**Framer Motion Best Practices**:
```typescript
// Good: GPU-accelerated
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>

// Bad: Causes reflow
<motion.div
  initial={{ height: 0 }}
  animate={{ height: 'auto' }}
/>

// Better: Use scale instead
<motion.div
  initial={{ scaleY: 0 }}
  animate={{ scaleY: 1 }}
/>
```

### Responsive Images

**Implementation**:
```typescript
// Use srcset for responsive images
<img
  src="/images/hero-800.jpg"
  srcSet="
    /images/hero-400.jpg 400w,
    /images/hero-800.jpg 800w,
    /images/hero-1200.jpg 1200w,
    /images/hero-1600.jpg 1600w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Hero image"
  loading="lazy"
/>
```

### Lazy Loading Strategy

1. **Above the fold**: Load immediately (hero, header)
2. **Below the fold**: Lazy load with Intersection Observer
3. **Images**: Use native `loading="lazy"` attribute
4. **Components**: Use React.lazy() for route-based code splitting

```typescript
// Route-based code splitting
const GalleryPage = lazy(() => import('./routes/gallery'));
const AboutPage = lazy(() => import('./routes/about'));

// Component lazy loading
<Suspense fallback={<LoadingSpinner />}>
  <GalleryPage />
</Suspense>
```

### Accessibility Implementation

**Focus Management**:
```typescript
// Trap focus in modal/lightbox
import { useFocusTrap } from '@/hooks/useFocusTrap';

function Lightbox({ isOpen, onClose }) {
  const trapRef = useFocusTrap(isOpen);
  
  return (
    <div ref={trapRef} role="dialog" aria-modal="true">
      {/* Content */}
    </div>
  );
}
```

**Reduced Motion**:
```typescript
// Respect user preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const animationVariants = {
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  animate: { opacity: 1, y: 0 },
};
```

**ARIA Labels**:
```typescript
// Proper labeling for screen readers
<button
  aria-label="Close lightbox"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <X />
</button>

<nav aria-label="Main navigation">
  {/* Navigation links */}
</nav>

<section aria-labelledby="programs-heading">
  <h2 id="programs-heading">Our Programs</h2>
  {/* Content */}
</section>
```

### SEO Implementation

**Meta Tags**:
```typescript
// Use TanStack Router's head management
export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: 'About Us - 4 Brothers Welfare Trust',
        description: 'Learn about our mission to serve communities in Quetta and Balochistan through education, healthcare, and emergency relief.',
      },
      {
        property: 'og:title',
        content: 'About Us - 4 Brothers Welfare Trust',
      },
      {
        property: 'og:description',
        content: 'Learn about our mission to serve communities in Quetta and Balochistan.',
      },
      {
        property: 'og:image',
        content: '/images/og-about.jpg',
      },
    ],
  }),
});
```

**Structured Data**:
```typescript
// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: '4 Brothers Welfare Trust',
  url: 'https://4brotherswelfare.org',
  logo: 'https://4brotherswelfare.org/logo.png',
  description: 'Welfare organization serving Quetta and Balochistan',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Quetta',
    addressRegion: 'Balochistan',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://facebook.com/4brotherswelfare',
    'https://twitter.com/4brotherswelfare',
  ],
};
```

### Performance Optimization

**Code Splitting**:
```typescript
// Route-based splitting (automatic with TanStack Router)
// Component-based splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Preload on hover
<Link
  to="/programs"
  onMouseEnter={() => import('./routes/programs')}
>
  Programs
</Link>
```

**Image Optimization**:
1. Use WebP format with JPEG fallback
2. Implement responsive images with srcset
3. Lazy load below-the-fold images
4. Use blur placeholders during load
5. Optimize image dimensions (don't serve larger than needed)

**Bundle Optimization**:
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['@tanstack/react-router'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'animation': ['framer-motion'],
        },
      },
    },
  },
});
```

### Mobile Optimization

**Touch Interactions**:
```typescript
// Larger touch targets (minimum 44x44px)
<button className="min-h-[44px] min-w-[44px] p-3">
  <Icon />
</button>

// Swipe gestures for gallery
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
  onSwipedLeft: () => nextImage(),
  onSwipedRight: () => prevImage(),
  trackMouse: true,
});

<div {...handlers}>
  <img src={currentImage} alt="" />
</div>
```

**Viewport Meta Tag**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
```

## Deployment and Monitoring

### Build Process

1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Production Build**: `npm run build` - Optimized production bundle
3. **Preview**: `npm run preview` - Test production build locally

### Deployment Checklist

- [ ] Run Lighthouse audit (performance, accessibility, SEO)
- [ ] Test on multiple devices and browsers
- [ ] Verify all images are optimized
- [ ] Check bundle size (< 300KB gzipped)
- [ ] Validate all forms work correctly
- [ ] Test donation flow end-to-end
- [ ] Verify analytics tracking
- [ ] Check 404 and error pages
- [ ] Test with slow network (throttling)
- [ ] Verify HTTPS and security headers

### Monitoring

**Metrics to Track**:
- Page load times (FCP, LCP, TTI)
- Error rates (JavaScript errors, API failures)
- User interactions (button clicks, form submissions)
- Conversion rates (donations, volunteer signups)
- Bounce rates by page
- Device and browser distribution

**Tools**:
- Google Analytics 4 for user behavior
- Sentry for error tracking
- Cloudflare Analytics for performance
- Lighthouse CI for continuous performance monitoring

## Migration Strategy

### Phase 1: Foundation (Week 1)

1. Set up LoadingScreen component
2. Enhance SiteHeader with scroll behavior
3. Implement Reveal component for scroll animations
4. Update Hero component with new design
5. Create PageTransition wrapper

### Phase 2: Core Content (Week 2)

1. Enhance Programs component
2. Enhance ImpactStats with count-up
3. Enhance LatestNews component
4. Update SiteFooter
5. Create About page

### Phase 3: New Features (Week 3)

1. Build Gallery with lightbox
2. Create Media/Press page
3. Build Get Involved page
4. Enhance Contact page
5. Enhance Donation flow

### Phase 4: Polish & Testing (Week 4)

1. Performance optimization
2. Accessibility audit and fixes
3. Cross-browser testing
4. Mobile optimization
5. SEO implementation
6. Final QA and deployment

### Rollback Plan

- Keep existing components in `components/site/legacy/`
- Use feature flags for gradual rollout
- Monitor error rates and performance metrics
- Quick rollback via Cloudflare Pages deployment history

## Conclusion

This design provides a comprehensive blueprint for transforming the 4 Brothers Welfare Trust website into a modern, professional platform. The architecture prioritizes performance, accessibility, and maintainability while delivering a visually stunning user experience with smooth animations and engaging content.

The component-based approach ensures scalability and ease of maintenance, while the testing strategy focuses on appropriate methods for UI-focused features (snapshot tests, visual regression, example-based tests) rather than property-based testing which is not suitable for this type of work.

The phased migration strategy allows for incremental delivery and risk mitigation, ensuring the website remains functional throughout the redesign process.
