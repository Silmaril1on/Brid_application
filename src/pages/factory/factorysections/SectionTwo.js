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
  return (
    <section className="w-full h-screen bg-black">
      <div className="flex flex-col md:flex-row justify-center h-full">
        <div className="w-full md:w-4/6 my-10 md:my-0">
          <motion.article
            variants={primaryTextAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full lg:mt-16 *:text-6xl md:*:text-[150px] flex justify-center pb-5 lg:pb-20 pt-5 xl:pt-0 xl:pb-36 flex-row-reverse lg:flex-col relative before:absolute before:w-full before:border-b before:top-0 md:before:top-[13.7%] before:border-lineColor after:absolute after:w-full after:border-b after:bottom-0 md:after:bottom-[34%] after:border-lineColor"
          >
            <div className="flex items-end lg:absolute top-10 pr-3 lg:pl-5">
              <h1 className="text-green text-sm lg:text-2xl">benefits</h1>
            </div>
            <motion.div
              variants={primaryTextAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col w-full pl-3 lg:pl-5"
            >
              <div className="overflow-hidden lg:text-center xl:text-start">
                <motion.h1 variants={primaryTextAnimation}>why it</motion.h1>
              </div>
              <div className="overflow-hidden lg:text-center xl:text-start">
                <motion.h1 variants={primaryTextAnimation}>work</motion.h1>
              </div>
            </motion.div>
          </motion.article>
        </div>
        <ServiceInfoDesktop />
        <ServiceInfoMobile />
      </div>
    </section>
  );
}

function ServiceInfoDesktop() {
  const [active, setActive] = useState(0);

  return (
    <article className="hidden md:flex flex-col md:flex-row items-center w-full h-full xl:overflow-hidden">
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

function ServiceInfoMobile() {
  const [active, setActive] = useState(0);
  return (
    <section className="flex md:hidden">
      <div className="w-full space-y-6 mr-4">
        {data.map((item, index) => {
          return (
            <div
              onMouseEnter={() => setActive(index)}
              className="flex flex-col w-full pl-3 space-y-3 "
              key={index}
            >
              <div className="flex flex-row items-end *:duration-300">
                <div className="w-12 h-12">
                  <img className="h-full w-auto" src={item.number} alt="numb" />
                </div>
                <h1
                  className={
                    active === index
                      ? "text-lg text-green w-[220px]"
                      : "text-lg text-grayText w-[220px]"
                  }
                >
                  {item.name}
                </h1>
              </div>
              <p className="text-xs">{item.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionTwo;
