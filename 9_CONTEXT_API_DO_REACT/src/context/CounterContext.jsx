/* eslint-disable react/prop-types */
//! 2 - Criando contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

//! 3 - Criando Provider

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
