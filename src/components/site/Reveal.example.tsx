/**
 * Reveal Component Usage Examples
 * 
 * This file demonstrates the various ways to use the Reveal component
 * for scroll-triggered animations throughout the website.
 */

import { Reveal } from "./Reveal";

export function RevealExamples() {
  return (
    <div className="space-y-20 py-20">
      {/* Example 1: Basic usage with default direction (up) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Default Animation (Up)</h2>
        <Reveal>
          <div className="p-6 bg-card rounded-lg border">
            This content slides up and fades in when it enters the viewport.
          </div>
        </Reveal>
      </section>

      {/* Example 2: Different directions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Animation Directions</h2>
        <div className="grid grid-cols-2 gap-4">
          <Reveal direction="up">
            <div className="p-6 bg-card rounded-lg border">Slides Up</div>
          </Reveal>
          <Reveal direction="down">
            <div className="p-6 bg-card rounded-lg border">Slides Down</div>
          </Reveal>
          <Reveal direction="left">
            <div className="p-6 bg-card rounded-lg border">Slides Left</div>
          </Reveal>
          <Reveal direction="right">
            <div className="p-6 bg-card rounded-lg border">Slides Right</div>
          </Reveal>
        </div>
      </section>

      {/* Example 3: Staggered animations with delay */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Staggered Animations</h2>
        <div className="grid grid-cols-3 gap-4">
          {[0, 0.1, 0.2].map((delay, i) => (
            <Reveal key={i} delay={delay}>
              <div className="p-6 bg-card rounded-lg border">
                Card {i + 1} (delay: {delay}s)
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Example 4: Animate multiple times (once=false) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Repeating Animation</h2>
        <Reveal once={false}>
          <div className="p-6 bg-card rounded-lg border">
            This animates every time it enters the viewport (scroll up and down to see)
          </div>
        </Reveal>
      </section>

      {/* Example 5: Using different HTML elements */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Different HTML Elements</h2>
        <Reveal as="section">
          <div className="p-6 bg-card rounded-lg border">
            This is wrapped in a section element
          </div>
        </Reveal>
        <Reveal as="article" delay={0.1}>
          <div className="p-6 bg-card rounded-lg border mt-4">
            This is wrapped in an article element
          </div>
        </Reveal>
      </section>

      {/* Example 6: Custom className */}
      <section>
        <h2 className="text-2xl font-bold mb-4">With Custom Styling</h2>
        <Reveal className="max-w-2xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
            This has custom classes applied to the wrapper
          </div>
        </Reveal>
      </section>

      {/* Example 7: Real-world usage - Program cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Example: Program Cards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Education", "Healthcare", "Food Relief"].map((program, i) => (
            <Reveal key={program} delay={i * 0.1} direction="up">
              <article className="group relative h-[300px] rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{program}</h3>
                  <p className="text-white/90">
                    Providing essential {program.toLowerCase()} services to communities in need.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Note about reduced motion */}
      <section className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Accessibility Note</h3>
        <p className="text-sm text-muted-foreground">
          The Reveal component automatically respects the user's prefers-reduced-motion setting.
          When enabled, animations are disabled and content appears immediately without motion effects.
        </p>
      </section>
    </div>
  );
}
