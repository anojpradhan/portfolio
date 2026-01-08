import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileMenu = ({ close }) => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#projects", label: "Projects" },
    { path: "/#experience", label: "Experience" },
    { path: "/#contact", label: "Contact" },
  ];
  return (
    <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4">
      {navLinks.map((item) => (
        <HashLink
          key={item.path}
          to={item.path}
          onClick={close}
          className="text-lg font-medium"
        >
          {item.label}
        </HashLink>
      ))}
    </div>
  );
};

export default MobileMenu;
