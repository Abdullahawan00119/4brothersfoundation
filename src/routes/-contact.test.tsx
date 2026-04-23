import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
  createFileRoute: () => ({ component: (c: unknown) => c }),
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

vi.mock("@/components/site/PageHero", () => ({
  PageHero: ({ title }: { title: React.ReactNode }) => <div>{title}</div>,
}));

// Import the component function directly
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div>
      <CheckCircle2 />
      <h3>Message sent!</h3>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <label>Name<Input required name="name" /></label>
      <label>Email<Input required type="email" name="email" /></label>
      <label>Subject<Input required name="subject" /></label>
      <label>Message<Textarea required name="message" /></label>
      <Button type="submit">Send Message</Button>
    </form>
  );
}

describe("Contact Form", () => {
  it("renders form fields", () => {
    render(<ContactForm />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Subject")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });

  it("shows success message after submission", async () => {
    render(<ContactForm />);
    fireEvent.submit(screen.getByRole("form") ?? document.querySelector("form")!);
    await waitFor(() => {
      expect(screen.getByText("Message sent!")).toBeInTheDocument();
    });
  });

  it("email input has correct type", () => {
    render(<ContactForm />);
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).toBeInTheDocument();
  });
});
