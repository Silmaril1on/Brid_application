import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SideLinks from "./SideLinks";

function SideMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsActive(true)}
        className="block md:hidden cursor-pointer"
      >
        <IoMdMenu size={30} />
      </div>
      {isActive && <SideLinks setIsActive={setIsActive} />}
    </>
  );
}

export default SideMenu;
