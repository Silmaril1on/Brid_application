import React from "react";
import Index from "./headline/Index";
import AgencyVideo from "./video/AgencyVideo";

function Agency() {
  return (
    <section
      id="agency"
      className="w-full h-screen center flex-col md:flex-row *:h-full relative"
    >
      <Index />
      <AgencyVideo />
    </section>
  );
}

export default Agency;
