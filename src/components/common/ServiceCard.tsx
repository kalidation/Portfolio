import { AnimatedCard } from "./AnimatedCard";

interface IProps {
  title: string;
  index: number;
  icon: string;
}

export const ServiceCard = (props: IProps) => {
  const { icon, index, title } = props;

  return (
    <AnimatedCard index={index} width="250px">
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="w-full bg-tertiary place-content-center
                    rounded-xl py-5 px-12 min-h-[280px] flex 
                    justify-evenly items-center flex-col z-10"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </AnimatedCard>
  );
};
