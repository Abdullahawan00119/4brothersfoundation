import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "header";
} & Omit<HTMLMotionProps<"div">, "children">;

const getDirectionOffset = (direction: Direction = "up") => {
  const offset = 28;
  switch (direction) {
    case "up":
      return { x: 0, y: offset };
    case "down":
      return { x: 0, y: -offset };
    case "left":
      return { x: offset, y: 0 };
    case "right":
      return { x: -offset, y: 0 };
  }
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  once = true,
  className,
  as = "div",
  ...rest
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  const offset = getDirectionOffset(direction);

  // If user prefers reduced motion, skip animations
  const initial = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, ...offset };
  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : inView
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, ...offset };

  return (
    <Comp
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
