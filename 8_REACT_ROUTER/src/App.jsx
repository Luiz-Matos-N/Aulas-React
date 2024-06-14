//!Components
import Navbar from "./components/Navbar";

//!Styles
import "./App.css";

//!React

//! Data
//const url = "http://localhost:3000/products";

//! 2 - Configurando o React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//! Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          {/* //! 3 - Navegação entre páginas */}
          <Navbar />
          {/* //! 10 - Search Params */}
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* //! 5 - Rotas dinâmicas */}
            <Route path="/products/:id" element={<Product />} />
            {/* //! 7 - Nested routes */}
            <Route path="/products/:id/info" element={<Info />} />
            {/*//!10 - Search Params */}
            <Route path="/search" element={<Search />} />
            {/* //! 11 - Redirecionamento de URL */}
            <Route path="/company" element={<Navigate to="/about" />} />
            {/* //! 8 - Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
