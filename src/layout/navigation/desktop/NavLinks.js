import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../../framerMotion/motionValues";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <section>
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-row"
      >
        <motion.div variants={staggerOpacity200}>
          <a href="#agency" className="mx-1 flex flex-row">
            <h1 className="text-base text-center cursor-pointer  hover:text-whiteText duration-300">
              agency
            </h1>
            <span className="mx-2">\</span>
          </a>
        </motion.div>

        <NavLink
          className="hover:text-whiteText duration-300 mr-3"
          to="/allprojects"
        >
          work \
        </NavLink>

        <motion.div variants={staggerOpacity200}>
          <a href="#services" className="mx-1 flex flex-row">
            <h1 className="text-base text-center cursor-pointer  hover:text-whiteText duration-300">
              services
            </h1>
            <span className="mx-2">\</span>
          </a>
        </motion.div>

        <motion.div variants={staggerOpacity200}>
          <a href="#awards" className="mx-1 flex flex-row">
            <h1 className="text-base text-center cursor-pointer  hover:text-whiteText duration-300">
              awards
            </h1>
            <span className="mx-2">\</span>
          </a>
        </motion.div>

        <motion.div variants={staggerOpacity200}>
          <a href="#footer" className="mx-1 flex flex-row">
            <h1 className="text-base text-center cursor-pointer  hover:text-whiteText duration-300">
              contact
            </h1>
            <span className="mx-2">\</span>
          </a>
        </motion.div>

        <NavLink
          className="hover:font-bold duration-300 text-green w-20"
          to="/factory"
        >
          factory
        </NavLink>
      </motion.div>
    </section>
  );
}

export default NavLinks;
