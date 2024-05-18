import React from "react";
import { motion } from "framer-motion";

function Headline() {
  return (
    <div className="relative top-0 left-0 w-full h-full *:text-[200px] ">
      <div className="absolute -top-5 left-[11%] overflow-hidden">
        <motion.h1
          initial={{ opacity: 1, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          create
        </motion.h1>
      </div>
      <div className="absolute top-[25%] right-[5%] overflow-hidden">
        <motion.h1
          initial={{ opacity: 1, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          your
        </motion.h1>
      </div>
      <div className="absolute bottom-[5%] left-[5%] overflow-hidden">
        <motion.h1
          initial={{ opacity: 1, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          brand id
        </motion.h1>
      </div>
      <div className="absolute bottom-[33%] right-[2%] overflow-hidden w-64 leading-5">
        <motion.h1
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[18px]"
        >
          Сreative design agency,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[18px]"
        >
          whose main goal is
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[18px]"
        >
          create your brand id
        </motion.h1>
      </div>
    </div>
  );
}

export default Headline;
