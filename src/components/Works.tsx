import { motion } from "framer-motion";
import { projects } from "../utils/constants";
import { fadeIn } from "../utils/motionAnimations";
import { ProjectCard } from "./common/ProjectCard";
import SectionHoc from "./common/SectionHoc";
import { SectionHeader } from "./common/SectionHeader";

const Works = () => {
  return (
    <>
      <SectionHeader subtitle="Where i have worked" title="Projects:" />
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "tween", 0.1, 1)}
          className="sm:ml-72 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my worked and also my personel projects. Each
          project os briefly described with links to code repositories "Not all
          for privacy" It reflects my ability to solve problems, work with
          different technologies and manage project effectively
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-10 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionHoc(Works, "works");
