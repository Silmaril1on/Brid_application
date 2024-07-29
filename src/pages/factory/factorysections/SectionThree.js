import React from "react";
import TextAnimation from "../../../components/TextAnimation";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";
import ArrowSvg from "../../../components/ArrowSvg";

const data = [
  "Get your project requirements and goals",
  "Create brief and idea generation",
  "Design creation and development",
  "Communicating with you to obtain feedback and insights",
  "Corrections and refinements based on feedback",
  "Project Completion and Asset Delivery",
];

function SectionThree() {
  return (
    <section className="flex justify-evenlyy relative flex-col w-full h-screen md:h-auto xl:h-screen bg-secondaryBg">
      <div className="w-full bg-black md:bg-secondaryBg">
        <TextAnimation
          text="how it work"
          className="text-[60px] xl:text-[150px] relative z-3 text-center leading-[60px] md:leading-none py-10"
        />
      </div>
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full relative z-3 center p-4 text-sm xl:text-4xl flex flex-col xl:space-y-2"
      >
        {data.map((item, index) => {
          return (
            <div
              className="overflow-hidden flex items-start xl:center w-8/12 md:w-full hover:text-green duration-300"
              key={index}
            >
              <motion.div
                className="flex flex-col md:flex-row items-center justify-start w-full md:w-auto"
                variants={primaryTextAnimation}
              >
                <div className="w-8 md:h-10 h-8 md:w-10 xl:mr-2">
                  <ArrowSvg />
                </div>
                <h1 className="w-full text-center center text-xs xl:text-2xl">
                  {item}
                </h1>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SectionThree;
