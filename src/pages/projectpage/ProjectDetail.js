import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectContent from "./ProjectContent";
import About from "./About";
import { Helmet } from "react-helmet";
import projectsData from "../../database/projectsData";
import HomeBar from "../../components/HomeBar";
import ProjectButtons from "./ProjectButtons";
import loader from "../../assets/loader.gif";

function ProjectDetail() {
  const { name } = useParams();
  const currentProject = projectsData.find((project) => project.name === name);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1500);
  }, [currentProject]);

  return (
    <div className="project-container">
      <Helmet>
        <title>Brid | {currentProject?.name}</title>
      </Helmet>
      <HomeBar />
      <About details={currentProject} />
      {visible ? (
        <section className={visible ? "visible" : "invisible"}>
          <ProjectContent details={currentProject} />
          <ProjectButtons
            visible={visible}
            setVisible={setVisible}
            details={currentProject}
          />
        </section>
      ) : (
        <div>
          <img src={loader} alt="loader" />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
