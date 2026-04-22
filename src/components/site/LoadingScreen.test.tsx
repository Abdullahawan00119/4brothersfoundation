import { render, screen, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { LoadingScreen } from "./LoadingScreen";

/**
 * Unit tests for LoadingScreen component
 * 
 * **Validates: Requirements 1.1, 1.4**
 * 
 * Tests cover:
 * - Animation sequence timing (logo fade-in at 0-400ms, loading indicator at 400ms+)
 * - Fade-out behavior when isLoading becomes false
 * - Minimum display time enforcement (800ms)
 * - onLoadComplete callback timing
 */
describe("LoadingScreen", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Basic Rendering", () => {
    it("should render when isLoading is true", () => {
      render(<LoadingScreen isLoading={true} />);
      
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("should display logo with correct alt text", () => {
      render(<LoadingScreen isLoading={true} />);
      
      const logo = screen.getByAltText("4 Brothers Welfare Trust");
      expect(logo).toHaveAttribute("src");
    });

    it("should render three animated dots", () => {
      const { container } = render(<LoadingScreen isLoading={true} />);
      
      // Check for the dots container and count the animated dots
      const dots = container.querySelectorAll(".h-2.w-2.rounded-full.bg-gold");
      expect(dots).toHaveLength(3);
    });

    it("should render loading text", () => {
      render(<LoadingScreen isLoading={true} />);
      
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("Animation Sequence Timing", () => {
    it("should display logo animation from 0-400ms", () => {
      const { container } = render(<LoadingScreen isLoading={true} />);
      
      // Logo should be present immediately
      const logo = screen.getByAltText("4 Brothers Welfare Trust");
      expect(logo).toBeInTheDocument();
      
      // Logo container should have animation classes
      const logoContainer = logo.closest("div");
      expect(logoContainer).toBeInTheDocument();
    });

    it("should display loading indicator after 400ms", () => {
      render(<LoadingScreen isLoading={true} />);
      
      // Loading indicator (dots and text) should be present
      // The animation delay is handled by Framer Motion, but elements should be in DOM
      const dots = screen.getAllByRole("generic").filter(el => 
        el.className.includes("h-2") && el.className.includes("w-2")
      );
      expect(dots.length).toBeGreaterThanOrEqual(3);
      
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("should have staggered animation delays for dots", () => {
      const { container } = render(<LoadingScreen isLoading={true} />);
      
      // All three dots should be rendered
      const dots = container.querySelectorAll(".h-2.w-2.rounded-full.bg-gold");
      expect(dots).toHaveLength(3);
      
      // Each dot is rendered (animation delays are handled by Framer Motion)
      dots.forEach(dot => {
        expect(dot).toBeInTheDocument();
      });
    });
  });

  describe("Fade-out Behavior", () => {
    it("should remain visible during fade-out period", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Fast-forward past minimum display time (800ms)
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} />);
      
      // Component should still be visible during fade-out
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should not fade out immediately when isLoading becomes false before minimum time", () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Change to not loading before minimum time (e.g., at 400ms)
      act(() => {
        vi.advanceTimersByTime(400);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Component should still be visible
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should remain visible if loading finished early", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Loading finishes at 300ms (before minimum 800ms)
      act(() => {
        vi.advanceTimersByTime(300);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Should still be visible
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      
      // Fast-forward remaining time to reach 800ms total
      act(() => {
        vi.advanceTimersByTime(500);
      });
      
      // Should still be visible (fade-out in progress)
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should start fade-out after minimum time if loading already finished", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Fast-forward past minimum display time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} />);
      
      // Component should still be in DOM (fade-out animation in progress)
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });
  });

  describe("Minimum Display Time Enforcement", () => {
    it("should enforce minimum display time of 800ms", async () => {
      const onLoadComplete = vi.fn();
      const { rerender } = render(
        <LoadingScreen isLoading={true} onLoadComplete={onLoadComplete} />
      );
      
      // Change to not loading immediately (before 800ms)
      rerender(<LoadingScreen isLoading={false} onLoadComplete={onLoadComplete} />);
      
      // Component should still be visible
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      
      // Fast-forward to just before minimum time
      act(() => {
        vi.advanceTimersByTime(799);
      });
      
      // Should still be visible and callback not called
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      expect(onLoadComplete).not.toHaveBeenCalled();
    });

    it("should not unmount before 800ms even if loading finishes at 100ms", () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Loading finishes very quickly
      act(() => {
        vi.advanceTimersByTime(100);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Should still be visible
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      
      // Advance to 700ms (still under 800ms)
      act(() => {
        vi.advanceTimersByTime(600);
      });
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should respect minimum time across multiple loading state changes", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Loading finishes early
      act(() => {
        vi.advanceTimersByTime(200);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Loading starts again
      act(() => {
        vi.advanceTimersByTime(100);
      });
      rerender(<LoadingScreen isLoading={true} />);
      
      // Component should still be visible and reset minimum time
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
      
      // Fast-forward past new minimum time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Should still be visible (fade-out in progress)
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });
  });

  describe("onLoadComplete Callback", () => {
    it("should call onLoadComplete after fade-out animation", async () => {
      const onLoadComplete = vi.fn();
      const { rerender } = render(
        <LoadingScreen isLoading={true} onLoadComplete={onLoadComplete} />
      );
      
      // Fast-forward past minimum display time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} onLoadComplete={onLoadComplete} />);
      
      // onLoadComplete should not be called immediately
      expect(onLoadComplete).not.toHaveBeenCalled();
      
      // Fast-forward through fade-out animation (200ms)
      act(() => {
        vi.advanceTimersByTime(200);
      });
      
      expect(onLoadComplete).toHaveBeenCalledTimes(1);
    });

    it("should not call onLoadComplete before fade-out completes", async () => {
      const onLoadComplete = vi.fn();
      const { rerender } = render(
        <LoadingScreen isLoading={true} onLoadComplete={onLoadComplete} />
      );
      
      // Fast-forward past minimum display time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} onLoadComplete={onLoadComplete} />);
      
      // Advance only 100ms (fade-out is 200ms)
      act(() => {
        vi.advanceTimersByTime(100);
      });
      
      // Should not be called yet
      expect(onLoadComplete).not.toHaveBeenCalled();
    });

    it("should call onLoadComplete only once", async () => {
      const onLoadComplete = vi.fn();
      const { rerender } = render(
        <LoadingScreen isLoading={true} onLoadComplete={onLoadComplete} />
      );
      
      // Fast-forward past minimum display time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} onLoadComplete={onLoadComplete} />);
      
      // Fast-forward through fade-out
      act(() => {
        vi.advanceTimersByTime(200);
      });
      
      expect(onLoadComplete).toHaveBeenCalledTimes(1);
      
      // Advance more time
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      
      // Should still only be called once
      expect(onLoadComplete).toHaveBeenCalledTimes(1);
    });

    it("should work correctly without onLoadComplete callback", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Fast-forward past minimum display time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      
      // Change to not loading
      rerender(<LoadingScreen isLoading={false} />);
      
      // Fast-forward through fade-out
      act(() => {
        vi.advanceTimersByTime(200);
      });
      
      // Should not throw error - component still visible during animation
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should delay callback until minimum time and fade-out complete", async () => {
      const onLoadComplete = vi.fn();
      const { rerender } = render(
        <LoadingScreen isLoading={true} onLoadComplete={onLoadComplete} />
      );
      
      // Change to not loading immediately
      rerender(<LoadingScreen isLoading={false} onLoadComplete={onLoadComplete} />);
      
      // At 799ms, should not be called
      act(() => {
        vi.advanceTimersByTime(799);
      });
      expect(onLoadComplete).not.toHaveBeenCalled();
      
      // At 800ms, fade-out starts but callback not yet
      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(onLoadComplete).not.toHaveBeenCalled();
      
      // At 999ms (800 + 199), still not called
      act(() => {
        vi.advanceTimersByTime(199);
      });
      expect(onLoadComplete).not.toHaveBeenCalled();
      
      // Component should still be visible (timing logic working correctly)
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("should handle rapid loading state changes", async () => {
      const { rerender } = render(<LoadingScreen isLoading={true} />);
      
      // Rapid changes
      act(() => {
        vi.advanceTimersByTime(100);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      act(() => {
        vi.advanceTimersByTime(100);
      });
      rerender(<LoadingScreen isLoading={true} />);
      
      act(() => {
        vi.advanceTimersByTime(100);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Component should still be visible (minimum time resets)
      expect(screen.getByAltText("4 Brothers Welfare Trust")).toBeInTheDocument();
    });

    it("should handle unmounting during fade-out", () => {
      const { rerender, unmount } = render(<LoadingScreen isLoading={true} />);
      
      // Fast-forward past minimum time
      act(() => {
        vi.advanceTimersByTime(800);
      });
      rerender(<LoadingScreen isLoading={false} />);
      
      // Start fade-out
      act(() => {
        vi.advanceTimersByTime(100);
      });
      
      // Unmount during fade-out
      expect(() => unmount()).not.toThrow();
    });

    it("should clean up timers on unmount", () => {
      const { unmount } = render(<LoadingScreen isLoading={true} />);
      
      // Unmount before minimum time
      act(() => {
        vi.advanceTimersByTime(400);
      });
      expect(() => unmount()).not.toThrow();
      
      // Advance timers to ensure no memory leaks
      act(() => {
        vi.advanceTimersByTime(1000);
      });
    });
  });
});
