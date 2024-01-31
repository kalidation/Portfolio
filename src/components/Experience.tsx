import { Chrono } from "react-chrono";
import { items, timelines } from "../utils/constants";
import { bluetree, viseo } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { textVariant } from "../utils/motionAnimations";
import { Fragment } from "react";
import SectionHoc from "./common/SectionHoc";

const Experience = () => {
  return (
    <Fragment>
      <motion.div className="sm:ml-72 self-start" variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience:</h2>
      </motion.div>
      <motion.div className="w-full" variants={textVariant(1)}>
        <Chrono
          items={timelines}
          slideShow
          hideControls
          disableClickOnCircle
          activeItemIndex={100}
          cardHeight={300}
          cardWidth={800}
          mode="VERTICAL_ALTERNATING"
          slideItemDuration={5000}
          timelinePointDimension={100}
          onItemSelected={() => console.log("")}
          theme={{
            cardBgColor: "",
            cardTitleColor: "white",
            cardSubtitleColor: "white",
            cardDetailsColor: "white",
            titleColor: "white",
            titleColorActive: "white",
            iconBackgroundColor: "transparent",
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="p-1 w-full h-full rounded-xl mt-6
                      bg-gradient-to-br from-green-300 to-pink-300"
            >
              <div
                className="w-full h-full bg-tertiary place-content-center
                          rounded-xl py-3 px-5  flex 
                          justify-evenly items-start flex-col z-10"
              >
                <h3 className="text-white text-[20px] font-bold text-center">
                  {item.cardTitle}
                </h3>
                <h4>{item.cardSubtitle}</h4>
                <p className="mt-3">{item.cardDetailedText}</p>
              </div>
            </motion.div>
          ))}

          <div className="chrono-icons">
            <img
              className="rounded-full"
              src={bluetree}
              alt="bluetree-company"
            />
            <img
              className="w-[100px] h-[100px] bg-white rounded-full"
              src={viseo}
              alt="viseo-company"
            />
            <img
              className="w-[100px] h-[100px] bg-white rounded-full"
              src={viseo}
              alt="viseo-company"
            />
          </div>
        </Chrono>
      </motion.div>
    </Fragment>
  );
};

export default SectionHoc(Experience, "work");
