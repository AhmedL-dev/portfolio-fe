import React, { useContext } from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { NavValueContext } from "../../contexts/navValueContext";

import Logo from "../../common/navbar/logo";
import NavTabs from "../../common/navbar/tabs";
import NavDrawer from "../../common/navbar/drawer";
import CustomAppBar from "../../common/navbar/customAppBar";

export default function Navbar() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [navValue, setNavValue] = useContext(NavValueContext);

  const handleChange = (event, newValue) => {
    setTimeout(() => setNavValue(newValue), 1000);
  };

  const routes = [
    { label: "ABOUT", link: "#about" },
    { label: "PORTFOLIO", link: "#portfolio" },
    { label: "SKILLS", link: "#skills" },
    { label: "CONTACT", link: "#contact" },
  ];

  return (
    <React.Fragment>
      <CustomAppBar>
        <Logo link="#" name="LAADRAOUI" setNavValue={setNavValue} />
        {matchesSM ? (
          <NavDrawer
            onChange={handleChange}
            navValue={navValue}
            items={routes}
          />
        ) : (
          <NavTabs onChange={handleChange} navValue={navValue} items={routes} />
        )}
      </CustomAppBar>
    </React.Fragment>
  );
}
