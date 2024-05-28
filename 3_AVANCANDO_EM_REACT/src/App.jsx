//!Components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";

//! Styles and others
import "./App.css";
import City from "./assets/city.jpg";
import sumetal from "./assets/suzuka.jpg";
import moametal from "./assets/moa.jpg";
import momometal from "./assets/momoko.jpg";
import { useState } from "react";
import ChangeMessageState from "./components/ChangeMessageState";
import MembersDetails from "./components/MembersDetails";

function App() {
  // const name = "José";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Yellow", newCar: true, km: 0 },
    { id: 2, brand: "Ford", color: "Red", newCar: false, km: 314510 },
    { id: 3, brand: "Fiat", color: "Blue", newCar: true, km: 0 },
    { id: 4, brand: "BMW", color: "Purple", newCar: false, km: 515150 },
    { id: 5, brand: "Honda", color: "Black", newCar: true, km: 0 },
    { id: 6, brand: "Toyoya", color: "Pink", newCar: false, km: 6789 },
  ];

  const members = [
    {
      id: 1,
      nome: "Suzuka Nakamoto",
      idade: "26",
      altura: 1.56,
      profissao: "Vocal and Dance",
      picture: sumetal,
    },
    {
      id: 2,
      nome: "Moa Kikuchi",
      idade: "24",
      altura: 1.52,
      profissao: "Scream and Dance",
      picture: moametal,
    },
    {
      id: 3,
      nome: "Momoko Okazaki",
      idade: "21",
      altura: 1.59,
      profissao: "Scream and Dance",
      picture: momometal,
    },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em Public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em Public*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* PROPS*/}
      {/* <ShowUserName name="João" />*/}
      {/* <ShowUserName name={name} />*/}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={10000} color="Blue" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="BMW" km={12455} color="Red" newCar={false} />
      <CarDetails brand="Fiat" km={0} color="White" newCar={true} />
      {/* Loop em arrey de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments propFragment="teste" />
      Função como prop
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2">
        <h3>E este é o outro conteúdo</h3>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState changeMessage={handleMessage} />
      {members.map((member) => (
        <MembersDetails
          key={member.id}
          nome={member.nome}
          idade={member.idade}
          altura={member.altura}
          profissao={member.profissao}
          picture={member.picture}
        />
      ))}
    </>
  );
}

export default App;
