//!3 - Criando Provider
// import { useContext } from "react";
import "./Home.css";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
//! 5 - Refatorando contexto para hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
//! 6 - Criando um contexto mais complexo

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  //! 6 - Criando um contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  //! 7 - Alterando contexto mais complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color }}>Home</h1>
      <p>Valor contador: {counter}</p>
      {/* //! 4 - Alterando contexto */}
      <ChangeCounter />
      {/* //! 7 - Alterando contexto mais complexo */}
      <div>
        <button onClickCapture={() => setTitleColor("RED")}>Vermelho</button>
        <button onClickCapture={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
