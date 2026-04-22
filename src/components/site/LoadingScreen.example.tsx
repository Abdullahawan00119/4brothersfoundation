/**
 * Example usage of LoadingScreen component
 * 
 * This file demonstrates how to integrate the LoadingScreen component
 * into your application for initial page load.
 */

import { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function AppWithLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    const loadResources = async () => {
      // Wait for critical resources to load
      // This could be API calls, font loading, etc.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set loading to false
      setIsLoading(false);
    };

    loadResources();
  }, []);

  const handleLoadComplete = () => {
    console.log("Loading screen animation completed");
    // Additional logic after loading screen is fully hidden
  };

  return (
    <>
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadComplete={handleLoadComplete}
      />
      
      {/* Your app content */}
      <div className="min-h-screen">
        <h1>Welcome to 4 Brothers Welfare Trust</h1>
        {/* Rest of your app */}
      </div>
    </>
  );
}

/**
 * Example: Using with TanStack Router
 * 
 * You can integrate this at the root of your router:
 */

export function RouterWithLoadingScreen() {
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
      
      // Simulate resource loading
      setTimeout(() => {
        setIsInitialLoad(false);
      }, 1500);
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isInitialLoad} />
      {/* Your router outlet */}
    </>
  );
}
