import React from "react";
import "./CompletedMessage.scss";

const CompletedMessage = ({ onClick, text, buttonText }) => {
  return (
    <div>
      <div className="opacity"></div>
      <div className="completedMessage">
        <h2>Congratulations</h2>
        <svg
          onClick={onClick}
          class="bi bi-x"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
            clip-rule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
            clipRule="evenodd"
          />
        </svg>

        <p>{text}</p>

        <button className="formButton" onClick={onClick}>
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default CompletedMessage;
