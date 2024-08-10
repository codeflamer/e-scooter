import React from "react";
import NavMenu from "./nav-menu";
import FunctionHeader from "./function-header";
import NavigationTabs from "./navigation-tabs";

const Header = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <NavMenu />
        <FunctionHeader />
      </div>
      <NavigationTabs />
    </>
  );
};

export default Header;
