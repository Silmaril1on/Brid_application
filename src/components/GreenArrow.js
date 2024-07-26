import React from "react";
import arrow from "../assets/greenarrow.png";
import { motion } from "framer-motion";

function GreenArrow() {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-7 lg:w-9 lg:h-8 p-1"
      src={arrow}
      alt="arrow"
    />
  );
}

export default GreenArrow;
