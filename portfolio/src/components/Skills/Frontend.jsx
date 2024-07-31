import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">frontend development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">html</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">css</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">javascript</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">react</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
