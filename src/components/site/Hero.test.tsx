import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: ({ children, layoutId, ...props }: { children: React.ReactNode; layoutId?: string; [key: string]: unknown }) => (
        <div {...props}>{children}</div>
      ),
      h1: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <p {...props}>{children}</p>,
      span: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <span {...props}>{children}</span>,
    },
  };
});

import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders tagline badge", () => {
    render(<Hero />);
    expect(screen.getByText(/Together as Humans/i)).toBeInTheDocument();
  });

  it("renders first program headline and tag", () => {
    render(<Hero />);
    expect(screen.getByText(/Community Food Distribution:/i)).toBeInTheDocument();
    expect(screen.getByText(/Warm Meals for 500\+ Families/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Emergency Food Relief/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders primary action donate/support button", () => {
    render(<Hero />);
    expect(screen.getByText(/Support Food Relief/i)).toBeInTheDocument();
  });

  it("renders impact metrics chips", () => {
    render(<Hero />);
    expect(screen.getByText(/500\+ Meals Distributed • 100% Volunteer Driven/i)).toBeInTheDocument();
  });

  it("switches slides when an indicator dot is clicked", () => {
    render(<Hero />);
    const dot2 = screen.getByRole("button", { name: /Go to slide 2/i });
    fireEvent.click(dot2);

    // Second slide is Green Horizon Tree Plantation
    expect(screen.getByText(/Green Horizon Tree Plantation:/i)).toBeInTheDocument();
  });

  it("has no arrows, no slide counter, and no bulky card pills", () => {
    render(<Hero />);
    expect(screen.queryByRole("button", { name: /previous event slide/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /next event slide/i })).not.toBeInTheDocument();
    expect(screen.queryByText("01")).not.toBeInTheDocument();
  });
});
