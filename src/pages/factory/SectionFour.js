import React from "react";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../framerMotion/motionValues";
import TeamOne from "./factoryteam/TeamOne";
import TeamTwo from "./factoryteam/TeamTwo";
import TeamThree from "./factoryteam/TeamThree";
import TeamFour from "./factoryteam/TeamFour";

function SectionFour() {
  return (
    <div className="w-full h-auto md:h-screen center relative">
      <section className="bg-primaryBg center relative flex-col h-[735px] w-full">
        <header className="w-full *:text-4xl *:text-center *:md:text-[130px] mt-[6%] flex flex-col px-5 mb-6 hd:mb-10">
          <motion.div
            variants={primaryTextAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={primaryTextAnimation}
              className="text-green mr-[20%] h-28"
            >
              factory
            </motion.h1>
            <motion.h1
              variants={primaryTextAnimation}
              className="ml-[20%] h-28"
            >
              team
            </motion.h1>
          </motion.div>
        </header>
        <TeamOne />
        <TeamTwo />
        <TeamThree />
        <TeamFour />

        <div className="w-full bg-black h-64 absolute bottom-0 z-0"></div>
      </section>
    </div>
  );
}

export default SectionFour;
