//!Components
import Navbar from "./components/Navbar";

//!Styles
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//!React

//! Data

//! Pages
import Home from "./pages/Home";
import About from "./pages/About";

import Products from "./pages/Products";
function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
