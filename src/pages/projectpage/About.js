import React from "react";
import ArrowSvg from "../../components/ArrowSvg";

function About({ details }) {
  return (
    <section className=" w-full flex flex-col lg:flex-row lg:*:w-2/4 mt-10 lg:space-x-[10%]">
      <article className="pl-2 lg:pl-4 lg:pb-5">
        <div className="h-10 lg:h-14 space-x-2 border-b border-lineColor center flex-row justify-start">
          <div className="w-10 h-full ">
            <ArrowSvg />
          </div>
          <h1 className="text-lg lg:text-2xl">{details.name}</h1>
        </div>
        <p className="text-[10px] lg:text-[18px] my-5 pl-2">{details?.about}</p>
      </article>

      <article className="lg:pb-5 pl-4">
        <div className="h-10 lg:h-14 space-x-2 center flex-row justify-start border-b border-lineColor">
          <div className="w-10 h-10 -ml-2">
            <ArrowSvg />
          </div>
          <h1 className="text-lg lg:text-2xl">scope of work</h1>
        </div>
        <div className="my-5">
          {details?.scope.map((item, index) => {
            return (
              <h1
                key={index}
                className="text-[10px] lg:text-[18px] hover:text-green duration-300 cursor-pointer"
              >
                {item}
              </h1>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default About;
