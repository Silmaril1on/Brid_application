import React from "react";
import NavLinks from "./NavLinks";
import BridLogo from "../../../components/BridLogo";

function NavigationBar() {
  return (
    <nav className="md:flex z-10 flex-row justify-between items-center border-b border-lineColor px-5 py-3 hidden fixed top-0 w-full bg-black max-w-[1920px]">
      <a href="#top">
        <BridLogo />
      </a>
      <NavLinks />
    </nav>
  );
}

export default NavigationBar;
