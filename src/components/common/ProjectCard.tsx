import { github } from "../../assets";
import { Tag } from "../../utils/constants";
import { AnimatedCard } from "./AnimatedCard";

interface IPorps {
  name: string;
  description: string;
  image: string;
  tags: Tag[];
  sourceCodeLink: string;
  index: number;
}

export const ProjectCard = (props: IPorps) => {
  const { name, description, image, tags, sourceCodeLink, index } = props;

  return (
    <AnimatedCard index={index} width="350px">
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative pb-2 w-full h-full bg-tertiary 
                    rounded-2xl flex flex-col"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-fill rounded-2xl"
        />
        <button
          onClick={() => window.open(sourceCodeLink, "_black")}
          className="absolute z-10 top-3 right-3 card-img_hover black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            className="h-full w-full cursor-pointer object-contain"
          />
        </button>
        <div className="mt-5 ml-2 flex flex-col items-start">
          <h1 className="font-bold">{name}</h1>
          <p className="text-start mt-1">{description}</p>
        </div>
        <div className="flex mt-4 flex-wrap gap-2 ml-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
};
