import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import img from "../../src/assets/brands/aboutus-bg.jpg";
import Loader from "../Loader/Loader.jsx";

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="dark:bg-black dark:text-white">
      {/* Navbar component with the toggleMenu prop */}
      <Navbar toggleMenu={toggleMenu} />

      {/* Conditional rendering for About page content */}
      {!isMenuOpen && (
        <div className="relative">
          {/* Background image */}
          <img
            src={img}
            className="absolute blur-sm inset-0 w-full h-[1200px] object-cover filter brightness-50"
            alt="Background"
          />

          {/* Content */}
          <div
            className="container mx-auto p-9 flex flex-col justify-between gap-10 items-center relative z-0"
            style={{ marginTop: "80px" }}
          >
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Welcome to Raah Sports Development
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Welcome to the dynamic world of sports excellence, where
                  passion meets precision – introducing Raah Sports Development
                  Private Limited. We are not just a sports organization; we are
                  architects of athletic growth, committed to sculpting the
                  champions of tomorrow.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://png.pngtree.com/background/20230614/original/pngtree-soccer-wallpaper-hd-tv-picture-image_3536276.jpg"
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Who We Are
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Raah Sports Development is a leading private limited company
                  dedicated to the holistic development of sports at every
                  level. With an unwavering commitment to fostering talent,
                  instilling discipline, and promoting a culture of
                  sportsmanship, we have emerged as a pivotal force in the
                  sports industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://wallpaperaccess.com/full/1398619.jpg"
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Our Mission
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  At Raah Sports Development, our mission is to redefine sports
                  development by providing unparalleled training,
                  infrastructure, and opportunities for aspiring athletes. We
                  believe in nurturing talent from the grassroots, offering a
                  structured pathway for athletes to realize their full
                  potential and make a mark on the global stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default About;
