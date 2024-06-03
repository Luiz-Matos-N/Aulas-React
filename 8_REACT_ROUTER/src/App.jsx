//!Components
import Navbar from "./components/Navbar";

//!Styles
import "./App.css";

//!React

//! Data
const url = "http://localhost:3000/products";

//! Pages
import Home from "./pages/Home";
import About from "./pages/About";

//! 2 - Configurando o React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
