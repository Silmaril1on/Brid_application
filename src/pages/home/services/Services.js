import React from "react";
import ServicesList from "./ServicesList";

function Services() {
  return (
    <section id="services" className="h-auto py-10 w-full mt-10 ">
      <div className="w-full">
        <ServicesList />
      </div>
    </section>
  );
}

export default Services;
