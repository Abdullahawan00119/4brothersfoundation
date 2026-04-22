import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Reveal } from "./Reveal";

// Mock framer-motion
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    useReducedMotion: vi.fn(() => false),
  };
});

// Mock react-intersection-observer
vi.mock("react-intersection-observer", () => ({
  useInView: vi.fn(() => ({ ref: vi.fn(), inView: true })),
}));

describe("Reveal Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render children", () => {
    render(
      <Reveal>
        <div>Test Content</div>
      </Reveal>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should support delay prop", () => {
    const { container } = render(
      <Reveal delay={0.5}>
        <div>Delayed Content</div>
      </Reveal>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should support direction prop - up", () => {
    const { container } = render(
      <Reveal direction="up">
        <div>Up Direction</div>
      </Reveal>
    );
    expect(screen.getByText("Up Direction")).toBeInTheDocument();
  });

  it("should support direction prop - down", () => {
    const { container } = render(
      <Reveal direction="down">
        <div>Down Direction</div>
      </Reveal>
    );
    expect(screen.getByText("Down Direction")).toBeInTheDocument();
  });

  it("should support direction prop - left", () => {
    const { container } = render(
      <Reveal direction="left">
        <div>Left Direction</div>
      </Reveal>
    );
    expect(screen.getByText("Left Direction")).toBeInTheDocument();
  });

  it("should support direction prop - right", () => {
    const { container } = render(
      <Reveal direction="right">
        <div>Right Direction</div>
      </Reveal>
    );
    expect(screen.getByText("Right Direction")).toBeInTheDocument();
  });

  it("should support once prop", () => {
    const { rerender } = render(
      <Reveal once={true}>
        <div>Once Content</div>
      </Reveal>
    );
    expect(screen.getByText("Once Content")).toBeInTheDocument();

    rerender(
      <Reveal once={false}>
        <div>Once Content</div>
      </Reveal>
    );
    expect(screen.getByText("Once Content")).toBeInTheDocument();
  });

  it("should respect prefers-reduced-motion", async () => {
    const { useReducedMotion } = await import("framer-motion");
    vi.mocked(useReducedMotion).mockReturnValue(true);

    render(
      <Reveal>
        <div>Reduced Motion Content</div>
      </Reveal>
    );

    expect(screen.getByText("Reduced Motion Content")).toBeInTheDocument();
  });

  it("should support custom className", () => {
    const { container } = render(
      <Reveal className="custom-class">
        <div>Custom Class Content</div>
      </Reveal>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should support different HTML elements via as prop", () => {
    const { container } = render(
      <Reveal as="section">
        <div>Section Content</div>
      </Reveal>
    );
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should use default values when props are not provided", () => {
    render(
      <Reveal>
        <div>Default Props Content</div>
      </Reveal>
    );
    expect(screen.getByText("Default Props Content")).toBeInTheDocument();
  });
});
