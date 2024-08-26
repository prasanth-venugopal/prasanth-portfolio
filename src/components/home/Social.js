import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/prasanth__venugopal/" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/prasanth-venugopal" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/d-prasanth/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;