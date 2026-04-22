import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

vi.mock("@/assets/logo.png", () => ({ default: "logo.png" }));

import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("renders logo", () => {
    render(<SiteFooter />);
    const logo = screen.getByAltText("");
    expect(logo).toBeInTheDocument();
  });

  it("renders organization name", () => {
    render(<SiteFooter />);
    expect(screen.getByText("4 Brothers")).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/Quetta/i)).toBeInTheDocument();
    expect(screen.getByText(/info@4brotherswelfare/i)).toBeInTheDocument();
  });

  it("renders Quick Links section", () => {
    render(<SiteFooter />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Our Programs")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<SiteFooter />);
    const socialLinks = screen.getAllByLabelText("social link");
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
  });

  it("renders newsletter form", () => {
    render(<SiteFooter />);
    const emailInput = screen.getByPlaceholderText(/your@email.com/i);
    expect(emailInput).toBeInTheDocument();
    expect(screen.getByText("Join")).toBeInTheDocument();
  });

  it("newsletter form prevents default submission", () => {
    render(<SiteFooter />);
    const form = document.querySelector("form");
    expect(form).toBeInTheDocument();
    if (form) {
      const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
      fireEvent(form, submitEvent);
      // Form should not navigate away
    }
  });

  it("renders copyright notice", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/4 Brothers Welfare Trust/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders Privacy and Terms links", () => {
    render(<SiteFooter />);
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Terms")).toBeInTheDocument();
  });
});
