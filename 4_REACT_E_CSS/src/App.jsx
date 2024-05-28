//!Components
import CarDetails from "../components/CarDetails";
import MyComponent from "../components/MyComponent";
import Title from "../components/Title";

//!Styles e outros
import "./App.css";
import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = true;

  const cars = [
    { id: 1, brand: "Ferrari", color: "yellow", newCar: true, km: 0 },
    { id: 2, brand: "Ford", color: "red", newCar: false, km: 314510 },
    { id: 3, brand: "Fiat", color: "blue", newCar: true, km: 0 },
    { id: 4, brand: "BMW", color: "purple", newCar: false, km: 515150 },
    { id: 5, brand: "Honda", color: "black", newCar: true, km: 0 },
    { id: 6, brand: "Toyoya", color: "gold", newCar: false, km: 6789 },
  ];

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* INLINE CSS */}
      <p
        style={{
          color: "blue",
          backgroundColor: "white",
          fontWeight: "bold",
          padding: "25px",
        }}
      >
        Este elemento foi estilizado de forma Inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "red" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "red" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste None
      </h2>
      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título terá uma classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
      {/* Tarefa */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </>
  );
}

export default App;
