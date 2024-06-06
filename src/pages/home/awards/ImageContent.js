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
    <section className="h-[50%]">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="flex relative flex-row justify-evenly bg-primaryBg h-[220px] hd:h-[266px]"
      >
        <motion.img
          variants={slideUp}
          className="w-auto h-72 -mt-[8%] hd:h-96"
          src={image1}
          alt="awards"
        />

        <motion.img
          variants={slideUp}
          className="w-auto h-56 mt-[3%] hd:h-80"
          src={image2}
          alt="awards"
        />

        <motion.img
          variants={slideUp}
          className="w-auto h-28 hd:h-44"
          src={image4}
          alt="awards"
        />
        <motion.img
          variants={slideUp}
          className="w-auto h-44 mt-[2.8%] hd:h-[215px]"
          src={image3}
          alt="awards"
        />
      </motion.div>
    </section>
  );
}

export default ImageContent;
