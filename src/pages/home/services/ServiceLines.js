import React from "react";
import servicesData from "../../../database/servicesData";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";

function ServiceLines({ serviceHover }) {
  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-20 pl-5 flex flex-col justify-center space-y-3  my-4"
    >
      {servicesData.map((item) => {
        return (
          <div key={item.id} className="flex items-end h-14 overflow-hidden">
            <motion.h1
              variants={primaryTextAnimation}
              className={
                serviceHover === item.id
                  ? "border-b border-b-green w-10 text-green duration-300"
                  : " border-b border-b-lineColor w-full duration-300"
              }
            >
              {item.id}
            </motion.h1>
          </div>
        );
      })}
    </motion.div>
  );
}

export default ServiceLines;
