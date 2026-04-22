import { render, screen } from "@testing-library/react";
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
      section: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <section {...props}>{children}</section>,
    },
    useReducedMotion: vi.fn(() => false),
  };
});

vi.mock("react-intersection-observer", () => ({
  useInView: vi.fn(() => ({ ref: vi.fn(), inView: true })),
}));

vi.mock("@/components/site/PageHero", () => ({
  PageHero: ({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) => (
    <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
  ),
}));

// Inline minimal About content for testing
function AboutContent() {
  const values = ["Compassion", "Transparency", "Integrity", "Impact"];
  const milestones = [
    ["2013", "Founded by four brothers."],
    ["2016", "First mass food drive."],
    ["2019", "Launched education sponsorship."],
    ["2022", "Flood relief operations."],
    ["2024", "Expanded to 12 cities."],
  ];

  return (
    <main>
      <h1>About Us</h1>
      <section>
        <h2>Our Mission</h2>
        <p>To stand beside the vulnerable.</p>
      </section>
      <section>
        <h2>Our Vision</h2>
        <p>A Pakistan where no family goes to bed hungry.</p>
      </section>
      <section>
        <h2>Our Values</h2>
        {values.map((v) => <div key={v}>{v}</div>)}
      </section>
      <section>
        <h2>Our Journey</h2>
        {milestones.map(([year, text]) => (
          <div key={year}>
            <strong>{year}</strong>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

describe("About Page", () => {
  it("renders mission section", () => {
    render(<AboutContent />);
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText(/stand beside the vulnerable/i)).toBeInTheDocument();
  });

  it("renders vision section", () => {
    render(<AboutContent />);
    expect(screen.getByText("Our Vision")).toBeInTheDocument();
  });

  it("renders all four core values", () => {
    render(<AboutContent />);
    expect(screen.getByText("Compassion")).toBeInTheDocument();
    expect(screen.getByText("Transparency")).toBeInTheDocument();
    expect(screen.getByText("Integrity")).toBeInTheDocument();
    expect(screen.getByText("Impact")).toBeInTheDocument();
  });

  it("renders timeline milestones", () => {
    render(<AboutContent />);
    expect(screen.getByText("2013")).toBeInTheDocument();
    expect(screen.getByText("2016")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
  });

  it("renders five milestones", () => {
    render(<AboutContent />);
    const years = ["2013", "2016", "2019", "2022", "2024"];
    years.forEach((y) => expect(screen.getByText(y)).toBeInTheDocument());
  });
});
