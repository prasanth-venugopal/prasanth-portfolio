import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid" data-aos="fade-left">
        <div className="about__box" data-aos="fade-left" data-aos-delay="200">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
              Full Stack Developer - Intern at Mahyan Technologies
            </span>
        </div>
        <div className="about__box" data-aos="fade-up" data-aos-delay="200">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5 Projects</span>
        </div>
        <div className="about__box" data-aos="fade-up" data-aos-delay="200">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Notice Period</h3>
            <span className="about__subtitle">Immediate Joiner</span>
        </div>
    </div>
  );
}

export default Info;