import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="nav_container">
          <div className="nav_left">
              SMP
          </div>
          <div className="nav_right">
              <a href="#about" className="nav_link">
                  <span>About</span>
              </a>
              <a href="#Experience" className="nav_link">
              <span>Experience</span>

              </a>
              <a href="#Work" className="nav_link">
              <span>Work</span>

              </a>
              <a href="#Contact" className="nav_link">
              <span>Contact</span>
              </a>
              <button className="nav_resume_btn">
                  Resume
              </button>
          </div>
    </nav>
  )
}

export default Navbar
