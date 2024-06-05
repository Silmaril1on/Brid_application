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
    <section className="h-[60%]">
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="flex relative flex-row justify-between pr-[10%] h-[70%] bg-primaryBg"
      >
        <motion.div variants={slideUp} className="-mt-[13%] ml-4">
          <img src={image1} alt="awards" className="h-72 hd:h-[370px] w-auto" />
        </motion.div>

        <motion.div
          variants={slideUp}
          className="h-full flex items-end mt-8 hd:mt-[5%]"
        >
          <img className="h-48 hd:h-[320px] w-auto" src={image2} alt="awards" />
        </motion.div>
        <motion.div variants={slideUp} className="h-full">
          <img className="h-28 hd:h-[180px] w-auto" src={image4} alt="awards" />
        </motion.div>
        <motion.div variants={slideUp} className="h-full flex items-end">
          <img className="h-36 hd:h-[240px] w-auto" src={image3} alt="awards" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ImageContent;
