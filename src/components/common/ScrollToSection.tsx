import { motion } from "framer-motion";

interface IProps {
  href: string;
  isAbsolute?: boolean;
}

export const ScrollToSection = (props: IProps) => {
  const { href, isAbsolute } = props;

  return (
    <div
      className={`${
        isAbsolute ? "absolute xs:bottom-6 bottom-8" : ""
      } w-full flex justify-center items-center`}
    >
      <a href={href}>
        <div className="w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  );
};
