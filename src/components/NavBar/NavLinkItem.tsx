import { NavLink } from "../../utils/constants";

interface IProps {
  active: string;
  link: NavLink;
  onClick: () => void;
  textSize: number;
}

export const NavLinkItem = (props: IProps) => {
  const { active, link, onClick, textSize } = props;

  return (
    <li
      key={link.id}
      className={`${
        active === link.title ? "text-white" : "text-secondary"
      } hover:text-white text-[${textSize}px]  font-medium cursor-pointer`}
    >
      <a onClick={onClick} href={`#${link.id}`}>
        {link.title}
      </a>
    </li>
  );
};
