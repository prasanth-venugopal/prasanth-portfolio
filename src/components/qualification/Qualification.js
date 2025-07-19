import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education');

    const educationData = [
        {
            title: "10th Grade",
            subtitle: "Govt.Hr.Sec. School, Kullanayakkanpalayam, Namakkal(Dt).",
            period: "2015-2016",
            result: "Mark - 84.4%"
        },
        {
            title: "12th Grade",
            subtitle: "Govt. Boys Hr.Sec. School, Komarapalayam, Namakkal(Dt).",
            period: "2017-2018",
            result: "Mark - 52.67%"
        },
        {
            title: "B.Sc. in Computer Science",
            subtitle: "KSR College of Arts and Science(Autonomous), Tiruchengode, Namakkal(Dt).",
            period: "2018-2021",
            result: "CGPA - 7.674"
        },
        {
            title: "MBA in Human Resource Management & Marketing",
            subtitle: "SSM College of Engineering, Komarapalayam, Namakkal(Dt).",
            period: "2021-2023",
            result: "CGPA - 7"
        }
    ];

    const experienceData = [
        {
            title: "Summer Internship",
            subtitle: "Sri Cheran Synthetics India Private Limited, Pallipalayam, Namakkal(Dt).",
            period: "Jan 2022-March 2022",
            result: ""
        },
        {
            title: "Full Stack Web Developer Intern",
            subtitle: "Brainvalley Software Private Limited, Chennai.",
            period: "Nov 2023-Apr 2024",
            result: ""
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div data-aos="zoom-in-up" data-aos-delay="300">
        <section className="qualification section" id="qualification" >
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Professional Journey</span>

            <div className="qualification__container">
                <div className="qualification__tabs">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`qualification__tab ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`qualification__tab ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </motion.button>
                </div>

                <div className="qualification__content">
                    <AnimatePresence mode="wait">
                        {activeTab === 'education' && (
                            <motion.div
                                key="education"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={containerVariants}
                                className="qualification__items"
                            >
                                {educationData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="qualification__item"
                                    >
                                        <div className="qualification__header">
                                            <h3>{item.title}</h3>
                                            <div className="qualification__period">
                                                <HiOutlineCalendar />
                                                <span>{item.period}</span>
                                            </div>
                                        </div>
                                        <p className="qualification__subtitle">{item.subtitle}</p>
                                        {item.result && <div className="qualification__result">{item.result}</div>}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'experience' && (
                            <motion.div
                                key="experience"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={containerVariants}
                                className="qualification__items"
                            >
                                {experienceData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="qualification__item"
                                    >
                                        <div className="qualification__header">
                                            <h3>{item.title}</h3>
                                            <div className="qualification__period">
                                                <HiOutlineCalendar />
                                                <span>{item.period}</span>
                                            </div>
                                        </div>
                                        <p className="qualification__subtitle">{item.subtitle}</p>
                                        {item.result && <div className="qualification__result">{item.result}</div>}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Qualification;