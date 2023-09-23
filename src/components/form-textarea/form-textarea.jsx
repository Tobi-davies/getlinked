import React from "react";
import "../../styles/components/form-textarea.scss";

const FormTextarea = ({
  label,
  name,
  value,
  isInvalid,
  placeholder,
  validationMessage,
  onChange,
  rows,
}) => {
  const styles = {
    extra: {
      border:
        isInvalid && validationMessage ? "1px solid red" : "1px solid #fff",
    },
  };
  return (
    <div className="textarea">
      {label && <label>{label}</label>}

      <textarea
        // type={type}
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.extra}
      ></textarea>

      {isInvalid && validationMessage && (
        <p className="errorMsg"> {validationMessage}</p>
      )}
    </div>
  );
};

export default FormTextarea;
