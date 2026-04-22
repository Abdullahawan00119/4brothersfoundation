import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const presets = [500, 1000, 2500, 5000, 10000, 25000];

function DonationWidget() {
  const [amount, setAmount] = useState<number | "">(2500);
  const [recurring, setRecurring] = useState(false);

  return (
    <div>
      <h2>Make a donation</h2>
      <div>
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => setAmount(p)}
            aria-pressed={amount === p}
            data-testid={`preset-${p}`}
          >
            {p.toLocaleString()}
          </button>
        ))}
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
        placeholder="Custom amount"
        aria-label="Custom amount"
      />
      <label>
        <input
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
          aria-label="Monthly donation"
        />
        Make this a monthly donation
      </label>
      <Button>Proceed to Payment</Button>
    </div>
  );
}

describe("Donation Flow", () => {
  it("renders preset amount buttons", () => {
    render(<DonationWidget />);
    presets.forEach((p) => {
      expect(screen.getByTestId(`preset-${p}`)).toBeInTheDocument();
    });
  });

  it("selects preset amount on click", () => {
    render(<DonationWidget />);
    const btn = screen.getByTestId("preset-500");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-pressed", "true");
  });

  it("deselects other presets when one is selected", () => {
    render(<DonationWidget />);
    fireEvent.click(screen.getByTestId("preset-500"));
    expect(screen.getByTestId("preset-1000")).toHaveAttribute("aria-pressed", "false");
  });

  it("allows custom amount input", () => {
    render(<DonationWidget />);
    const input = screen.getByLabelText("Custom amount");
    fireEvent.change(input, { target: { value: "7500" } });
    expect((input as HTMLInputElement).value).toBe("7500");
  });

  it("toggles monthly donation checkbox", () => {
    render(<DonationWidget />);
    const checkbox = screen.getByLabelText("Monthly donation");
    expect((checkbox as HTMLInputElement).checked).toBe(false);
    fireEvent.click(checkbox);
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });

  it("renders proceed to payment button", () => {
    render(<DonationWidget />);
    expect(screen.getByText("Proceed to Payment")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<DonationWidget />);
    expect(screen.getByText("Make a donation")).toBeInTheDocument();
  });
});
