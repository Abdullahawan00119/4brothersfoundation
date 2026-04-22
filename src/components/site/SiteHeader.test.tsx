import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock TanStack Router
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string; [key: string]: unknown }) => (
    <a href={to} {...props}>{children}</a>
  ),
  useLocation: () => ({ pathname: "/" }),
}));

// Mock framer-motion
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      header: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <header {...props}>{children}</header>,
      img: ({ ...props }: { [key: string]: unknown }) => <img {...props} />,
      div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

vi.mock("@/assets/logo.png", () => ({ default: "logo.png" }));

import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("renders logo and navigation links", () => {
    render(<SiteHeader />);
    expect(screen.getByAltText(/4 Brothers Welfare Trust logo/i)).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
  });

  it("renders Donate button", () => {
    render(<SiteHeader />);
    expect(screen.getAllByText(/Donate/i).length).toBeGreaterThan(0);
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<SiteHeader />);
    const menuButton = screen.getByLabelText(/toggle menu/i);
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    // Menu items should now be visible in mobile drawer
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
  });

  it("changes background on scroll", () => {
    render(<SiteHeader />);
    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);
    // Header should have scrolled class applied
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<SiteHeader />);
    const navItems = ["Home", "About", "Programs", "Gallery", "Media", "Get Involved", "Contact"];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
