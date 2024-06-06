import React from "react";
import bridLogo from "../assets/logo-brid.png";

function BridLogo() {
  return (
    <div className="flex flex-row h-6 w-auto" width="auto">
      <img src={bridLogo} alt="brid" />
    </div>
  );
}

export default BridLogo;
