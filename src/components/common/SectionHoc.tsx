import { motion } from "framer-motion";
import type { FC } from "react";

import { staggerContainer } from "../../utils/motionAnimations";

const SectionHoc = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`w-11/12 flex flex-col justify-center items-center m-auto py-8`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionHoc;
