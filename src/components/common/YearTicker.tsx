import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ year, start }: { year: number; start: boolean }) => {
  const reduce = useReducedMotion();
  const value = useMotionValue(reduce ? year : year - 4);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!start) return;
    const controls = animate(value, year, {
      duration: reduce ? 0 : 1.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [start, year, value, reduce]);

  return <motion.span>{rounded}</motion.span>;
};

export const YearTicker = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <span ref={ref}>
      {text.split(/(\b20\d\d\b)/).map((part, i) =>
        /^20\d\d$/.test(part) ? (
          <Counter key={i} year={Number(part)} start={inView} />
        ) : (
          part
        ),
      )}
    </span>
  );
};
