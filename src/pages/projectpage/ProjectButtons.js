import React, { useEffect, useState } from "react";
import RightButton from "../../components/RightButton";
import LeftButton from "../../components/LeftButton";
import { NavLink } from "react-router-dom";
import projectsData from "../../database/projectsData";

function ProjectButtons({ details }) {
  const projectLinks = projectsData.map((item) => item.link);
  const [index, setIndex] = useState(details.id);
  const [link, setLink] = useState(details.link);

  const previous = () => {
    if (index === 0) {
      setIndex(projectsData.length - 1);
      return;
    }
    setIndex(index - 1);
    setLink(projectsData[index].link);
  };

  const next = () => {
    if (index === projectsData.length - 1) {
      setIndex(0);
      return;
    }
    if (link === projectLinks.length - 1) {
      setLink(projectLinks[0]);
      return;
    }
    setIndex(index + 1);
  };

  useEffect(() => {
    setLink(projectLinks[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  console.log(link);
  console.log(index);

  return (
    <div className="w-full py-4 flex justify-between px-5">
      <NavLink onClick={previous} to={link} className="center">
        <LeftButton />
      </NavLink>
      <NavLink onClick={next} to={link} className="center">
        <RightButton />
      </NavLink>
    </div>
  );
}

export default ProjectButtons;
