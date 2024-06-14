//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
//! 5 - Refatorando contexto para hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();

  //! 6 - Criando um contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  //! 7 - Alterando contexto mais complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color }}>About</h1>
      <p>Valor do contador: {counter}</p>
      <div>
        <button onClickCapture={() => setTitleColor("RED")}>Vermelho</button>
        <button onClickCapture={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default About;
