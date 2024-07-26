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
      className="w-14 xl:w-20 pl-1 xl:pl-5 hidden lg:flex flex-col justify-center xl:space-y-3 xl:my-4"
    >
      {servicesData.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-end h-7 xl:h-14 overflow-hidden"
          >
            <motion.h1
              variants={primaryTextAnimation}
              className={
                serviceHover === item.id
                  ? "border-b border-b-green w-6 xl:w-10 text-green duration-300 text-sm"
                  : " border-b border-b-lineColor w-full duration-300 text-sm"
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
