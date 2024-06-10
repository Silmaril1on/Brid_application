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
            <article className="w-full flex flex-col mt-2">
              <div className="flex flex-row flex-wrap">
                {proj.scope.map((item, index) => {
                  return (
                    <h1 key={index} className="text-sm mr-3">
                      {item} \
                    </h1>
                  );
                })}
              </div>
              <NavLink
                to={proj.link}
                className="text-start my-2 relative z-5 hover:text-green"
              >
                visit project
              </NavLink>
            </article>
          </motion.div>
        );
      })}
    </>
  );
}

export default ProjectsSwiperList;
