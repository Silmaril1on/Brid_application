import React from "react";
import ArrowSvg from "../../components/ArrowSvg";
import { motion } from "framer-motion";

function SectionFive() {
  return (
    <section className="center flex-col w-full h-auto md:h-screen bg-black mt-10">
      <div className=" w-full my-5 pr-5 flex flex-col xl:flex-row justify-between">
        <div className="ml-4 mb-2">
          <h1 className="text-2xl text-whiteText">service fee</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full h-full *:h-[500px] *:duration-300 xl:*:h-[80%] even:*:mt-16 *:text-whiteText">
        <motion.div
          initial={{ opacity: 0, y: "80px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="center [&_h6]:hover:text-green duration-300 pb-5 px-5 flex-col justify-between space-y-5 even:bg-primaryBg odd:bg-secondaryBg"
        >
          <article className="w-full mt-10">
            <h1 className="text-6xl relative border-bottom w-full text-start flex justify-between items-end">
              micro <span className="text-xs">business</span>
            </h1>
            <div className="flex flex-row mt-5 relative border-bottom items-center justify-between text-2xl">
              <h6>per month</h6>
              <span className="h-9 rotate-90">
                <ArrowSvg />
              </span>
            </div>
          </article>
          <article className="relative border border-t border-lineColor pt-2 items-center justify-between w-full flex flex-row">
            <div>
              <h1>
                price <span className="text-xs">from</span>
              </h1>
              <h1>total [ inc vat ] </h1>
            </div>
            <h6 className="text-xl xl:text-5xl">$ 500</h6>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "80px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="center pb-5 [&_h6]:hover:text-green  px-5 flex-col justify-between space-y-5 even:bg-primaryBg odd:bg-secondaryBg"
        >
          <article className="w-full mt-10">
            <h1 className="text-6xl relative border-bottom w-full text-start flex justify-between items-end">
              small <span className="text-xs">business</span>
            </h1>
            <div className="flex flex-row mt-5 relative border-bottom items-center justify-between text-2xl">
              <h6>per month</h6>
              <span className="h-9 rotate-90">
                <ArrowSvg />
              </span>
            </div>
          </article>
          <article className="relative border-t border-lineColor pt-2 items-center justify-between w-full flex flex-row">
            <div>
              <h1>
                price <span className="text-xs">from</span>
              </h1>
              <h1>total [ inc vat ] </h1>
            </div>
            <h6 className="text-xl xl:text-5xl">$ 700</h6>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "80px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="center pb-5 px-5 flex-col [&_h6]:hover:text-green justify-between space-y-5 even:bg-primaryBg odd:bg-secondaryBg"
        >
          <article className="w-full mt-10">
            <h1 className="text-6xl relative border-bottom  w-full text-start flex justify-between items-end">
              medium <span className="text-xs">business</span>
            </h1>
            <div className="flex flex-row mt-5 relative border-bottom items-center justify-between text-2xl">
              <h6>per month</h6>
              <span className="h-9 rotate-90">
                <ArrowSvg />
              </span>
            </div>
          </article>
          <article className="relative border-t border-lineColor pt-2 items-center justify-between w-full flex flex-row">
            <div>
              <h1>
                price <span className="text-xs">from</span>
              </h1>
              <h1>total [ inc vat ] </h1>
            </div>
            <h6 className="text-xl xl:text-5xl">$ 1000</h6>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "80px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="center pb-5 px-5 flex-col [&_h6]:hover:text-green justify-between space-y-5 even:bg-primaryBg odd:bg-secondaryBg"
        >
          <article className="w-full mt-10">
            <h1 className="text-6xl relative border-bottom  w-full text-start flex justify-between items-end">
              large <span className="text-xs">business</span>
            </h1>
            <div className="flex flex-row mt-5 relative border-bottom items-center justify-between text-2xl">
              <h6>per hour</h6>
              <span className="h-9 rotate-90">
                <ArrowSvg />
              </span>
            </div>
          </article>
          <article className="relative border-t border-lineColor pt-2 items-center justify-between w-full flex flex-row">
            <div>
              <h1>
                price <span className="text-xs">from</span>
              </h1>
              <h1>total [ inc vat ] </h1>
            </div>
            <h6 className="text-xl xl:text-5xl">$ 1700</h6>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionFive;
