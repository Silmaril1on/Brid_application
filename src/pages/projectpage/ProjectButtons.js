import React, { useEffect, useState } from "react";
import RightButton from "../../components/RightButton";
import LeftButton from "../../components/LeftButton";
import { NavLink } from "react-router-dom";
import projectsData from "../../database/projectsData";

function ProjectButtons({ details }) {
  const projectLinks = projectsData.map((item) => item.link);
  // const [index, setIndex] = useState(details.id);
  // const [link, setLink] = useState(projectLinks[index]);
  const [nextLink, setNextlink] = useState();
  const [prevLink, setPrevLink] = useState();

  useEffect(() => {
    if (details.id === 0) {
      setPrevLink(projectLinks[projectsData.length - 1])

    } else {
      setPrevLink(projectLinks[details.id - 1])
    }

    if (details.id == projectLinks.length - 1) {
      setNextlink(projectLinks[0])
    } else {
      setNextlink(projectLinks[details.id + 1])
    }

  }, [details])

  // const previous = () => {
  //   if (index === 0) {
  //     setIndex(projectsData.length - 1);
  //   } else {
  //     setIndex((prev) => prev - 1);
  //   }
  // };

  // const next = () => {
  //   if (index === projectsData.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   setLink(projectLinks[index]);
  // }, [index, projectLinks]);

  // console.log(index, "index");

  return (
    <div className="w-full py-4 flex justify-between px-5">
      <NavLink to={prevLink} className="center">
        <LeftButton />
      </NavLink>
      <NavLink to={nextLink} className="center">
        <RightButton />
      </NavLink>
    </div>
  );
}

export default ProjectButtons;
