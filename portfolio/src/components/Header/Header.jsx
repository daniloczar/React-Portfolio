import React, { useState } from 'react'
import * as Unicons from "@iconscout/react-unicons";
import './header.css'

export default function Header() {
    const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="../index.html" className="nav__logo">
          Danilo
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon">
                  <Unicons.UilEstate />
                </i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil- nav__icon">
                  <Unicons.UilUser />
                </i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil- nav__icon">
                  <Unicons.UilScenery />
                </i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil- nav__icon">
                  <Unicons.UilMessage />
                </i>
                Contact
              </a>
            </li>
          </ul>
          <i className="uil nav__close" onClick={() => showMenu(!Toggle)}>
            <Unicons.UilTimes />
          </i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil">
            <Unicons.UilApps />
          </i>
        </div>
      </nav>
    </header>
  );
}
