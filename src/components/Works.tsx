import { Fragment } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { fadeIn, textVariant } from "../utils/motionAnimations";
import SectionHoc from "./common/SectionHoc";
import { projects } from "../utils/constants";
import { ProjectCard } from "./common/ProjectCard";

const Works = () => {
  return (
    <Fragment>
      <motion.div className="sm:ml-72 self-start" variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Where i have worked</p>
        <h2 className={styles.sectionHeadText}>Projects:</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="sm:ml-72 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my worked and also my personel projects. Each
          project os briefly described with links to code repositories "Not all
          for privacy" It reflects my ability to solve problems, work with
          different technologies and manage project effectively
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </Fragment>
  );
};

export default SectionHoc(Works, "works");
