import { Fragment } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { fadeIn, textVariant } from "../utils/motionAnimations";
import { services } from "../utils/constants";
import { ServiceCard } from "./common/ServiceCard";
import SectionHoc from "./common/SectionHoc";
import { ScrollToSection } from "./common/ScrollToSection";

const About = () => {
  return (
    <Fragment>
      <motion.div
        className="sm:ml-72 ml-0 mt-4 self-start"
        variants={textVariant(1)}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview:</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 sm:ml-72 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px] self-start"
      >
        I'm a Frontend Software Engineer Developer With experience in
        Typescript, i'm mid-Junior expert in frameworks such as React mostly, 
        React Native, VueJs and Angular, with some knowledge in backend dev with
        Java Spring Boot. I'M a quick learner and passionated in Software
        Developement, i've some hobbies like watch and reading philosophy of
        science and history. I like to watch animes and Thriller movies and also
        i love to practice swimming.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mb-5">
        <ScrollToSection href="#experience" isAbsolute={false} />
      </div>
    </Fragment>
  );
};

export default SectionHoc(About, "about");
