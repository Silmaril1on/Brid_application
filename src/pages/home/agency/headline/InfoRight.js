import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../../framerMotion/motionValues";

function InfoRight() {
  return (
    <div className="mx-5">
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        className="w-full mt-10 overflow-hidden *:leading-4 text-[16px]"
      >
        <motion.p variants={primaryTextAnimation}>
          we try to understand client’s requirements the best
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          that we can and offer effective ways to solve
        </motion.p>
        <motion.p variants={primaryTextAnimation}>for their business.</motion.p>
      </motion.div>
    </div>
  );
}

export default InfoRight;
