import React from "react";

function ProjectContent({ details }) {
  const images = details?.projectImages;

  return (
    <div className="project-section-container">
      {images?.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <img className="w-full h-full" src={image} alt="logos_and_marks" />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectContent;
