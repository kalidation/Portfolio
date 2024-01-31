import { technologies } from "../utils/constants";
import { BallCanvas } from "./canvas";
import SectionHoc from "./common/SectionHoc";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { textVariant } from "../utils/motionAnimations";
import { Fragment } from "react";

const Tech = () => {
  return (
    <Fragment>
      <motion.div className="sm:ml-72 self-start" variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What i have used so far</p>
        <h2 className={styles.sectionHeadText}>Technologies:</h2>
      </motion.div>
      <div className="flex flex-row h-full mt-6 w-7/12 flex-wrap justify-center gap-x-20">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SectionHoc(Tech, "#tech");
