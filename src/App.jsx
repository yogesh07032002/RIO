import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Error } from "./Pages/Error";
import { Contact } from "./Pages/Contact";
import { Footer } from "./Components/Footer";   // ⚠️ Capitalize 'Footer'
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";          // ✅ Added import
import { Products } from "./Pages/Products";    // ✅ Added import
import {Choose} from "./Pages/Choose";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/choose" element={<Choose/>} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
