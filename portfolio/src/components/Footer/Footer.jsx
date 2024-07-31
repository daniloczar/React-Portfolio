import React from "react";
import "./footer.css";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Danilo Souza</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              about
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.github.com/gretchenlam"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gretchen-lam/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gurchout/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
