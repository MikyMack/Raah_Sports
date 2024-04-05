// Component import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/gallery" element={<Gallery />}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
