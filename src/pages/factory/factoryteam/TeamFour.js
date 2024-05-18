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
      delay: 1.2,
    },
  },
};

function TeamFour() {
  return (
    <motion.article
      variants={slideUp}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      className="w-44 h-44 absolute bottom-[12%] left-[41%] z-3"
    >
      <img src={avatar} alt="team_member" />
      <div className="flex flex-row items-center">
        <div className="w-14 h-14">
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

export default TeamFour;
