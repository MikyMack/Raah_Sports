import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Changed HiMenuAlt1 to HiX for close icon
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logoraahsports.png";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";


const Menulinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "VISION",
    link: "/#vision",
  },
  {
    id: 1,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 1,
    name: "CONTACT",
    link: "/#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 w-full bg-slate-800 dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <Link to='/'>
            <a
              target="_blank"
              href=""
              className="flex flex-col items-center gap-3" rel="noreferrer"
            >
              <img src={Logo} alt="" className="w-32" />

            </a>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Menulinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link to={link}>

                    <a
                      href={link}
                      className=" text-lg font-medium text-white hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                    >
                      {name}
                    </a>
                  </Link>

                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {showMenu ? (
              <HiX
                onClick={toggleMenu}
                className=" cursor-pointer transition-all text-white"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-white"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
