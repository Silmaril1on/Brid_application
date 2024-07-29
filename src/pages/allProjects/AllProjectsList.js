import React from "react";
import projectsData from "../../database/projectsData";
import ArrowSvg from "../../components/ArrowSvg";
import { motion } from "framer-motion";
import { staggerSlideUp } from "../../framerMotion/motionValues";
import { NavLink } from "react-router-dom";

function AllProjectsList() {
  return (
    <div className="pt-40">
      <motion.div className="grid grid-col-1 md:grid-cols-3 gap-4 p-5">
        {projectsData.map((project) => {
          return (
            <NavLink
              key={project.id}
              to={"/work/" + project.name}
              className="even:mb-[20%] even:mt-[20%]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerSlideUp}
                viewport={{ once: true }}
                className="w-full *:duration-300 relative duration-500 flex flex-col h-full"
              >
                <article className="flex flex-row w-full h-12 relative space-x-6 border-bottom">
                  <div className="flex flex-row w-full">
                    <div className="">
                      <ArrowSvg />
                    </div>
                    <h1 className="text-2xl center justify-start ml-3 w-full">
                      {project.name}
                    </h1>
                  </div>
                </article>
                <p className="capitalize py-3 text-sm">{project.info}</p>

                <div className="w-full h-96 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 duration-300"
                    src={project.image}
                    alt="horizon"
                  />
                </div>

                <article className="flex w-full flex-row flex-wrap my-2">
                  {project.scope.map((item, index) => {
                    return (
                      <h1 key={index} className="mr-2">
                        {item} \
                      </h1>
                    );
                  })}
                </article>
              </motion.div>
            </NavLink>
          );
        })}
      </motion.div>
    </div>
  );
}

export default AllProjectsList;
