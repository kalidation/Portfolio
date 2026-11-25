import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../../assets";
import { styles } from "../../styles/style";
import { PARTY_EVENT } from "../common/EasterEgg";
import { navLinks } from "../../utils/constants";
import { NavLinkItem } from "./NavLinkItem";

interface NavListProps {
  active: string;
  className: string;
  linkClassName: string;
  onSelect: (title: string) => void;
}

const NavList = ({
  active,
  className,
  linkClassName,
  onSelect,
}: NavListProps) => (
  <ul className={`list-none ${className}`}>
    {navLinks.map((link) => (
      <NavLinkItem
        key={link.id}
        active={active}
        link={link}
        className={linkClassName}
        onClick={() => onSelect(link.title)}
      />
    ))}
  </ul>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const clicks = useRef({ count: 0, last: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            const now = Date.now();
            const c = clicks.current;
            c.count = now - c.last < 800 ? c.count + 1 : 1;
            c.last = now;
            if (c.count >= 5) {
              c.count = 0;
              window.dispatchEvent(new Event(PARTY_EVENT));
            }
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-[18px] flex font-bold cursor-pointer">
            Khaled &nbsp;{" "}
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>
        <NavList
          className="hidden sm:flex flex-row gap-10"
          linkClassName="text-[18px]"
          active={active}
          onSelect={setActive}
        />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setIsToggle((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isToggle}
          >
            <img
              src={isToggle ? close : menu}
              alt=""
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          </button>
          {isToggle && (
            <div className="flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <NavList
                className="flex flex-col items-start justify-end gap-4"
                linkClassName="text-[16px]"
                active={active}
                onSelect={(title) => {
                  setActive(title);
                  setIsToggle(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-dot-500"
      />
    </nav>
  );
};

export default Navbar;
