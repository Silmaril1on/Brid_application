import React from "react";
import NavLinks from "./desktop/NavLinks";
import BridLogo from "../../components/BridLogo";
import SideMenu from "./mobile/SideMenu";

function NavigationBar() {
  return (
    <nav className="flex z-10 flex-row justify-between items-center border-b border-lineColor px-5 py-3 fixed top-0 w-full bg-black max-w-[1920px]">
      <a href="/">
        <BridLogo />
      </a>
      <NavLinks />
      <SideMenu />
    </nav>
  );
}

export default NavigationBar;
