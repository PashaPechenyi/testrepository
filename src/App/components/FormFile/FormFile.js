import React, { Fragment } from "react";
import "./FormFile.scss";

let FormFile = ({
  photo,
  photoError,
  onClick,
  onChangeMain,
  onChangeRemove,
  ref1,
}) => {
  return (
    <div className="formInputBlock">
      <p>Photo</p>

      {!photoError ? (
        <div className="formInputWrapper">
          <div className="fileInputBlock"> {photo}</div>
          <label>
            Brouse
            <input
              id="photo"
              type="file"
              ref={ref1}
              onChange={() => {
                onChangeMain();
                onChangeRemove("formActive", "formActiveLine");
              }}
              onClick={() => {
                onClick("formActive", "formActiveLine");
              }}
            />
          </label>
        </div>
      ) : (
        <Fragment>
          <div className="formInputWrapper formError">
            <div className="fileInputBlock formErrorLine"> {photo}</div>
            <label>
              Brouse
              <input
                id="photo"
                type="file"
                ref={ref1}
                onChange={onChangeMain}
              />
            </label>
          </div>
          <p
            className="formPar"
            style={{ color: "#ef5b4c", marginTop: "10px" }}
          >
            Error
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default FormFile;
