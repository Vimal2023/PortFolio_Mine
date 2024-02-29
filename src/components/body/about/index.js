import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello World !, I am,
         <br /> <span className="info-name">Vimal Anand</span>.
         <br /> I have experience working with Full Stack Web-Tech.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/picofmine.jpg")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;