import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1> About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am a Full Stack Java Developer with 10 years of experience in
              Full Stack Technologies using Java and JavaScript based
              frameworks.
            </p>
            <p>
              My passion for Full stack development helped me dive into modern
              technologies and tools{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p> Java & Spring</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p> React JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p> Angular JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p> DevOps</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p> YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
