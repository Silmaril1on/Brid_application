import React, { useState } from "react";
import SideLinks from "./SideLinks";
import close from "../../../assets/close.png";
import menu from "../../../assets/menu.png";

function SideMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="block md:hidden cursor-pointer"
      >
        {isActive ? (
          <img src={close} alt="close" className="h-5" />
        ) : (
          <img src={menu} alt="menu" className="w-6 h-auto" />
        )}
      </div>
      {isActive && <SideLinks setIsActive={setIsActive} />}
    </>
  );
}

export default SideMenu;
