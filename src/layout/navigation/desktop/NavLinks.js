import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../../framerMotion/motionValues";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [active, setActive] = useState(0);
  return (
    <section className="hidden md:block">
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-row"
      >
        <motion.div variants={staggerOpacity200}>
          <a
            id="1"
            onClick={() => setActive(1)}
            href="#services"
            className="mx-1 flex flex-row"
          >
            <h1
              className={
                active === 1
                  ? "text-base text-center cursor-pointer hover:text-whiteText duration-300 text-whiteText"
                  : "text-base text-center cursor-pointer hover:text-whiteText duration-300"
              }
            >
              services
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
          <a
            id="2"
            onClick={() => setActive(2)}
            href="#awards"
            className="mx-1 flex flex-row"
          >
            <h1
              className={
                active === 2
                  ? "text-base text-center cursor-pointer hover:text-whiteText duration-300 text-whiteText"
                  : "text-base text-center cursor-pointer hover:text-whiteText duration-300"
              }
            >
              awards
            </h1>
            <span className="mx-2">\</span>
          </a>
        </motion.div>

        <motion.div variants={staggerOpacity200}>
          <a
            id="3"
            onClick={() => setActive(3)}
            href="#footer"
            className="mx-1 flex flex-row"
          >
            <h1
              className={
                active === 3
                  ? "text-base text-center cursor-pointer hover:text-whiteText duration-300 text-whiteText"
                  : "text-base text-center cursor-pointer hover:text-whiteText duration-300"
              }
            >
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
