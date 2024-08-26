import React, { useState } from 'react';
import './certifications.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Certifications = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Certifications</h2>
        <span className="section__subtitle">Tech Certs</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Full Stack Developer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Developer</h3>
                        <p className="services__modal-description">
                            --Certified Full Stack Developer with expertise in Frontend and Backend Technologies. I am eager to apply my skills.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                   MERN Stack
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Front-End : HTML, CSS, JavaScript and ReactJS
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Back-End : NodeJS, MongoDB, Express.JS
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        
    </section>
  );
}

export default Certifications;