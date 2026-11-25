import { type NavLink } from "../../utils/constants";

interface IProps {
  active: string;
  link: NavLink;
  onClick: () => void;
  className?: string;
}

export const NavLinkItem = (props: IProps) => {
  const { active, link, onClick, className = "" } = props;

  return (
    <li
      className={`${
        active === link.title ? "text-white" : "text-secondary"
      } hover:text-white font-medium cursor-pointer ${className}`}
    >
      <a
        onClick={onClick}
        href={`#${link.id}`}
        className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-dot-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        {link.title}
      </a>
    </li>
  );
};
