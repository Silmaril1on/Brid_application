import React from "react";
import projectsData from "../../../../database/projectsData";
import { NavLink } from "react-router-dom";
import ArrowSvg from "../../../../components/ArrowSvg";
import { motion } from "framer-motion";

function ProjectsSwiperList({ project, animation }) {
  return (
    <>
      {projectsData.map((proj, index) => {
        return (
          <motion.div
            key={index}
            animate={{
              scale: project === index ? 0.95 : 0.7,
            }}
            transition={animation}
            className="w-[370px] h-full"
          >
            <article className="flex flex-row h-9 mb-5 w-full items-center relative border-bottom">
              <div className="w-9 h-9">
                <ArrowSvg />
              </div>
              <h1 className="w-full pl-5">{proj.name}</h1>
            </article>
            <div className="overflow-hidden h-80 w-full">
              <img
                className="duration-300 hover:scale-110 h-full w-full object-cover pointer-events-none"
                src={proj.image}
                alt="horizon_image"
              />
            </div>
            <article className="p-2 w-full space-y-2">
              <h1 className="text-sm capitalize">{proj.info}</h1>
              <div className="relative flex justify-end w-32 cursor-pointer">
                <NavLink
                  to={proj.link}
                  className="text-end text-green relative z-5"
                >
                  {proj.button}
                </NavLink>
              </div>
            </article>
          </motion.div>
        );
      })}
    </>
  );
}

export default ProjectsSwiperList;
