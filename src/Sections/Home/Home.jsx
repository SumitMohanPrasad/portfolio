import React from 'react'
import './Home.css';

export default function Home() {
  return (
  <section id="Home" className='home_section'>
    <p className="home_greet">
        Hi, my name is
    </p>
   <h1 className="home_heading_1">
       Sumit Mohan Prasad
   </h1>

    <h1 className="home_heading_2">
        Front End Developer
    </h1>
    <p className="home_desc">
    I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.        
    </p>
    <a href="#work">
        <button className="home_btn">Check out my work!</button>
    </a>
  </section>
  )
}
