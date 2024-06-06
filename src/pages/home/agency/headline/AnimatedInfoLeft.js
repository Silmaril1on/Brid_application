import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../../framerMotion/motionValues";

function AnimatedInfo() {
  return (
    <div className="w-full px-5 border-b border-lineColor pb-10">
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        className="w-full md:w-[550px] mt-20 overflow-hidden *:leading-4 text-[16px]"
      >
        <motion.p variants={primaryTextAnimation}>
          Our goal is to pay special attention to each client,
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          providing them with a high-quality final product
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          to achieve these results
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AnimatedInfo;
