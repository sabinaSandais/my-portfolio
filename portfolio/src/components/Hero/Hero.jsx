import React from 'react';
import styles from './Hero.module.css';
import {getImageUrl} from '../../utils';

const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sabina Sandais</h1>
        <p className = {styles.description}>I am a full-stack developer.
            Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sabinasandais@gmail.com" className = {styles.contactBtn}> Contact Me</a>
    </div>
    <img src={getImageUrl("hero/Screenshot2.png")} alt="Hero Image Of Me" className = {styles.heroImg} />
    < div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </section>
  )
}

export default Hero
