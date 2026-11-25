import { aiPractices, technologies } from "../utils/constants";
import { SectionHeader } from "./common/SectionHeader";
import SectionHoc from "./common/SectionHoc";

const Tech = () => {
  return (
    <>
      <SectionHeader subtitle="What i have used so far" title="Technologies:" />
      <ul className="flex flex-row h-full mt-10 w-full sm:w-9/12 lg:w-7/12 flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((tech, index) => (
          <li
            key={tech.name}
            className="tech-float flex flex-col items-center gap-2"
            style={{ animationDelay: `${-index * 0.6}s` }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-card sm:h-24 sm:w-24">
              <img
                src={tech.icon}
                alt={tech.name}
                loading="lazy"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>
            <span className="text-[13px] text-secondary">{tech.name}</span>
          </li>
        ))}
      </ul>
      <span className="hash-span" id="ai">
        &nbsp;
      </span>
      <div className="card-border card-wave mt-16 w-full max-w-3xl rounded-xl p-2">
        <div className="rounded-xl bg-tertiary p-6 sm:p-8">
          <h3 className="text-[22px] font-bold text-white">
            AI in my workflow
          </h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[16px] leading-7 text-white/90 marker:text-[#915eff]">
            {aiPractices.map((practice) => (
              <li key={practice}>{practice}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionHoc(Tech, "tech");
