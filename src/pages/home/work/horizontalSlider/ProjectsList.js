import React from "react";
import ArrowSvg from "../../../../components/ArrowSvg";
import { NavLink } from "react-router-dom";

function ProjectsList({ name, image, project }) {
  return (
    <NavLink to={"/project-detail/" + project.name}>
      <section className="w-[505px] *:duration-300 relative duration-500 flex flex-col h-full px-4">
        <article className="flex flex-row w-full h-12 relative mb-10 space-x-6 border-bottom">
          <div className="flex flex-row w-full">
            <div className="w-auto h-12">
              <ArrowSvg />
            </div>
            <h1 className="text-3xl center justify-start ml-3 w-full">
              {name}
            </h1>
          </div>
        </article>

        <div className="w-full h-96 overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-300"
            src={image}
            alt="horizon"
          />
        </div>
        <div className="border-b border-t mt-5 border-lineColor flex flex-row flex-wrap py-2">
          {project.scope.map((item, index) => {
            return (
              <h1 key={index} className="mr-3">
                {item} \
              </h1>
            );
          })}
        </div>
      </section>
    </NavLink>
  );
}

export default ProjectsList;
