import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { github } from "../../assets";
import { type Tag } from "../../utils/constants";
import { AnimatedCard } from "./AnimatedCard";

interface IPorps {
  name: string;
  description: string;
  image: string;
  tags: Tag[];
  sourceCodeLink: string;
  details: string[];
  index: number;
}

const CARD_HEIGHT = 440;

const ProjectDialog = ({
  name,
  image,
  tags,
  details,
  onClose,
}: Pick<IPorps, "name" | "image" | "tags" | "details"> & {
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${name} details`}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-tertiary p-5 text-white"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { opacity: 0, scale: 0.85, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <motion.button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full black-gradient text-xl cursor-pointer"
          initial={reduce ? false : { opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          ×
        </motion.button>
        <div
          style={{ aspectRatio: "960 / 560" }}
          className="w-full rounded-xl overflow-hidden bg-[#f5f6f8]"
        >
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <h2 className="mt-4 text-2xl font-bold">{name}</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-secondary text-[15px] leading-6">
          {details.map((detail, i) => (
            <motion.li
              key={detail}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            >
              {detail}
            </motion.li>
          ))}
        </ul>
        <div className="flex mt-4 flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.p
              key={tag.name}
              className={tag.color}
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.07, type: "spring" }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectCard = (props: IPorps) => {
  const { name, description, image, tags, sourceCodeLink, details, index } =
    props;
  const [open, setOpen] = useState(false);

  return (
    <AnimatedCard index={index} width="350px">
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          height: CARD_HEIGHT,
        }}
        className="relative p-2 w-full bg-tertiary 
                    rounded-2xl flex flex-col"
      >
        <div
          style={{ aspectRatio: "960 / 560", flexShrink: 0 }}
          className="w-full rounded-2xl overflow-hidden bg-[#f5f6f8]"
        >
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <button
          onClick={() => window.open(sourceCodeLink, "_black")}
          className="absolute z-10 top-3 right-3 card-img_hover black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            className="h-full w-full cursor-pointer object-contain"
          />
        </button>
        <div className="mt-4 ml-2 flex flex-col items-start">
          <h1 className="font-bold">{name}</h1>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="text-start mt-1"
          >
            {description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="see-more mt-1 text-[14px] font-semibold cursor-pointer"
          >
            See more
          </button>
        </div>
        <div
          style={{ marginTop: "auto", maxHeight: 48, flexShrink: 0, fontSize: 13 }}
          className="flex flex-wrap gap-x-2 gap-y-0 ml-2 overflow-hidden"
        >
          {tags.map((tag) => (
            <p
              key={tag.name}
              style={{ fontSize: 13, lineHeight: "20px" }}
              className={`${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      {createPortal(
        <AnimatePresence>
          {open && (
            <ProjectDialog
              name={name}
              image={image}
              tags={tags}
              details={details}
              onClose={() => setOpen(false)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </AnimatedCard>
  );
};
