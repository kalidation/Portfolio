import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { slideIn } from "../utils/motionAnimations";
import SectionHoc from "./common/SectionHoc";
import { EarthCanvas } from ".";
import { LinkedinCanvas } from "./canvas";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div
      className="xl:flex-row flex-col-reverse flex gap-10
      overflow-hidden h-full w-6/12 justify-around items-center mt-10 pb-20
    "
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        {/* <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact:</h2> */}

        <motion.div
          className="flex flex-col gap-y-4"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          {/* <div className="flex w-[320px] mt-10 gap-x-3 items-center">
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/kalidation/"
            />
            <h1>www.linkedin.com/in/kalidation</h1>
          </div> */}
          <div className="flex w-[468px] gap-x-3 items-center">
            <SocialIcon url="https://www.github.com/kalidation" />
            <h1 className="text-xl">www.github.com/kalidation</h1>
          </div>
          {/* <div className="flex w-[320px] gap-x-3 items-center">
            <SocialIcon network="mailto" />
            <h1>khaled.bougdour@gmail.com</h1>
          </div> */}
        </motion.div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionHoc(Contact, "contact");
