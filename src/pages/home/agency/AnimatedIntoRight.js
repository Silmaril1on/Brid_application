import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";

function AnimatedIntoRight() {
  return (
    <section className="w-full md:w-5/12">
      <article className="h-36 md:h-64 flex items-end md:mt-[50px]">
        <motion.div
          variants={primaryTextAnimation}
          initial="hidden"
          whileInView="visible"
          className="w-full ml-5 mt-20 overflow-hidden *:leading-4 text-[16px] mr-10 relative before:absolute before:w-4/6 before:border-b before:bottom-0 before:border-lineColor before:right-0"
        >
          <motion.p variants={primaryTextAnimation}>
            we try to understand client’s requirements the best
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            that we can and offer effective ways to solve
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            for their business.
          </motion.p>
        </motion.div>
      </article>
    </section>
  );
}

export default AnimatedIntoRight;
