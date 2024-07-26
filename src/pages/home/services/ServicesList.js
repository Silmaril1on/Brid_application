import React, { useState } from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";
import servicesData from "../../../database/servicesData";
import ServiceLines from "./ServiceLines";
import ServicePhotos from "./ServicePhotos";

function ServicesList() {
  const [serviceHover, setServiceHover] = useState(false);

  const onHover = (index) => {
    setServiceHover(index);
  };

  return (
    <section className="flex flex-row w-full relative">
      <ServiceLines serviceHover={serviceHover} />

      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full center flex-col space-y-1 xl:-space-y-4"
      >
        {servicesData.map((service, index) => {
          return (
            <article key={service.id} className="relative ">
              <div className="overflow-hidden">
                <motion.h1
                  onMouseEnter={() => onHover(service.id)}
                  onMouseLeave={() => setServiceHover(false)}
                  variants={primaryTextAnimation}
                  className="text-2xl leading-[27px] xl:text-[55px] xl:leading-[84px] cursor-pointer hover:text-whiteText duration-300"
                >
                  {service.name}
                </motion.h1>
              </div>
              <div className="block">
                {serviceHover === service.id ? (
                  <ServicePhotos data={servicesData[index]} />
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default ServicesList;
