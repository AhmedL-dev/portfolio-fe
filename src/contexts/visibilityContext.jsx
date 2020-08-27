import React, { useState, createContext } from "react";

export const VizContext = createContext(null);

export const VizProvider = (props) => {
  const [vizValue, setVizValue] = useState({
    heroBlock: {
      value: false,
      index: false,
    },
    about: {
      value: false,
      index: 0,
    },
    portfolio: {
      value: false,
      index: 1,
    },
    skills: {
      value: false,
      index: 2,
    },
    contact: {
      value: false,
      index: 3,
    },
  });

  return (
    <VizContext.Provider value={[vizValue, setVizValue]}>
      {props.children}
    </VizContext.Provider>
  );
};
