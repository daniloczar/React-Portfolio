import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">portfolio</h2>
      <span className="section__subtitle">some of my recent projects!</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
