import React, { useState, createContext } from "react";

export const NavValueContext = createContext(null);

export const NavValueProvider = (props) => {
  const [navValue, setNavValue] = useState(false);

  return (
    <NavValueContext.Provider value={[navValue, setNavValue]}>
      {props.children}
    </NavValueContext.Provider>
  );
};
