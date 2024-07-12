import React from "react";
import awardsData from "../../../database/awardsData";

const AwardsList = () => {
  return (
    <section>
      <div>
        <div className="bg-secondaryBg flex flex-row items-center justify-between p-5 pr-7 py-4">
          <span>category</span>
          <h1 className="w-full ml-[150px]">project</h1>
          <span>year</span>
        </div>
        {awardsData.map((item) => {
          return (
            <div
              className="flex flex-row items-center justify-between py-3 pl-5 pr-7 odd:bg-secondaryBg even:bg-[#2e2e2e] relative before:absolute before:w-full before:h-full before:bg-lineColor before:-top-full before:left-0 hover:before:top-0 before:duration-300 overflow-hidden before:-z-1 z-4 hover:text-green"
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
