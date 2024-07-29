import React, { useState } from "react";
import GreenArrow from "./GreenArrow";
import ArrowSvg from "./ArrowSvg";

function LeftButton({ onClick }) {
  const [active, setActive] = useState(true);
  return (
    <button
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
      className="h-9 w-auto cursor-pointer center hover:text-green text-[10px] lg:text-xl"
      onClick={onClick}
    >
      {active ? (
        <div className="rotate-90 w-7 lg:w-9">
          <ArrowSvg />
        </div>
      ) : (
        <div className="rotate-180">
          <GreenArrow />
        </div>
      )}
      previous project
    </button>
  );
}

export default LeftButton;
