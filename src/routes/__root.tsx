import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { PageTransition } from "@/components/site/PageTransition";
import { useState, useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "4 Brothers Welfare Trust — Together as Humans" },
      {
        name: "description",
        content:
          "4 Brothers Welfare Trust delivers food, education, healthcare and emergency relief to vulnerable families across Pakistan. Together as humans.",
      },
      { name: "author", content: "4 Brothers Welfare Trust" },
      { property: "og:title", content: "4 Brothers Welfare Trust — Together as Humans" },
      { property: "og:description", content: "Building hope. Changing lives across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "4 Brothers Welfare Trust",
    url: "https://4brotherswelfare.org",
    logo: "https://4brotherswelfare.org/logo.png",
    description: "Welfare organization serving Quetta and Balochistan through food, education, healthcare and emergency relief.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quetta",
      addressRegion: "Balochistan",
      addressCountry: "PK",
    },
    sameAs: [
      "https://facebook.com/4brotherswelfare",
      "https://twitter.com/4brotherswelfare",
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasSeenLoadingScreen = sessionStorage.getItem('hasSeenLoadingScreen');
    
    if (!hasSeenLoadingScreen) {
      // First visit - show loading screen
      setShowLoadingScreen(true);
      
      // Mark as seen for this session
      sessionStorage.setItem('hasSeenLoadingScreen', 'true');
      
      // Simulate initial page load completion
      // In a real app, this would wait for critical resources
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // Not first visit - skip loading screen
      setIsLoading(false);
      setShowLoadingScreen(false);
    }
  }, []);

  const handleLoadComplete = () => {
    setShowLoadingScreen(false);
  };

  return (
    <>
      {showLoadingScreen && (
        <LoadingScreen 
          isLoading={isLoading} 
          onLoadComplete={handleLoadComplete}
        />
      )}
      {/* Skip to content for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-bold focus:rounded-lg"
      >
        Skip to content
      </a>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
