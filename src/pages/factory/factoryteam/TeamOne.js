import React from "react";
import avatar from "../../../assets/yada2.png";
import ArrowSvg from "../../../components/ArrowSvg";
import { motion } from "framer-motion";

const slideUp = {
  hidden: {
    y: "80px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

function TeamOne() {
  return (
    <motion.article
      // style={{ x }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideUp}
      className="w-44 h-44 absolute top-[4%] left-[32%]"
    >
      <img src={avatar} alt="team_member" />
      <div className="flex flex-row items-center">
        <div className="w-12 h-12">
          <ArrowSvg />
        </div>
        <div className="w-full *:text-xs">
          <h1>name surname</h1>
          <h1>creative director</h1>
        </div>
      </div>
    </motion.article>
  );
}

export default TeamOne;
