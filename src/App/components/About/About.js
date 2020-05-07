import React from "react";
import "./About.scss";

const About = ({ isDisabledButton }) => {
  return (
    <section className="about">
      <a name="about"></a>
      <div className="container about_inner">
        <div className="about_wrapper">
          <h1>
            test assignmant <br />
            for fronfend <br />
            developer position
          </h1>
          <p>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
            <span>
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck! The photo has to scale in the banner area
              on the different screens
            </span>
          </p>
          <a
            href={!isDisabledButton && "#signUp"}
            className={isDisabledButton ? "disabledLink" : "primaryLink"}
          >
            <span> Sign up now </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
