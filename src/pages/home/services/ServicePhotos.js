import React from "react";
import { motion } from "framer-motion";

const appear = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const move = {
  hidden: {
    y: "45px",
    x: "35px",
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ServicePhotos({ data }) {
  return (
    <motion.div
      variants={move}
      initial="hidden"
      animate="visible"
      className="w-36 md:w-64 h-auto absolute z-4 right-0 xl:-right-[300px] top-0"
    >
      <motion.div
        variants={appear}
        initial="hidden"
        animate="visible"
        className="w-full h-full bg-black z-10 absolute top-0"
      ></motion.div>
      <img className="w-full h-full" src={data.image} alt="service" />
    </motion.div>
  );
}

export default ServicePhotos;
