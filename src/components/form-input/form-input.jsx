import React from "react";
import "../../styles/components/form-input.scss";

const FormInput = ({
  type,
  label,
  name,
  value,
  isInvalid,
  placeholder,
  validationMessage,
  onChange,
  disabled,
  height,
  width,
  backendError,
  isTouched,
  autoComplete = "off",
}) => {
  const styles = {
    extra: {
      height: height ? height : "47px",
      // width: width ? width : "100%",
      border:
        isInvalid && validationMessage ? "1px solid red" : "1px solid #fff",
    },
  };
  return (
    <div className="formInput">
      {label && <label>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={1}
        // className={className}
        // onFocus={onFocus}
        onChange={onChange}
        disabled={disabled}
        style={styles.extra}
      />

      {isInvalid && validationMessage && (
        <p className="errorMsg"> {validationMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
