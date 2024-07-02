import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 5 - useEffect sem depêndencias
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 6 - Array de dependências vazio no useEffect
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 7 - Utilizando o array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("Sou executado apenas quando anotherNumber muda!");
  }, [anotherNumber]);

  // 8 - Cleanup no useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World!");

      // gera erro sem cleanup
      //setAnotherNumber(anotherNumber + 1);
    }, 2000);

    // realizar exemplo sem clean up
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <br />
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber!
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
