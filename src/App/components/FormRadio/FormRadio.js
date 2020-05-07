import React, { Fragment } from "react";
import "./FormRadio.scss";

let FormRadio = ({ id, name, onChange, activePosition_id }) => {
  let chackedValue = false;
  if (activePosition_id === id) {
    chackedValue = true;
  }
  return (
    <Fragment>
      <input
        type="radio"
        id={id}
        name="positions"
        value={name}
        checked={chackedValue}
        onChange={() => {
          onChange(id);
        }}
        className="inputRadio"
      />
      <label htmlFor={id}>{name}</label>
      <br />
    </Fragment>
  );
};

export default FormRadio;
