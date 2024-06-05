import React, { useState } from "react";
import RightButton from "../../components/RightButton";
import LeftButton from "../../components/LeftButton";
import { NavLink } from "react-router-dom";
import projectsData from "../../database/projectsData";

function ProjectButtons() {
  const projectLinks = projectsData.map((item) => item.link);
  const [link, setLink] = useState("");

  const projectLink = () => {
    const project = Math.floor(Math.random() * projectLinks.length);
    const selectedLink = projectLinks[project];
    setLink(selectedLink);
  };

  return (
    <div className="w-full py-4 flex justify-between px-5">
      <NavLink onClick={projectLink} to={link}>
        <LeftButton />
      </NavLink>
      <NavLink onClick={projectLink} to={link}>
        <RightButton />
      </NavLink>
    </div>
  );
}

export default ProjectButtons;
