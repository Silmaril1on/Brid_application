import React from "react";
import ClientsList from "./ClientsList";
import Content from "./Content";

function Awards() {
  return (
    <section
      id="awards"
      className="w-full h-auto md:h-screen flex flex-col *:w-full overflow-hidden pt-12 justify-center"
    >
      <div className="flex flex-col w-full h-full">
        <div className="pl-5 w-full leading-[100px]">
          <h1 className="text-[100px]">awards</h1>
        </div>
        <Content />
        <ClientsList />
      </div>
    </section>
  );
}

export default Awards;
