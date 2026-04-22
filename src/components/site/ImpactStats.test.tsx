import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-countup", () => ({
  default: ({ end }: { end: number }) => <span>{end}</span>,
}));

vi.mock("react-intersection-observer", () => ({
  useInView: vi.fn(() => ({ ref: vi.fn(), inView: true })),
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

import { ImpactStats } from "./ImpactStats";

describe("ImpactStats", () => {
  it("renders at least four stat labels", () => {
    render(<ImpactStats />);
    expect(screen.getByText("Meals Distributed")).toBeInTheDocument();
    expect(screen.getByText("Students Educated")).toBeInTheDocument();
    expect(screen.getByText("Medical Camp Visits")).toBeInTheDocument();
    expect(screen.getByText("Active Volunteers")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<ImpactStats />);
    expect(screen.getByText(/Real numbers/i)).toBeInTheDocument();
  });

  it("renders count-up numbers when in view", () => {
    render(<ImpactStats />);
    // CountUp renders the end value in our mock
    expect(screen.getByText("50000")).toBeInTheDocument();
    expect(screen.getByText("10000")).toBeInTheDocument();
  });

  it("renders stat suffixes", () => {
    render(<ImpactStats />);
    const plusSigns = screen.getAllByText("+");
    expect(plusSigns.length).toBeGreaterThanOrEqual(4);
  });
});
