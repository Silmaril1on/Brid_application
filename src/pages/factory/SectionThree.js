import React from "react";
import TextAnimation from "../../components/TextAnimation";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../framerMotion/motionValues";
import FactoryBubble from "./FactoryBubble";
import ArrowSvg from "../../components/ArrowSvg";

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
    <section className="center relative flex-col w-full h-screen bg-secondaryBg ">
      <FactoryBubble />
      <div className="overflow-hidden">
        <TextAnimation
          text="how it work"
          className="text-[150px] text-center relative z-3"
        />
      </div>
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full relative z-3 center p-4 text-4xl flex flex-col space-y-6 md:space-y-2"
      >
        {data.map((item, index) => {
          return (
            <div className=" overflow-hidden" key={index}>
              <motion.div
                className="flex flex-row"
                variants={primaryTextAnimation}
              >
                <div className="h-10 w-10 mr-2">
                  <ArrowSvg />
                </div>
                <h1>{item}</h1>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SectionThree;
