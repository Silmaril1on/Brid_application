import React from "react";
import ArrowSvg from "../../components/ArrowSvg";

function About({ details }) {
  return (
    <section className=" w-full flex flex-row *:w-2/4 mt-10 space-x-[10%]">
      <article className="pl-4 pb-5">
        <div className="h-10 space-x-2 border-b border-lineColor center flex-row justify-start ">
          <div className="w-10 h-10">
            <ArrowSvg />
          </div>
          <h1 className="text-2xl">about</h1>
        </div>
        <p className="text-[18px] my-5 pl-2">{details?.about}</p>
      </article>

      <article className="pb-5">
        <div className="h-10 space-x-3 center flex-row justify-start border-b border-lineColor">
          <div className="w-10 h-10  -ml-2">
            <ArrowSvg />
          </div>
          <h1 className="text-xl ">scope of work</h1>
        </div>
        <div className="my-5">
          {details?.scope.map((item, index) => {
            return (
              <h1
                key={index}
                className="text-[18px] hover:text-green duration-300 cursor-pointer"
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
