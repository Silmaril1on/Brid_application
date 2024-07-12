import React from "react";
import TextAnimation from "../../../components/TextAnimation";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";
import { HashLink } from "react-router-hash-link";

function FactoryHeader() {
  return (
    <section
      id="#top"
      className="w-full -mt-14 h-screen flex flex-col justify-between"
    >
      <article className="flex justify-between items-end flex-col w-full mt-20 grow bg-black">
        <h1 className="text-2xl pt-5 mr-5">join the factory</h1>
        <div className="w-full center flex-col md:flex-row items-end relative">
          <div className="w-full">
            <motion.div
              variants={primaryTextAnimation}
              initial="hidden"
              whileInView="visible"
              className="-space-y-7 pl-3 flex flex-col w-full justify-end text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] 2xl:mb-5 h-52"
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
            className="text-sm w-90 md:absolute bottom-4 right-5 text-end"
          />
        </div>
      </article>

      <article className="*:text-xs md:*:text-2xl flex flex-col xl:flex-row md:h-44 justify-between items-end pl-2 xl:pl-5 pb-3 w-full bg-primaryBg">
        <motion.div
          variants={primaryTextAnimation}
          initial="hidden"
          animate="visible"
          className="*:w-auto w-full *:leading-6 overflow-hidden"
        >
          <motion.p variants={primaryTextAnimation}>
            our experienced and creative team is
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            dedicated to meeting all your design
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            requirements and justifying your trust
          </motion.p>
          <motion.p variants={primaryTextAnimation}>
            in our knowledge and experience.
          </motion.p>
        </motion.div>
        <HashLink smooth to="#bottom" className="mt-2">
          <h1 className="uppercase relative text-green underline hover:text-whiteText duration-300 text-[20px] pr-5 w-44">
            get started
          </h1>
        </HashLink>
      </article>
    </section>
  );
}

export default FactoryHeader;
