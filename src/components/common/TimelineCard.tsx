import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { type MouseEvent, useState, useSyncExternalStore } from "react";

interface IProps {
  title: string;
  subtitle: string;
  text: string;
  tags: string[];
  isLeft: boolean;
  active: boolean;
  className?: string;
}

const COLLAPSED_HEIGHT = 112;
const TILT = 5;

const desktopQuery = "(min-width: 768px)";
const subscribeDesktop = (cb: () => void) => {
  const mq = window.matchMedia(desktopQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getDesktop = () => window.matchMedia(desktopQuery).matches;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const } },
};

export const TimelineCard = (props: IProps) => {
  const { title, subtitle, text, tags, isLeft, active, className = "" } = props;
  const reduce = useReducedMotion();
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktop, () => true);
  const [open, setOpen] = useState(false);
  const lines = text.split("\n").map((line) => line.trim());
  const collapsible = text.length > 220;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [TILT, -TILT]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-TILT, TILT]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fromX = isDesktop ? (isLeft ? -70 : 70) : 40;

  return (
    <motion.div
      className={className}
      style={{ perspective: 1000 }}
      initial={reduce ? false : { opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{
          opacity: active ? 1 : 0.6,
          boxShadow: active
            ? "0 0 40px rgba(145,94,255,0.35)"
            : "0 0 0 rgba(145,94,255,0)",
        }}
        transition={{ duration: 0.4 }}
        className="card-border relative p-1 rounded-xl"
      >
        <span
          aria-hidden
          className={`timeline-connector ${
            isLeft ? "-left-6 md:left-auto md:-right-6" : "-left-6"
          }`}
        />
        <motion.div
          variants={stagger}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="h-full bg-tertiary rounded-xl py-3 px-5 flex flex-col gap-1"
        >
          <motion.h3 variants={rise} className="text-white text-[20px] font-bold">
            {title}
          </motion.h3>
          <motion.h4 variants={rise}>{subtitle}</motion.h4>

          <motion.div variants={rise} className="mt-3">
            <motion.div
              initial={false}
              animate={{ height: collapsible && !open ? COLLAPSED_HEIGHT : "auto" }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="relative space-y-2 overflow-hidden"
            >
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {collapsible && !open && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-tertiary to-transparent"
                />
              )}
            </motion.div>
            {collapsible && (
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="see-more mt-2 text-[14px] font-semibold cursor-pointer"
              >
                {open ? "Show less" : "Read more"}
              </button>
            )}
          </motion.div>

          {tags.length > 0 && (
            <motion.ul
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={pop}
                  className="rounded-full border border-dot-500/60 bg-dot-500/10 px-3 py-0.5 text-[12px] text-white-100"
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
