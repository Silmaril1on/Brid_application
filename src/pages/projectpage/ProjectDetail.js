import React from "react";
import { useParams } from "react-router-dom";
import ProjectContent from "./ProjectContent";
import About from "./About";
import { Helmet } from "react-helmet";
import projectsData from "../../database/projectsData";
import HomeBar from "../../components/HomeBar";
import ProjectButtons from "./ProjectButtons";

function ProjectDetail() {
  const { name } = useParams();
  const currentProject = projectsData.find((project) => project.name === name);

  return (
    <div className="project-container">
      <Helmet>
        <title>Brid | {currentProject?.name}</title>
      </Helmet>
      <HomeBar />
      <About details={currentProject} />
      <ProjectContent details={currentProject} />
      <ProjectButtons details={currentProject} />
    </div>
  );
}

export default ProjectDetail;
