import "./App.css";

//! Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//! Components
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

//! Pages
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
