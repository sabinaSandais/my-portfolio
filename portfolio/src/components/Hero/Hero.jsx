import React from 'react'
import {getImageUrl} from '../../utils';

const Hero = () => {
  return (
   <section>
    <div>
        <h1>Hi, I'm Sabina Sandais</h1>
        <p>I am a full-stack developer.
            Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sabinasandais@gmail.com"> Contact Me</a>
    </div>
    <img src={getImageUrl("hero/Screenshot.png")} alt="" />
   </section>
  )
}

export default Hero
