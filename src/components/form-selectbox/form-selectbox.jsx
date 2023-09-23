import React from "react";
import Select from "react-select";
import "../../styles/components/form-selectbox.scss";

const customStyles = {
  control: (provided, state) => {
    return {
      ...provided,
      height: state.selectProps.height || 48,
      color: "#fff",
      // fontSize: state.selectProps.fontSize || '0.875em',
      borderRadius: 4,
      fontSize: 16,
      minHeight: 20,
      backgroundColor: "transparent",
      // borderColor: "#8790a3",
      border:
        state.menuIsOpen || state.isFocused
          ? "2px solid #fff !important"
          : "1px solid #fff",
      transition: "all 80ms ease-in-out",
      boxShadow: "none !important",
      cursor: "pointer",
    };
  },

  // valueContainer: (provided: any, state: any) => {
  //   return {
  //     ...provided,
  //     height: "100%",
  //   };
  // },

  placeholder: (provided, state) => {
    return {
      ...provided,
      fontSize: 14,
      fontWeight: 500,
      color: "#fff",
    };
  },

  singleValue: (provided, state) => {
    return {
      ...provided,
      color: "inherit",
    };
  },

  // indicatorsContainer: (provided, state) => {
  //   return {
  //     ...provided,
  //     height: "100%",
  //   };
  // },

  indicatorSeparator: (provided, state) => {
    return {
      ...provided,
      display: "none !important",
    };
  },

  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: "#fff",
    };
  },

  // menu: (provided: any, state: any) => {
  //   return {
  //     ...provided,
  //     backgroundColor: "#FEFEFE",
  //     fontSize: "0.875rem",
  //   };
  // },

  // menuList: (provided: any, state: any) => {
  //   return {
  //     ...provided,
  //     maxHeight: 180,
  //   };
  // },

  option: (provided, state) => {
    return {
      ...provided,
      //   paddingTop: 5,
      //   paddingBottom: 5,
      color: "#000",
    };
  },
};

function getValueWithLabel(value, options) {
  if (value && value.hasOwnProperty("label")) {
    return value;
  }
  return options.find((x) => x.value === value);
}

function FormSelectBox({
  label,
  name,
  value,
  options = [],
  placeholder,
  isLoading,
  isInvalid,
  validationMessage,
  onChange,
  ...rest
}) {
  return (
    <div className="selectBox">
      {label && (
        <div className="label">
          <label>{label}</label>
        </div>
      )}

      <Select
        styles={customStyles}
        name={name}
        value={value && getValueWithLabel(value, options)}
        options={options}
        isLoading={isLoading}
        classNamePrefix="form-select-box"
        placeholder={placeholder}
        // isInvalid={isInvalid}
        onChange={onChange}
        {...rest}
      />

      {isInvalid && validationMessage && (
        <div>
          <p className="errorMsg">{validationMessage}</p>
        </div>
      )}
    </div>
  );
}

export default FormSelectBox;
