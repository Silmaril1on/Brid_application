import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../framerMotion/motionValues";

function TextAnimation({ text, className }) {
  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      <motion.h1 className={className} variants={primaryTextAnimation}>
        {text}
      </motion.h1>
    </motion.div>
  );
}

export default TextAnimation;
