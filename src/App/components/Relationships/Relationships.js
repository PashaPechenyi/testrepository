import React from "react";
import "./Relationships.scss";

const Relationships = ({ isDisabledButton }) => {
  return (
    <section className="relationships">
      <a name="relationship"></a>
      <div className="container relationship_wrapper">
        <h1>Let's get acquainted</h1>
        <div className="relationship_inner">
          <div className="relationship_image">
            {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src={require("../../../images/man-laptop-v1.svg")}
              alt="image"
            />
          </div>

          <div className="relationship_text">
            <h3>I am cool frontend developer</h3>
            <p>
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p>
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page PSD mockup into HTML5/CSS3.
            </p>
            <a
              href={!isDisabledButton && "#signUp"}
              className={!isDisabledButton ? "primaryLink" : "disabledLink"}
            >
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relationships;
