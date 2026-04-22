import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, params }: { children: React.ReactNode; to: string; params?: Record<string, string> }) => (
    <a href={`${to}/${params?.slug ?? ""}`}>{children}</a>
  ),
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    },
    useReducedMotion: vi.fn(() => false),
  };
});

vi.mock("react-intersection-observer", () => ({
  useInView: vi.fn(() => ({ ref: vi.fn(), inView: true })),
}));

import { LatestNews } from "./LatestNews";

describe("LatestNews", () => {
  it("renders at least three news items", () => {
    render(<LatestNews />);
    const readLinks = screen.getAllByText(/Read story/i);
    expect(readLinks.length).toBeGreaterThanOrEqual(3);
  });

  it("renders section heading", () => {
    render(<LatestNews />);
    expect(screen.getByText(/Latest/i)).toBeInTheDocument();
  });

  it("renders View all updates link", () => {
    render(<LatestNews />);
    expect(screen.getByText(/View all updates/i)).toBeInTheDocument();
  });

  it("renders news images with lazy loading", () => {
    render(<LatestNews />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });

  it("renders category badges", () => {
    render(<LatestNews />);
    // At least one category badge should be present
    const badges = document.querySelectorAll(".uppercase.tracking-wider");
    expect(badges.length).toBeGreaterThan(0);
  });
});
