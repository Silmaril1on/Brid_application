import React, { useState } from "react";
import { motion } from "framer-motion";
import { rotateX } from "../../../framerMotion/motionValues";
import { primaryTextAnimation } from "../../../framerMotion/motionValues";
import one from "../../../assets/Vector1.png";
import two from "../../../assets/Vector2.png";
import three from "../../../assets/Vector3.png";
import Circle from "../../../components/Circle";

const data = [
  {
    number: one,
    name: "proof of quality of your brand",
    info: "Our team possesses a unique blend of skills and combines aesthetics with strategy To meet your business goals and objectives",
  },
  {
    number: two,
    name: "value your time",
    info: "Save time and don't waste time on things that are not your priorities.",
  },
  {
    number: three,
    name: "big profit, low cost",
    info: "A team of five people instead of one designer",
  },
];

function SectionTwo() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full h-screen bg-black">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-4/6  pl-5">
          <motion.article
            variants={primaryTextAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full mt-16 *:text-6xl md:*:text-[150px] center *:w-full pb-20 pt-5 xl:pt-0 xl:pb-36 flex-col relative before:absolute before:w-full before:border-b before:top-[12.5%] before:border-lineColor after:absolute after:w-full after:border-b after:bottom-[34%] after:border-lineColor"
          >
            <div className="w-full flex items-end absolute top-10">
              <h1 className="text-green text-2xl">benefits</h1>
            </div>
            <div className="overflow-hidden text-center xl:text-start">
              <motion.h1 variants={primaryTextAnimation}>why it</motion.h1>
            </div>
            <div className="overflow-hidden text-center xl:text-start">
              <motion.h1 variants={primaryTextAnimation}>work</motion.h1>
            </div>
          </motion.article>
        </div>

        <article className="flex flex-col md:flex-row items-center w-full h-full xl:overflow-hidden">
          <motion.div
            variants={rotateX}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col w-full h-auto center relative"
          >
            {data.map((item, index) => {
              return (
                <motion.div
                  onMouseEnter={() => setActive(index)}
                  key={index}
                  variants={rotateX}
                  className="flex flex-col md:flex-row w-full p-2"
                >
                  <div className="flex flex-col justify-end w-full md:w-[70%] pl-8 relative z-10">
                    <h1
                      className={
                        active === index
                          ? "text-sm xl:text-3xl w-full text-green duration-300"
                          : "text-sm xl:text-3xl w-full"
                      }
                    >
                      {item.name}
                    </h1>
                    <p className="py-3 uppercase text-[8px] xl:text-base">
                      {item.info}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            <ServiceNumbers data={data[active]} />
          </motion.div>
        </article>
      </div>
    </section>
  );
}

function ServiceNumbers({ data }) {
  return (
    <div className="w-[200px] xl:w-[400px] center h-[200px] xl:h-[400px] bg-contain xl:absolute right-10 top-0">
      <Circle />
      <img
        className="h-32 w-auto xl:h-64 p-2 object-cover"
        src={data.number}
        alt=""
      />
    </div>
  );
}

export default SectionTwo;
