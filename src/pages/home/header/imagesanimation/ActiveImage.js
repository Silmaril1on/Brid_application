import React from "react";

function ActiveImage({ activePhoto }) {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <img className="w-full h-full object-cover" src={activePhoto} alt="" />
    </div>
  );
}

export default ActiveImage;
