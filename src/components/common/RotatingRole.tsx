import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["React", "React Native", "TypeScript", "Design Systems"];

export const RotatingRole = () => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <p
      className="mt-4 flex h-9 items-center gap-2 overflow-hidden text-[20px] font-bold text-dot-500 sm:text-[26px]"
      aria-label={roles.join(", ")}
    >
      <span aria-hidden className="text-secondary">
        {"<"}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          aria-hidden
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden className="text-secondary">
        {"/>"}
      </span>
    </p>
  );
};
