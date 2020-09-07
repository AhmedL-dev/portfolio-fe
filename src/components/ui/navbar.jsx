import React, { useContext } from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { NavValueContext } from "../../contexts/navValueContext";

import Logo from "../../common/landingNavbar/logo";
import NavTabs from "../../common/landingNavbar/tabs";
import NavDrawer from "../../common/landingNavbar/drawer";
import CustomAppBar from "../../common/landingNavbar/customAppBar";

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
      <CustomAppBar color="primary">
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
