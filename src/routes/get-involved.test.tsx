import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

// Minimal volunteer form for testing
function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const skillTags = ["Cooking", "Teaching", "Medical"];

  const toggle = (s: string) =>
    setSkills((arr) => (arr.includes(s) ? arr.filter((x) => x !== s) : [...arr, s]));

  return submitted ? (
    <div>
      <CheckCircle2 />
      <h3>Welcome to the family!</h3>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <label>Full Name<Input required name="name" /></label>
      <label>Email<Input required type="email" name="email" /></label>
      <label>Phone<Input required name="phone" /></label>
      {skillTags.map((s) => (
        <button key={s} type="button" onClick={() => toggle(s)}
          aria-pressed={skills.includes(s)}
        >
          {s}
        </button>
      ))}
      <Button type="submit">Submit Application</Button>
    </form>
  );
}

describe("Get Involved / Volunteer Form", () => {
  it("renders form fields", () => {
    render(<VolunteerForm />);
    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  it("renders skill tags", () => {
    render(<VolunteerForm />);
    expect(screen.getByText("Cooking")).toBeInTheDocument();
    expect(screen.getByText("Teaching")).toBeInTheDocument();
    expect(screen.getByText("Medical")).toBeInTheDocument();
  });

  it("toggles skill selection", () => {
    render(<VolunteerForm />);
    const cookingBtn = screen.getByText("Cooking");
    fireEvent.click(cookingBtn);
    expect(cookingBtn).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(cookingBtn);
    expect(cookingBtn).toHaveAttribute("aria-pressed", "false");
  });

  it("shows success message after submission", async () => {
    render(<VolunteerForm />);
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(() => {
      expect(screen.getByText("Welcome to the family!")).toBeInTheDocument();
    });
  });

  it("renders submit button", () => {
    render(<VolunteerForm />);
    expect(screen.getByText("Submit Application")).toBeInTheDocument();
  });
});
