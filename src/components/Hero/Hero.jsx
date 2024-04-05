
import HomePageBanner from "../HomePageBanner";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
          <HomePageBanner />
            
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              INTRODUCTION TO{" "}
              <span className="text-primary">
                RAAH SPORTS DEVELOPMENT PRIVATE LIMITED
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Welcome to the dynamic world of sports excellence, where passion
              meets precision – introducing Raah Sports Development Private
              Limited. We are not just a sports organization; we are architects
              of athletic growth, committed to sculpting the champions of
              tomorrow
            </p>
            <Link to='/contact'>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Join Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
