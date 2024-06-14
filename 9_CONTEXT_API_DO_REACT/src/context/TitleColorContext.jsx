/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const titleColorReduce = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };

    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReduce, { color: "purple" });

  console.log("Title color context: ", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
