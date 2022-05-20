import React, { useMemo } from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = ({ value, valueKey, label, errorMessage, type, onChange }) => {
  const id = useMemo(() => Math.random() / Math.random(), []);

  const handleChange = ({ target }) => {
    const { value } = target;

    onChange(value, valueKey);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>

      <input id={id} value={value} type={type} onChange={handleChange} placeholder="Forgot your password?"/>

      <span>{errorMessage}</span>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  type: "default",
  errorMessage: "",
  onChange: () => {},
};

export default Input;
