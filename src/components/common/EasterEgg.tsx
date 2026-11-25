import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const PARTY_EVENT = "portfolio:party";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];
const COLORS = ["#915eff", "#86efac", "#f9a8d4", "#56ccf2", "#fcd34d"];

const pieces = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  color: COLORS[i % COLORS.length],
  delay: (i % 10) * 0.06,
  duration: 2 + ((i * 7) % 15) / 10,
  size: 6 + (i % 5) * 2,
  drift: ((i * 13) % 160) - 80,
}));

export const EasterEgg = () => {
  const [active, setActive] = useState(false);

  const party = useCallback(() => {
    setActive(true);
    setTimeout(() => setActive(false), 4200);
  }, []);

  useEffect(() => {
    let progress = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        party();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(PARTY_EVENT, party);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PARTY_EVENT, party);
    };
  }, [party]);

  return (
    <AnimatePresence>
      {active && (
        <div
          role="status"
          className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
        >
          {pieces.map((p) => (
            <motion.span
              key={p.id}
              className="absolute -top-4 rounded-sm"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.6,
                background: p.color,
              }}
              initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
              animate={{ y: "110vh", x: p.drift, rotate: 540, opacity: [1, 1, 0] }}
              transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
            />
          ))}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-tertiary px-6 py-3 text-center font-semibold text-white shadow-card"
          >
            You found it! Thanks for exploring 🎉
          </motion.p>
        </div>
      )}
    </AnimatePresence>
  );
};
