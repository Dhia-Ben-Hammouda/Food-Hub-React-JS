import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <div className="up">
        For more informations follow me on :
      </div>

      <div className="med">
        <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
        <a href="https://www.facebook.com/dhiabenhamouda10" target="_blank">
            <FaFacebook />
          </a>

          <a href="https://www.linkedin.com/in/dhia-ben-hamouda-3b9019215/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Dhia-Ben-Hammouda" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.youtube.com/channel/UCkM5tiG4nbR0ZkI6-sdFkDg" target="_blank">
            <FaYoutube />
          </a>
        </IconContext.Provider>
      </div>

      <div className="down">
        Copyright &copy; 2021 Dhia Ben Hammouda All rights reserved
      </div>
    </footer>
  );
}

export default Footer;