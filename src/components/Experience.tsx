import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { items } from "../utils/constants";
import { textVariant } from "../utils/motionAnimations";
import { CodeParticles } from "./common/CodeParticles";
import { TimelineCard } from "./common/TimelineCard";
import { YearTicker } from "./common/YearTicker";
import SectionHoc from "./common/SectionHoc";
import { SectionHeader } from "./common/SectionHeader";

const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const nodes = listRef.current?.querySelectorAll<HTMLElement>("[data-card]");
    if (!nodes) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.card));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative isolate w-full flex flex-col items-center">
      <CodeParticles />
      <SectionHeader
        subtitle="What i have done so far"
        title="Work Experience:"
      />
      <motion.ol
        ref={listRef}
        className="relative w-full max-w-6xl mt-10 flex flex-col gap-12"
        variants={textVariant(1)}
      >
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-10 md:left-1/2 w-1 -translate-x-1/2 bg-blue-500/20"
        />
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute top-0 bottom-0 left-10 md:left-1/2 w-1 -translate-x-1/2 origin-top bg-blue-500"
        />
        {items.map((item, index) => {
          const isLeftCard = index % 2 === 0;
          return (
            <li
              key={item.title}
              data-card={index}
              className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-2 md:items-center"
            >
              <motion.img
                initial={{ scale: 1 }}
                whileInView={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(145,94,255,0.7)",
                    "0 0 0 18px rgba(145,94,255,0)",
                    "0 0 0 0 rgba(145,94,255,0)",
                  ],
                }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.2 }}
                src={item.logo}
                alt={`${item.cardSubtitle} logo`}
                className="z-10 w-20 h-20 rounded-full bg-white object-contain col-start-1 row-span-2 md:col-start-2 md:row-span-1 md:row-start-1"
              />
              <p
                className={`font-bold text-white col-start-2 row-start-1 md:row-start-1 ${
                  isLeftCard
                    ? "md:col-start-3 md:text-left"
                    : "md:col-start-1 md:text-right"
                }`}
              >
                <YearTicker text={item.title} />
              </p>
              <TimelineCard
                title={item.cardTitle}
                subtitle={item.cardSubtitle}
                text={item.cardDetailedText}
                tags={item.tags}
                isLeft={isLeftCard}
                active={activeIndex === null || activeIndex === index}
                className={`col-start-2 row-start-2 md:row-start-1 ${
                  isLeftCard ? "md:col-start-1" : "md:col-start-3"
                }`}
              />
            </li>
          );
        })}
      </motion.ol>
    </div>
  );
};

export default SectionHoc(Experience, "work");
