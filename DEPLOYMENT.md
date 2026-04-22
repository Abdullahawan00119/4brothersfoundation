# Deployment Checklist — 4 Brothers Welfare Trust

## Build & Deploy

```bash
npm run build        # Production build
npm run preview      # Test production build locally
```

Deployment target: **Vercel**

To deploy on Vercel:
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Vite framework.
3. The build command will automatically be set to `npm run build` and the output directory to `dist`.
4. Ensure the `vercel.json` file is present in the root directory for client-side routing.

## Pre-Deployment Checklist

### Performance
- [ ] Run `npm run build` — no errors
- [ ] Check bundle sizes (target < 300KB gzipped)
- [ ] Verify lazy loading on all below-fold images
- [ ] Run Lighthouse audit: FCP < 1.5s, LCP < 2.5s, score 85+ desktop / 75+ mobile

### Accessibility
- [ ] Verify skip-to-content link works
- [ ] Test keyboard navigation through all pages
- [ ] Check color contrast (WCAG AA — 4.5:1 minimum)
- [ ] Verify all images have alt text
- [ ] Test with prefers-reduced-motion enabled

### SEO
- [ ] Confirm title tags on all pages
- [ ] Confirm meta descriptions (150–160 chars) on all pages
- [ ] Confirm Open Graph tags on all pages
- [ ] Verify sitemap.xml is accessible at /sitemap.xml
- [ ] Verify structured data (JSON-LD) in page source

### Functionality
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test volunteer sign-up form
- [ ] Test donation amount selection
- [ ] Test gallery lightbox (open, close, keyboard nav, swipe)
- [ ] Test newsletter subscription form
- [ ] Test loading screen on first visit (clear sessionStorage)
- [ ] Test page transitions between routes
- [ ] Test 404 page

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Android Chrome

### Mobile
- [ ] No horizontal scroll on any page
- [ ] Touch targets ≥ 44×44px
- [ ] Mobile menu opens/closes correctly
- [ ] Gallery lightbox swipe works on mobile

## Monitoring Post-Deployment

Track these metrics after going live:

| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| TTI | < 3.5s |
| CLS | < 0.1 |
| Lighthouse Performance | 85+ desktop, 75+ mobile |
| JS errors | 0 |

## Rollback

Vercel keeps deployment history automatically. To rollback:
1. Go to your project on the Vercel Dashboard.
2. Navigate to the "Deployments" tab.
3. Find the previous successful deployment you want to revert to.
4. Click the three dots (...) and select "Promote to Production".
