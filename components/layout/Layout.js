import React from "react";
import PropTypes from "prop-types";

import ThemeProvider from "react-bootstrap/ThemeProvider";

import Topnav from "../nav/TopNav";

import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({children}) => {
  
  return (
    <>
      <Topnav />
        <ThemeProvider
          breakpoints={["five-xl", "four-xl", "xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xs"]}
          minBreakpoint="xs"
        >
          <main>{children}</main>
        </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object
};

export default Layout;