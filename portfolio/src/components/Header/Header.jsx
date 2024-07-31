import React, { useState } from 'react'
import * as Unicons from "@iconscout/react-unicons";
import './header.css'

export default function Header() {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (this.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="../index.html" className="nav__logo">
          Danilo
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <Unicons.UilEstate className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil- nav__icon">
                  <Unicons.UilUser />
                </i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <Unicons.UilScenery className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil- nav__icon">
                  <Unicons.UilScenery />
                </i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
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
