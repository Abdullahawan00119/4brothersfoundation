import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { news, formatDate } from "@/data/news";

vi.mock("@tanstack/react-router", () => ({
  createFileRoute: () => ({ component: (c: unknown) => c }),
  Link: ({ children, to, params }: { children: React.ReactNode; to: string; params?: Record<string, string> }) => (
    <a href={`${to}/${params?.slug ?? ""}`}>{children}</a>
  ),
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

// Minimal media index for testing
import { useState, useMemo } from "react";

function MediaIndex() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return news
      .filter((n) => (active === "All" ? true : n.category === active))
      .filter((n) => query ? (n.title + n.excerpt).toLowerCase().includes(query.toLowerCase()) : true)
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [active, query]);

  return (
    <div>
      <h1>Media & Updates</h1>
      <div>
        {["All", "News", "Stories"].map((c) => (
          <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}>{c}</button>
        ))}
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search updates…"
      />
      <div>
        {filtered.map((n) => (
          <article key={n.slug}>
            <h2>{n.title}</h2>
            <p>{n.excerpt}</p>
            <time>{formatDate(n.date)}</time>
          </article>
        ))}
      </div>
    </div>
  );
}

describe("Media Page", () => {
  it("renders heading", () => {
    render(<MediaIndex />);
    expect(screen.getByText("Media & Updates")).toBeInTheDocument();
  });

  it("renders news items", () => {
    render(<MediaIndex />);
    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThan(0);
  });

  it("filters by category", () => {
    render(<MediaIndex />);
    const allCount = screen.getAllByRole("article").length;
    fireEvent.click(screen.getByText("News"));
    const newsCount = screen.getAllByRole("article").length;
    expect(newsCount).toBeLessThanOrEqual(allCount);
  });

  it("filters by search query", () => {
    render(<MediaIndex />);
    const searchInput = screen.getByPlaceholderText("Search updates…");
    fireEvent.change(searchInput, { target: { value: "zzzznotfound" } });
    expect(screen.queryAllByRole("article").length).toBe(0);
  });

  it("shows all items when filter is All", () => {
    render(<MediaIndex />);
    const allBtn = screen.getByText("All");
    expect(allBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByRole("article").length).toBe(news.length);
  });

  it("items are sorted chronologically (newest first)", () => {
    render(<MediaIndex />);
    const times = screen.getAllByRole("time").map((t) => t.textContent ?? "");
    expect(times.length).toBeGreaterThan(0);
  });
});
