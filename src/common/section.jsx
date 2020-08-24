import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";

import { NavValueContext } from "../contexts/navValueContext";
import { VizContext } from "../contexts/visibilityContext";

import VizSensor from "react-visibility-sensor";

const Section = ({ id, index, background, children }) => {
  const [navValue, setNavValue] = useContext(NavValueContext);
  const [vizValue, setVizValue] = useContext(VizContext);

  useEffect(() => {
    vizValue[IDBCursor] && setNavValue(false);
  }, [vizValue[id], setVizValue]);

  return (
    <React.Fragment>
      <section
        style={{
          paddingTop: "10em",
          paddingBottom: "10em",
          backgroundColor: background || "inherit",
        }}
        id={id}
      >
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            let vizV = { ...vizValue };
            if (isVisible) vizV = _.mapValues(vizV, () => false);
            vizV[id] = isVisible;
            setVizValue(vizV);
            isVisible && vizV[id] && setNavValue(index);
          }}
        >
          {children}
        </VizSensor>
      </section>
    </React.Fragment>
  );
};

export default Section;
