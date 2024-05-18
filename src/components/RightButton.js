import React from "react";
import GreenArrow from "./GreenArrow";

function RightButton({ onClick }) {
  return (
    <button className="h-9 w-9 cursor-pointer" onClick={onClick}>
      <GreenArrow />
    </button>
  );
}

export default RightButton;
