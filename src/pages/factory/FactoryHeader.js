import React from "react";
import TextAnimation from "../../components/TextAnimation";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../framerMotion/motionValues";
import { HashLink } from "react-router-hash-link";

function FactoryHeader() {
  return (
    <section
      id="#top"
      className="w-full -mt-14 h-screen flex flex-col justify-between"
    >
      <article className="flex justify-between items-end flex-col w-full mt-20 grow bg-black">
        <h1 className="text-2xl pt-5 mr-5">join the factory</h1>
        <div className="py-3 w-full center flex-col md:flex-row items-end pb-16 md:pb-5 relative">
          <div className="w-full">
            <motion.div
              variants={primaryTextAnimation}
              initial="hidden"
              whileInView="visible"
              className="-space-y-7 pl-3 flex flex-col w-full text-[100px] h-52"
            >
              <div className="overflow-hidden">
                <motion.h1
                  variants={primaryTextAnimation}
                  className="text-green"
                >
                  monthly design service
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={primaryTextAnimation}
                  className="text-grayText"
                >
                  for your business
                </motion.h1>
              </div>
            </motion.div>
          </div>
          <TextAnimation
            text="don't follow your old rules. make your own"
            className="text-sm w-90 md:absolute bottom-6 right-5 text-end"
          />
        </div>
      </article>

      <article className="*:text-xs md:*:text-2xl flex flex-row md:h-44 justify-between items-end pl-5 pb-3 w-full bg-primaryBg">
        <motion.div
          variants={primaryTextAnimation}
          initial="hidden"
          animate="visible"
          className="*:w-[380px] *:leading-6 overflow-hidden"
        >
          <motion.p variants={primaryTextAnimation}>
            hire creative team and
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            graphic designer to
          </motion.p>
          <motion.p variants={primaryTextAnimation}>help you scale</motion.p>
        </motion.div>
        <HashLink smooth to="#bottom">
          <h1 className="uppercase relative text-green underline hover:text-whiteText duration-300 text-[20px] pr-5">
            get started
          </h1>
        </HashLink>
      </article>
    </section>
  );
}

export default FactoryHeader;
