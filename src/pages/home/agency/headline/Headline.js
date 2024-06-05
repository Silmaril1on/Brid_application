import React from "react";
import { motion } from "framer-motion";

// const text = [
//   "  \\ we are team of young professionals who create",
//   " BRAND IDENTITY THAT LEAVES FINGERPRINTS ON THE MARKET",
//   " & THE MINDS OF YOUR CUSTOMERS, SO THEIR NUMBERS GROW",
//   " BY LEAPS & BOUNDS \\  ",
// ];

const slideVar = {
  hidden: {
    x: "-110%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.9,
    },
  },
};

function Headline() {
  return (
    <article className="mt-[10%]">
      {/* <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        className="w-auto relative flex flex-col ml-4 text-[33px] leading-10"
      >
        {text.map((item, index) => {
          return (
            <div key={index} className="overflow-hidden">
              <motion.h1 variants={primaryTextAnimation}>{item}</motion.h1>
            </div>
          );
        })}
      </motion.div> */}
      <motion.div className="pr-10">
        <motion.h1
          variants={slideVar}
          initial="hidden"
          animate="visible"
          className="text-[35px] leading-[35px] ml-4"
        >
          \ we are team of young professionals who create{" "}
          <span className="span-g">Brand identity</span> that leaves{" "}
          <span className="span-g">fingerprints</span> on the market & the minds
          of your customers, so their numbers{" "}
          <span className="span-g">grow</span> by leaps & bounds \
        </motion.h1>
      </motion.div>
    </article>
  );
}

export default Headline;
