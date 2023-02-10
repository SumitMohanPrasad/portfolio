import React from 'react'
import './ContactBar.css'
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedinIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <LinkedinIcon />
        </a>
        <a
          href="#"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <GitHubIcon />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="#random"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <div className="contact_bar_line"></div>
      </div>
      <div className="contact_bar">
        <a href="mailto:Sumitmp8712.ss@gmail.com" className="contact_bar_email">
        Sumitmp8712.ss@gmail.com
        </a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};

export default ContactBar;
