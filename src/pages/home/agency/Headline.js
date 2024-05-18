import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";

const text = [
  "  \\ we are team of young professionals who create",
  " BRAND IDENTITY THAT LEAVES FINGERPRINTS ON THE MARKET",
  " & THE MINDS OF YOUR CUSTOMERS, SO THEIR NUMBERS GROW",
  " BY LEAPS & BOUNDS \\  ",
];

function Headline() {
  return (
    <article className="md:absolute flex items-end md:pb-36 bottom-0 w-full">
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        className="w-full relative flex flex-col ml-4 md:text-2xl lg:text-[2.7rem] lg:leading-[45px] hd:text-[3.1rem] hd:leading-[55px]"
      >
        {text.map((item, index) => {
          return (
            <div key={index} className="overflow-hidden">
              <motion.h1 variants={primaryTextAnimation}>{item}</motion.h1>
            </div>
          );
        })}
      </motion.div>
    </article>
  );
}

export default Headline;
