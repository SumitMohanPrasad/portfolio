import React from 'react'
import Heading from '../../Components/Heading/Heading';
import './About.css';
export default function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me"/>
    <div className="about_container">
      <div className="about_left">
        <p className="about_desc">
        Hi, I'm Sumit, and I graduated from the University of Lovely Professional University in 2024 with a degree in Computer Science and Engineering. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.  </p>
         <p>
         My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.
         </p>
      </div>
      <div className="about_right">
        <img src ="" alt="" className="about_profile_img"/>
        <div className="about_img_border"/>
      </div>
    </div>

    </section>
  )
}
