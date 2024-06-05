import React from "react";
import image1 from "../../../assets/awards_image_1.jpg";
import image2 from "../../../assets/awards_image_2.jpg";
import image3 from "../../../assets/awards_image_3.jpg";
import image4 from "../../../assets/awards_image_4.jpg";
import { motion } from "framer-motion";

const slideUp = {
  hidden: {
    y: "80px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

function ImageContent() {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      className="flex relative flex-row h-[60%] justify-between pr-[10%]"
    >
      <motion.div variants={slideUp} className="-mt-[13%] ml-4">
        <img src={image1} alt="awards" className="h-72 hd:h-[370px] w-auto" />
      </motion.div>

      <motion.div variants={slideUp} className="h-full pt-[48px]">
        <img className="h-44 hd:h-[320px] w-auto" src={image2} alt="awards" />
      </motion.div>
      <motion.div variants={slideUp} className="h-full">
        <img className="h-24 hd:h-[180px] w-auto" src={image4} alt="awards" />
      </motion.div>
      <motion.div variants={slideUp} className="h-full pt-[35px] hd:pt-[77px]">
        <img className="h-36 hd:h-[240px] w-auto" src={image3} alt="awards" />
      </motion.div>
    </motion.div>
  );
}

export default ImageContent;
