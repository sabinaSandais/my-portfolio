import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div className={styles.container2} key={id}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Image of${project.title}`}
                className={styles.image}
              />
              <h3 className={styles.title}>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, id) => {
                  <li key={id}>{skill}</li>;
                })}
              </ul>
              <div>
                <a href={project.demo}>Demo</a>
                <a href={project.source}>source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
