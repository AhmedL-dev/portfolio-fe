import React, { useContext } from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Navbar from "../../common/ordinarNavbar/navbar";

export default function AdminNavbar() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const routes = [
    { name: "HeroBlock", link: "/admin/hero" },
    { name: "About Us", link: "/admin/about" },
    { name: "Portfolio", link: "/admin/portfolio" },
    { name: "Skills", link: "/admin/skills" },
    { name: "Contact Us", link: "/admin/contact" },
  ];

  return (
    <React.Fragment>
      <Navbar routes={routes} />
    </React.Fragment>
  );
}
