import React from "react";
import awardsData from "../../../database/awardsData";
import { motion } from "framer-motion";

const primaryTextAnimation = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 2,
    },
  },
};

function AwardsList() {
  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col my-10 relative space-y-2"
    >
      {awardsData.map((award) => {
        return (
          <div
            key={award.id}
            className="flex center overflow-hidden odd:pr-[20%] even:pl-[10%] "
          >
            <motion.h1
              variants={primaryTextAnimation}
              key={award.id}
              className="text-4xl inline-block p-1 text-center"
            >
              {award.name}
            </motion.h1>
          </div>
        );
      })}
    </motion.div>
  );
}

export default AwardsList;
