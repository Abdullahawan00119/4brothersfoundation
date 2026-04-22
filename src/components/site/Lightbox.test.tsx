import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Lightbox, type LightboxImage } from "./Lightbox";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

const images: LightboxImage[] = [
  { src: "img1.jpg", alt: "Image 1", caption: "Caption 1" },
  { src: "img2.jpg", alt: "Image 2", caption: "Caption 2" },
  { src: "img3.jpg", alt: "Image 3" },
];

describe("Lightbox", () => {
  it("renders when open", () => {
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Lightbox images={images} currentIndex={0} isOpen={false} onClose={vi.fn()} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    expect(screen.queryByAltText("Image 1")).not.toBeInTheDocument();
  });

  it("calls onClose when close button clicked", () => {
    const onClose = vi.fn();
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={onClose} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    fireEvent.click(screen.getByLabelText("Close lightbox"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onPrev when prev button clicked", () => {
    const onPrev = vi.fn();
    render(
      <Lightbox images={images} currentIndex={1} isOpen={true} onClose={vi.fn()} onPrev={onPrev} onNext={vi.fn()} />
    );
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("calls onNext when next button clicked", () => {
    const onNext = vi.fn();
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={onNext} />
    );
    fireEvent.click(screen.getByLabelText("Next image"));
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape key", () => {
    const onClose = vi.fn();
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={onClose} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onPrev on ArrowLeft key", () => {
    const onPrev = vi.fn();
    render(
      <Lightbox images={images} currentIndex={1} isOpen={true} onClose={vi.fn()} onPrev={onPrev} onNext={vi.fn()} />
    );
    fireEvent.keyDown(document, { key: "ArrowLeft" });
    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("calls onNext on ArrowRight key", () => {
    const onNext = vi.fn();
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={onNext} />
    );
    fireEvent.keyDown(document, { key: "ArrowRight" });
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("displays caption when provided", () => {
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    expect(screen.getByText("Caption 1")).toBeInTheDocument();
  });

  it("displays image counter", () => {
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("has dialog role for accessibility", () => {
    render(
      <Lightbox images={images} currentIndex={0} isOpen={true} onClose={vi.fn()} onPrev={vi.fn()} onNext={vi.fn()} />
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
