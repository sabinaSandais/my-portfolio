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
              <h3 className={styles.title2}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  return (
                    <li className={styles.skill} key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                <a className={styles.link} href={project.demo}>
                  Demo
                </a>
                <a className={styles.link} href={project.source}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
