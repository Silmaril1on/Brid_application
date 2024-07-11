import React from "react";

function ActiveImage({ activePhoto }) {
  return (
    <div className="w-full h-full mt-14 absolute top-0 left-0 z-0">
      <img
        className="w-full object-cover h-full "
        src={activePhoto}
        alt="animation"
      />
    </div>
  );
}

export default ActiveImage;
