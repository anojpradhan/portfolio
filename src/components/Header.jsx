import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/#projects", label: "Projects" },
  { path: "/#experience", label: "Experience" },
  { path: "/#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        <NavLink
          className="flex items-center justify-center 
          w-9 h-9 sm:w-11 sm:h-11 
          rounded-full border-2 border-black 
          font-bold text-xs sm:text-base cursor-pointer"
          to={"/"}
        >
          AZZ
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <HashLink
              key={item.path}
              to={item.path}
              className="relative text-lg lg:text-xl font-sans transition-colors
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-black after:transition-all after:duration-300
                after:w-0 hover:after:w-full"
            >
              {item.label}
            </HashLink>
          ))}

          {/* Resume */}
          <a
            href="/AnojPradhan.pdf"
            download
            className="flex items-center gap-2 bg-black text-white 
            px-3 py-2 rounded-md text-sm
            hover:scale-105 hover:opacity-90 transition-all"
          >
            Resume <FileText size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden flex items-center justify-center 
          w-9 h-9 sm:w-10 sm:h-10 rounded-md 
          hover:bg-gray-100 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && <MobileMenu close={() => setOpen(false)} />}
    </header>
  );
};

export default Header;
