import { motion } from "framer-motion";
import { services } from "../utils/constants";
import { fadeIn } from "../utils/motionAnimations";
import { ScrollToSection } from "./common/ScrollToSection";
import SectionHoc from "./common/SectionHoc";
import { SectionHeader } from "./common/SectionHeader";
import { ServiceCard } from "./common/ServiceCard";

const About = () => {
  return (
    <>
      <SectionHeader
        subtitle="Introduction"
        title="Overview:"
        className="mt-4"
      />
      <motion.p
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-4 sm:ml-72 ml-0 text-secondary text-[17px] max-w-3xl leading-[30px] self-start"
      >
        I'm a Confirmed Software Engineer (5+ years of experience), mostly
        Front-End &amp; Mobile, specialized in React, React Native and
        TypeScript. I have strong expertise in Design Systems and
        business-critical applications, and I also work on Fullstack .NET /
        Azure projects. I'm a quick learner and passionate about software
        development; outside of work I enjoy reading about the philosophy of
        science and history, watching anime and thrillers, and swimming.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mb-5">
        <ScrollToSection href="#experience" isAbsolute={false} />
      </div>
    </>
  );
};

export default SectionHoc(About, "about");
