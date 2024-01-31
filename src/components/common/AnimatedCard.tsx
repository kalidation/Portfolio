import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeIn } from "../../utils/motionAnimations";

interface IProps {
  children: React.JSX.Element[] | React.JSX.Element;
  index: number;
  width: string;
}

export const AnimatedCard = ({ children, index, width }: IProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      className={`w-[250px] p-2 rounded-xl bg-gradient-to-br from-green-300 to-pink-300 cursor-default`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      style={{
        width: width ?? "250px",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.button>
  );
};
