import { styles } from "../styles/style";
import { ComputersCanvas } from "./canvas";
import { RotatingRole } from "./common/RotatingRole";
import { ScrollToSection } from "./common/ScrollToSection";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

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
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[16px] text-secondary sm:text-[20px]">
            <span>{getGreeting()} 👋</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-green-300/10 px-3 py-1 text-[13px] font-medium text-green-300 sm:text-[14px]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-300" />
              </span>
              Available for new missions
            </span>
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-dot-500"> Khaled </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Confirmed Software Engineer
            <br className="sm:block hidden" /> Mostly Front-End &amp; Mobile:
            React, React Native and TypeScript
          </p>
          <RotatingRole />
        </div>
      </div>
      <ComputersCanvas />
      <ScrollToSection href="#about" isAbsolute />
    </section>
  );
};

export default Hero;
