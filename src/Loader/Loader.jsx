import Logo from "../assets/website/logoraahsports.png";

import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust time as needed to ensure components load smoothly
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-75 transition-opacity duration-500 ease-out">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Loading..." className="w-32 h-24 mb-4 animate-bounce" />
        <p className="text-lg text-black">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
