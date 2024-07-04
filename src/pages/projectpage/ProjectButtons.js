import React, { useEffect, useState } from "react";
import RightButton from "../../components/RightButton";
import LeftButton from "../../components/LeftButton";
import { NavLink } from "react-router-dom";
import projectsData from "../../database/projectsData";

function ProjectButtons({ details, setVisible }) {
  const projectLinks = projectsData.map((item) => item.link);
  const [nextLink, setNextlink] = useState();
  const [prevLink, setPrevLink] = useState();

  useEffect(() => {
    if (details.id === 0) {
      setPrevLink(projectLinks[projectsData.length - 1]);
    } else {
      setPrevLink(projectLinks[details.id - 1]);
    }

    if (details.id === projectLinks.length - 1) {
      setNextlink(projectLinks[0]);
    } else {
      setNextlink(projectLinks[details.id + 1]);
    }
  }, [details, projectLinks]);

  return (
    <div className="w-full py-4 flex justify-between px-5">
      <NavLink
        to={prevLink}
        onClick={() => setVisible(false)}
        className="center"
      >
        <LeftButton />
      </NavLink>
      <NavLink
        to={nextLink}
        onClick={() => setVisible(false)}
        className="center"
      >
        <RightButton />
      </NavLink>
    </div>
  );
}

export default ProjectButtons;
