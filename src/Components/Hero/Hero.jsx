import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span> I'm Donesh Kalluri,</span> Full Stack Developer based in USA
      </h1>
      <p>
        {" "}
        I have 10 years of experience in Full Stack Development with expertise
        in Java, Spring Boot, Spring MVC, and Struts for backend development,
        and React, Angular, JavaScript, HTML, and CSS for frontend. I’ve worked
        with both SQL and NoSQL databases, along with messaging systems like
        Apache Kafka. I also have hands-on experience with cloud platforms such
        as AWS, Azure, and GCP and DevOps technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
