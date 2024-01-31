import { ComputersCanvas } from ".";
import { styles } from "../styles/style";
import { ScrollToSection } from "./common/ScrollToSection";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-dot-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-dot-500"> Khaled </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Frontend Software Engineer
            <br className="sm:block hidden" /> I use React, React Native ,Vue
            and Angular
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <ScrollToSection href="#about" isAbsolute />
    </section>
  );
};

export default Hero;
