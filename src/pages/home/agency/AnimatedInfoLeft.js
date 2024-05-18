import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";
import TextAnimation from "../../../components/TextAnimation";
import { HashLink } from "react-router-hash-link";

function AnimatedInfo() {
  return (
    <section className="w-full md:w-7/12 bg-primaryBg">
      <article className="flex flex-col justify-between h-full py-5 relative before:absolute before:w-full before:border-b before:top-10 before:border-lineColor after:absolute after:w-full after:border-b after:bottom-28 after:border-lineColor">
        <motion.div
          variants={primaryTextAnimation}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-[550px] ml-5 mt-20 overflow-hidden *:leading-4 text-[16px]"
        >
          <motion.p variants={primaryTextAnimation}>
            Our goal is to pay special attention to each client,
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            providing them with a high-quality final product
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            to achieve these results
          </motion.p>
        </motion.div>

        <div className="mb-5 ml-5 z-5">
          <HashLink smooth to="#footer">
            <TextAnimation
              className="w-full md:w-[370px] text-green underline underline-offset-2 text-lg hover:text-whiteText duration-300"
              text="lets start create your brand id"
            />
          </HashLink>
        </div>
      </article>
    </section>
  );
}

export default AnimatedInfo;
