import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../../framerMotion/motionValues";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SideLinks({ setIsActive }) {
  return (
    <aside className="fixed w-full h-screen top-0 left-0 z-10 bg-black center space-y-5 flex-col">
      <div className="cursor-pointer" onClick={() => setIsActive(false)}>
        <IoMdClose size={40} />
      </div>
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-col w-full space-y-2"
      >
        <NavLink
          onClick={() => setIsActive(false)}
          className="hover:text-whiteText duration-300 mr-3"
          to="/allprojects"
        >
          work \
        </NavLink>

        <NavLink
          onClick={() => setIsActive(false)}
          className="hover:font-bold duration-300 text-green w-20"
          to="/factory"
        >
          factory
        </NavLink>
      </motion.div>
    </aside>
  );
}

export default SideLinks;
