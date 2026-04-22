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
      h1: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <p {...props}>{children}</p>,
      span: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <span {...props}>{children}</span>,
    },
  };
});

vi.mock("@/assets/quetta-distribution.jpg", () => ({ default: "hero.jpg" }));

import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders headline", () => {
    render(<Hero />);
    expect(screen.getByText(/Building hope/i)).toBeInTheDocument();
  });

  it("renders Donate Now CTA", () => {
    render(<Hero />);
    expect(screen.getByText(/Donate Now/i)).toBeInTheDocument();
  });

  it("renders Volunteer CTA", () => {
    render(<Hero />);
    expect(screen.getByText(/Volunteer/i)).toBeInTheDocument();
  });

  it("renders impact stats", () => {
    render(<Hero />);
    expect(screen.getByText(/Families helped/i)).toBeInTheDocument();
  });

  it("renders background image", () => {
    render(<Hero />);
    const img = screen.getByAltText(/Volunteers distributing food/i);
    expect(img).toBeInTheDocument();
  });

  it("renders tagline badge", () => {
    render(<Hero />);
    expect(screen.getByText(/Together as Humans/i)).toBeInTheDocument();
  });
});
