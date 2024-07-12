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
    <section className="center relative flex-col w-full h-auto py-10 xl:py-0 xl:h-screen bg-secondaryBg">
      <div>
        <TextAnimation
          text="how it work"
          className="xl:text-[150px] relative z-3"
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
              className="overflow-hidden flex items-start xl:center w-full hover:text-green duration-300"
              key={index}
            >
              <motion.div
                className="flex flex-row justify-start"
                variants={primaryTextAnimation}
              >
                <div className="h-10 w-10 xl:mr-2 ">
                  <ArrowSvg />
                </div>
                <h1 className="w-full center text-xs xl:text-2xl">{item}</h1>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SectionThree;
