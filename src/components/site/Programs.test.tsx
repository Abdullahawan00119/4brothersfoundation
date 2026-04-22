import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
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

vi.mock("@/assets/hero-distribution.jpg", () => ({ default: "distribution.jpg" }));
vi.mock("@/assets/program-education.jpg", () => ({ default: "education.jpg" }));
vi.mock("@/assets/program-medical.jpg", () => ({ default: "medical.jpg" }));
vi.mock("@/assets/program-water.jpg", () => ({ default: "water.jpg" }));
vi.mock("@/assets/program-relief.jpg", () => ({ default: "relief.jpg" }));

import { Programs } from "./Programs";

describe("Programs", () => {
  it("renders all six programs", () => {
    render(<Programs />);
    expect(screen.getByText("Food Distribution")).toBeInTheDocument();
    expect(screen.getByText("Education Support")).toBeInTheDocument();
    expect(screen.getByText("Medical Assistance")).toBeInTheDocument();
    expect(screen.getByText("Clean Water Projects")).toBeInTheDocument();
    expect(screen.getByText("Emergency & Disaster Relief")).toBeInTheDocument();
    expect(screen.getByText("Orphan Care")).toBeInTheDocument();
  });

  it("renders Learn more links", () => {
    render(<Programs />);
    const links = screen.getAllByText(/Learn more/i);
    expect(links.length).toBeGreaterThanOrEqual(6);
  });

  it("renders impact counts", () => {
    render(<Programs />);
    expect(screen.getByText("50K+ meals")).toBeInTheDocument();
    expect(screen.getByText("10K+ students")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<Programs />);
    expect(screen.getByText(/Programs designed for/i)).toBeInTheDocument();
  });

  it("renders program images with lazy loading", () => {
    render(<Programs />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });
});
