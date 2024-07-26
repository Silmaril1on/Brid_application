import React, { useState } from "react";
import GreenArrow from "./GreenArrow";
import ArrowSvg from "./ArrowSvg";

function RightButton({ onClick }) {
  const [active, setActive] = useState(true);
  return (
    <button
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
      className="h-9 w-auto center  cursor-pointer hover:text-green text-[10px] text-xl"
      onClick={onClick}
    >
      next project
      {active ? (
        <div className="w-7 lg:w-9">
          <ArrowSvg />
        </div>
      ) : (
        <GreenArrow />
      )}
    </button>
  );
}

export default RightButton;
