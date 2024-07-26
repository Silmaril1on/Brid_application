import React from "react";
import ServicesList from "./ServicesList";

function Services() {
  return (
    <section
      id="services"
      className="h-screen lg:h-auto xl:py-10 w-full mt-14 xl:mt-10 overflow-hidden"
    >
      <div className="w-full h-full flex items-center">
        <ServicesList />
      </div>
    </section>
  );
}

export default Services;
