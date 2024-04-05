import AnimatedCard from "../components/AnimatedCards/AnimatedCards";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Loader from "../Loader/Loader.jsx";
import { useState, useEffect } from "react";

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <AnimatedCard />
      <Footer />
    </div>
  );
}

export default Gallery;
