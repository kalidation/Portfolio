import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { slideIn } from "../utils/motionAnimations";
import { EarthCanvas } from "./canvas";
import { CopyEmail } from "./common/CopyEmail";
import SectionHoc from "./common/SectionHoc";
import { styles } from "../styles/style";

const Contact = () => {
  return (
    <div
      className="xl:flex-row flex-col-reverse flex gap-10
      overflow-hidden h-full w-full px-2 sm:px-0 xl:w-8/12 justify-around items-center mt-10 pb-20
    "
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact:</h2>

        <motion.div
          className="flex flex-col gap-y-4"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <div className="flex mt-10 gap-x-3 items-center">
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/kalidation/"
            />
            <h1 className="break-all">www.linkedin.com/in/kalidation</h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <SocialIcon url="https://www.github.com/kalidation" />
            <h1 className="text-base sm:text-xl break-all">www.github.com/kalidation</h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <SocialIcon network="mailto" />
            <h1 className="break-all">khaled.bougdour@gmail.com</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <CopyEmail email="khaled.bougdour@gmail.com" />
            <a
              href={`${import.meta.env.BASE_URL}Resume-khaled-bougdour-EN.pdf`}
              download
              className="rounded-full bg-dot-500 px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionHoc(Contact, "contact");
