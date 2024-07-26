import React from "react";
import { motion } from "framer-motion";
import { staggerOpacity200 } from "../../../framerMotion/motionValues";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function SideLinks({ setIsActive }) {
  const navigate = useNavigate();
  const services = () => {
    navigate("/");
    setIsActive(false);
    setTimeout(() => {
      const services = document.getElementById("services");
      if (services) {
        services.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const awards = () => {
    navigate("/");
    setTimeout(() => {
      const awards = document.getElementById("awards");

      if (awards) {
        awards.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const contact = () => {
    navigate("/");
    setTimeout(() => {
      const contact = document.getElementById("footer");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <aside className="fixed w-full h-screen top-12 left-0 z-10 bg-black center space-y-5 flex-col">
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-col w-full space-y-2 text-5xl *:w-full *:text-center hover:*:text-whiteText *:duration-300"
      >
        <motion.button variants={staggerOpacity200} onClick={services}>
          services
        </motion.button>
        <motion.button variants={staggerOpacity200} onClick={awards}>
          work
        </motion.button>
        <motion.button variants={staggerOpacity200} onClick={contact}>
          awards
        </motion.button>
        <NavLink
          onClick={() => setIsActive(false)}
          className="mr-3"
          to="/allprojects"
        >
          <motion.button variants={staggerOpacity200} onClick={contact}>
            contact
          </motion.button>
        </NavLink>

        <NavLink
          onClick={() => setIsActive(false)}
          className=" text-green w-20"
          to="/factory"
        >
          <motion.button variants={staggerOpacity200} onClick={contact}>
            factory
          </motion.button>
        </NavLink>
      </motion.div>
    </aside>
  );
}

export default SideLinks;
