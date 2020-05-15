import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FormInpurs = ({
  id,
  placeholder,
  onChange,
  value,
  error,
  paragraphValue,
  extraParagraphValue,
  onFocus,
  onBlur,
  isDisabledButton,
}) => {
  return (
    <Fragment>
      <p>{paragraphValue}</p>
      {!error ? (
        <Fragment>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={
              isDisabledButton
                ? "formInputs formInputsDisabled"
                : "formInputs formActive"
            }
            disabled={isDisabledButton}
          />
          {extraParagraphValue && (
            <p className="formPar">{extraParagraphValue}</p>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className=" formInputs formError activeInputError"
          />
          <p className="formPar" style={{ color: "#ef5b4c" }}>
            Error
          </p>
        </Fragment>
      )}
      <br />
    </Fragment>
  );
};

FormInpurs.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  paragraphValue: PropTypes.string,
  extraParagraphValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isDisabledButton: PropTypes.bool,
};

FormInpurs.defaultProps = {
  placeholder: "",
  onChange: () => {},
  value: "Error",
  error: false,
  paragraphValue: "",
  extraParagraphValue: null,
  onFocus: () => {},
  onBlur: () => {},
  isDisabledButton: false,
};

export default FormInpurs;
