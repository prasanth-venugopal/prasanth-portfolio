import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">10th Grade</h3>
                            <span className="qualification__subtitle">Govt.Hr.Sec. School, Kullanayakkanpalayam, Namakkal(Dt).</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2015-2016<br/> 
                                Mark - 84.4%
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">12th Grade</h3>
                            <span className="qualification__subtitle">Govt. Boys Hr.Sec. School, Komarapalayam, Namakkal(Dt).</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2017-2018<br/>
                                Mark - 52.67%
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Sc. in Computer Science</h3>
                            <span className="qualification__subtitle">KSR College of Arts and Science(Autonomous), Tiruchengode, Namakkal(Dt).</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2018-2021<br/>
                                CGPA - 7.674
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">MBA in Human Resource Management & Marketing</h3>
                            <span className="qualification__subtitle">SSM College of Engineering, Komarapalayam, Namakkal(Dt).</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2021-2023<br/>
                                CGPA - 7
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Summer Internship</h3>
                            <span className="qualification__subtitle">Sri Cheran Synthetics India Private Limited, Pallipalayam, Namakkal(Dt).</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Jan 2022-March 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Full Stack Web Developer Intern</h3>
                            <span className="qualification__subtitle">Brainvalley Software Private Limited, Chennai.</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Nov 2023-Apr 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;