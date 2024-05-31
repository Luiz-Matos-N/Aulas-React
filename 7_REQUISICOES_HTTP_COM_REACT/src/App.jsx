//!Components

//!Styles
import "./App.css";

//!React
import { useState } from "react";

//! 6 - Custom hook para resgate de dados
import { useFetch } from "./hooks/useFetch";

//! data
const url = "http://localhost:3000/products";

function App() {
  //const [products, setProducts] = useState([]);

  //! 6 - Custom hook para resgate de dados
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //! 3 - Resgatando dados da API
  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);*/

  //!  4 - Adicionando dados com React

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      // Não será necessário name: name, pois possuem o mesmo nome
      name,
      price,
    };

    /*
    console.log(product);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //! 5 - Carregamento de dados dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/

    //! 7 - Refatorando o POST
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  //! 11 - Desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/*   //! 8 - Estado de Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* //! 9 - Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </>
  );
}

export default App;
