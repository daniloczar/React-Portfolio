import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineTerminal,
  HiOutlineSparkles,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">education</h3>
        <span className="about__subtitle">3rd year student</span>
      </div>
      <div className="about__box">
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">experience</h3>
        <span className="about__subtitle">3 internships</span>
      </div>
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">volunteering</h3>
        <span className="about__subtitle">250+ hours</span>
      </div>
    </div>
  );
};

export default Info;
