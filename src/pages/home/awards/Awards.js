import React from "react";
import ClientsList from "./ClientsList";
import Content from "./Content";

function Awards() {
  return (
    <section
      id="awards"
      className="w-full h-auto md:h-screen pt-10 pb-5 flex center flex-col *:w-full overflow-hidden"
    >
      <div className="pl-5">
        <h1 className="text-[100px]">awards</h1>
      </div>
      <Content />
      <ClientsList />
    </section>
  );
}

export default Awards;
