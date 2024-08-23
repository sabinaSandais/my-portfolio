import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sabinasandais@gmail.com">sabinasandais@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/sabinaSandais">
            github.com/sabinaSandais
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sabinasandais">
            linkedin.com/SabinaSandais
          </a>
<<<<<<< HEAD
=======
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/sabinaSandais">
            github.com/sabinaSandais
          </a>
>>>>>>> e4e01e0ccdfeeb8058f163139f4655cb24d6aab5
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
