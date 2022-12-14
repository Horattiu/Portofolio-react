import React from "react";
import "./projects.css";

function Projects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-projects" id="link-projects">
      <p className="projects-title">Projects</p>
      <div className="projects-container grid"
        data-aos="fade-up"
        data-aos-offset="400"
      >


        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/fabricad-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">
              first freelance project i did for a client / furniture company
              using react
            </p>
            <a
              className="blank"
              href="https://elaborate-cascaron-24c525.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/bankist-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">
              first freelance project i did for a client / furniture company
              using react
            </p>
            <a
              className="blank"
              href="https://banking-app-final.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/image-gallery-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">
              first freelance project i did for a client / furniture company
              using react
            </p>
            <a
              className="blank"
              href="https://elaborate-cascaron-24c525.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/omnifood-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">
              first freelance project i did for a client / furniture company
              using react
            </p>
            <a
              className="blank"
              href="https://omnifood-web-final.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">

        </div>

        <div className="project-box"></div>
      </div>
    </div>
  );
}

export default Projects;
