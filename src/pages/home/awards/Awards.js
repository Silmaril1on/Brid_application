import React from "react";
import AwardsList from "./AwardsList";

function Awards() {
  return (
    <section
      id="awards"
      className="w-full h-screen flex flex-col *:w-full overflow-hidden justify-center"
    >
      <div className="flex flex-col w-full">
        <div className="pl-5 w-full mb-9 lg:mb-0 lg:mt-10 leading-[100px] h-full">
          <h1 className="text-6xl lg:text-[150px]">awards</h1>
        </div>
        <AwardsList />
      </div>
    </section>
  );
}

export default Awards;
