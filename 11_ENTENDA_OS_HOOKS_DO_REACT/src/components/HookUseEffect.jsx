import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 5 - useEffect sem depêndencias
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 6 - Array de dependências vazio no useEffect
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  // 7 - Utilizando o array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber mudar");
    }
  }, [anotherNumber]);
  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Number{number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
