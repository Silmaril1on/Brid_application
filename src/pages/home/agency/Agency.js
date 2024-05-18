import React from "react";
import AnimatedInfoLeft from "./AnimatedInfoLeft";
import AnimatedIntoRight from "./AnimatedIntoRight";
import Headline from "./Headline";

function Agency() {
  return (
    <section
      id="agency"
      className="w-full h-screen center flex-col md:flex-row *:h-full relative"
    >
      <AnimatedInfoLeft />
      <AnimatedIntoRight />
      <Headline />
    </section>
  );
}

export default Agency;
