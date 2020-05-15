import React, { Fragment } from "react";


let FormFile = ({
  photo,
  photoError,
  onClick,
  onChangeMain,
  onChangeRemove,
  ref1,
  isDisabledButton,
}) => {
  return (
    <div className="formInputBlock">
      <p>Photo</p>

      {!photoError ? (
        <div className="formInputWrapper">
          <div className="textBlock"> {photo}</div>
          <label>
            Brouse
            <input
              id="photo"
              type="file"
              ref={ref1}
              onChange={() => {
                onChangeMain();
                onChangeRemove("formActiveFile", "formActiveLine");
              }}
              onClick={() => {
                onClick("formActiveFile", "formActiveLine");
              }}
              disabled={isDisabledButton}
            />
          </label>
        </div>
      ) : (
        <Fragment>
          <div className="formInputWrapper formError">
            <div className="textBlock formErrorLine"> {photo}</div>
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
