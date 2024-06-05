import React from "react";
import screen from "../../../../assets/videoscreen.jpg";

function AgencyVideo() {
  return (
    <div className=" w-full xl:w-8/12 center">
      <div className="mx-10">
        <img src={screen} alt="videoscreen" />
      </div>
    </div>
  );
}

export default AgencyVideo;
