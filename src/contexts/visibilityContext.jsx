import React, { useState, createContext } from "react";

export const VizContext = createContext(null);

export const VizProvider = (props) => {
  const [vizValue, setVizValue] = useState({
    heroBlock: true,
    portfolio: false,
    about: false,
    contact: false,
  });

  return (
    <VizContext.Provider value={[vizValue, setVizValue]}>
      {props.children}
    </VizContext.Provider>
  );
};
