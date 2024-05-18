import React from "react";
import GreenArrow from "./GreenArrow";

function LeftButton({ onClick }) {
  return (
    <button className="w-9 h-9 cursor-pointer" onClick={onClick}>
      <div className="rotate-180">
        <GreenArrow />
      </div>
    </button>
  );
}

export default LeftButton;
