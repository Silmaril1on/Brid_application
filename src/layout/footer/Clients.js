import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../assets/clientLogos/1.png";
import logo2 from "../../assets/clientLogos/2.png";
import logo3 from "../../assets/clientLogos/3.png";
import logo4 from "../../assets/clientLogos/4.png";
import logo5 from "../../assets/clientLogos/5.png";
import logo6 from "../../assets/clientLogos/6.png";
import logo7 from "../../assets/clientLogos/7.png";
import logo8 from "../../assets/clientLogos/8.png";
import logo9 from "../../assets/clientLogos/9.png";

const clientImages = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

const scrollAnimation = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "-100%",
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: 0,
    },
  },
};

const Clients = () => {
  return (
    <section className="overflow-hidden py-3 lg:py-7 bg-lineColor">
      <div className="logos flex flex-row w-max h-full items-center">
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          animate="visible"
          className="flex"
        >
          {clientImages.map((item, index) => {
            return (
              <img
                key={index}
                className="h-[25px] mx-10"
                src={item}
                alt="clinets"
              />
            );
          })}
        </motion.div>
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          animate="visible"
          className="flex"
        >
          {clientImages.map((item, index) => {
            return (
              <img
                key={index}
                className="h-[25px] mx-10"
                src={item}
                alt="clinets"
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
