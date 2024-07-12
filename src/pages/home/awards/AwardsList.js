import React from "react";
import awardsData from "../../../database/awardsData";

const AwardsList = () => {
  return (
    <section>
      <div className="py-3">
        <div className="flex flex-row items-center justify-between px-5 py-4">
          <span>category</span>
          <h1 className="w-full pl-14">project</h1>
          <span>year</span>
        </div>
        {awardsData.map((item) => {
          return (
            <div
              className="flex flex-row items-center justify-between py-4 px-5 even:bg-primaryBg relative before:absolute before:w-full before:h-full before:bg-lineColor before:-top-full before:left-0 hover:before:top-0 before:duration-300 overflow-hidden before:-z-1 z-4 hover:text-green"
              key={item.id}
            >
              <span className="w-[200px]">{item.category}</span>
              <h1 className="w-full mx-[100px]">{item.name}</h1>
              <span>{item.year}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AwardsList;
