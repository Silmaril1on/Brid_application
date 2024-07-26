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
        <h1 className="text-2xl pt-5 mr-5 hidden lg:block">join the factory</h1>
        <div className="w-full flex md:flex-row flex-col-reverse items-end justify-between relative h-full">
          <div className="w-full mb-10 lg:mb-0">
            <motion.div
              variants={primaryTextAnimation}
              initial="hidden"
              whileInView="visible"
              className="lg:-space-y-7 pl-3 flex flex-col w-full justify-end text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] 2xl:mb-5 lg:h-52 h-full"
            >
              <div className="overflow-hidden">
                <motion.h1
                  variants={primaryTextAnimation}
                  className="text-green leading-[55px] lg:leading-[120px]"
                >
                  monthly design service
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={primaryTextAnimation}
                  className="text-grayText leading-[55px] lg:leading-[120px]"
                >
                  for your business
                </motion.h1>
              </div>
            </motion.div>
          </div>
          <TextAnimation
            text="don't follow your old rules. make your own"
            className="text-sm w-56 pr-3 lg:pl-0 lg:w-90 md:absolute bottom-7 right-5 text-end"
          />
        </div>
      </article>

      <article className="*:text-xs md:*:text-2xl flex flex-col xl:flex-row md:h-44 space-y-10 justify-between items-end pl-3 xl:pl-5 py-7 w-full bg-primaryBg">
        <motion.div
          variants={primaryTextAnimation}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-auto lg:*:leading-6 overflow-hidden"
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
          <h1 className="w-90 uppercase relative text-green underline hover:text-whiteText duration-300 text-[15px] lg:text-[20px] pr-5">
            get started
          </h1>
        </HashLink>
      </article>
    </section>
  );
}

export default FactoryHeader;
