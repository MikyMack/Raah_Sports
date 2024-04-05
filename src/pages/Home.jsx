import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import BlogsComp from "../components/Blogs/BlogsComp.jsx";
import Footer from "../components/Footer/Footer";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader.jsx";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
    const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden ">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  );
}

export default Home;
