import { Link } from "react-router-dom";
import { logo, close, menu } from "../../assets";
import { styles } from "../../styles/style";
import { useState } from "react";
import { navLinks } from "../../utils/constants";
import { NavLinkItem } from "./NavLinkItem";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [isToggle, setIsToggle] = useState<boolean>(false);

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
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-[18px] flex font-bold cursor-pointer">
            Khaled &nbsp;{" "}
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.id}
              active={active}
              link={link}
              textSize={18}
              onClick={() => setActive(link.title)}
            />
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setIsToggle(!isToggle)}>
            <img
              src={isToggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
            <div
              className={`${
                !isToggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLinkItem
                    key={link.id}
                    active={active}
                    link={link}
                    textSize={16}
                    onClick={() => {
                      setActive(link.title);
                      setIsToggle(!isToggle);
                    }}
                  />
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
