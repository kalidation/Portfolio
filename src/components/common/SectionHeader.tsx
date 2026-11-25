import { motion } from "framer-motion";

import { styles } from "../../styles/style";
import { textVariant } from "../../utils/motionAnimations";

interface IProps {
  subtitle: string;
  title: string;
  className?: string;
}

export const SectionHeader = ({ subtitle, title, className = "" }: IProps) => (
  <motion.div
    className={`sm:ml-72 self-start ${className}`}
    variants={textVariant(1)}
  >
    <p className={styles.sectionSubText}>{subtitle}</p>
    <h2 className={styles.sectionHeadText}>{title}</h2>
    <motion.span
      aria-hidden
      variants={{
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { duration: 0.8, delay: 0.8 } },
      }}
      className="mt-2 block h-1 w-24 origin-left rounded-full green-pink-gradient"
    />
  </motion.div>
);
