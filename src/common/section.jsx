import React, { useContext } from "react";

import { NavValueContext } from "../contexts/navValueContext";
import { VizContext } from "../contexts/visibilityContext";

import VizSensor from "react-visibility-sensor";

const Section = ({ id, index, background, children }) => {
  const [navValue, setNavValue] = useContext(NavValueContext);
  const [vizValue, setVizValue] = useContext(VizContext);

  const handleChange = (isVisible) => {
    let vizV = { ...vizValue };
    vizV[id].value = isVisible;
    setVizValue(vizV);
    switch (isVisible) {
      case true:
        setNavValue(index);
        break;
      case false:
        for (var tab in vizV) {
          if (vizV[tab].value) {
            setNavValue(vizV[tab].index);
            break;
          }
        }
    }
  };

  return (
    <section
      style={{
        paddingTop: "10em",
        paddingBottom: "10em",
        backgroundColor: background || "inherit",
      }}
      id={id}
    >
      <VizSensor partialVisibility onChange={handleChange}>
        <React.Fragment>{children}</React.Fragment>
      </VizSensor>
    </section>
  );
};

export default Section;
