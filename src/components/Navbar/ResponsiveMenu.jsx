

import PropTypes from 'prop-types';
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

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu");
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Menulinks.map((data) => (
              <li key={data.name}>
                <Link to={data.link}>
                  <a href={data.link} className="mb-5 inline-block">
                    {data.name}
                  </a>
                </Link>

              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          <a href="">Copyright ©2024 A2Z Alphabet Solutionz PVT.LTD. All Rights Reserved .</a>{" "}
        </h1>
      </div>
    </div>
  );
};
ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;


