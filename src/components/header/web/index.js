import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    {/* <div className="web-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Experience
        </a>
    </div> */}
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
    <div className="web-option">
        <a href="https://drive.google.com/drive/folders/1dL-HUlS4Xo8pIKslXeNopr3HzwW6QT4c?usp=drive_link">
        <i class="fi fi-rr-share"></i>Resume
        </a>
    </div>
  </div>;
}

export default Web;