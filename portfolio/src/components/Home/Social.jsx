import React from 'react'
import * as Unicons from "@iconscout/react-unicons";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://github.com/daniloczar"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil">
          <Unicons.UilGithub />
        </i>
      </a>
      <a
        href="https://www.linkedin.com/in/daniloczar/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil">
          <Unicons.UilLinkedin />
        </i>
      </a>
      <a
        href="tel:+4407462538694"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil">
          <Unicons.UilWhatsapp />
        </i>
      </a>
    </div>
  );
}
