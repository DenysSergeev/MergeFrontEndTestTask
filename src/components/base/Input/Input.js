import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Input.module.scss";

function Input({
  value, 
  valueKey, 
  label, 
  errorMessage, 
  isSucceed, 
  type, 
  name, 
  onChange, 
  action,
}) {
  const id = useMemo(() => Math.random() / Math.random(), []);

  const isActionAvailable = useMemo(
    () => !!Object.keys(action).length,
  );

  const handleChange = ({ target }) => {
    const { value } = target;

    onChange(value, valueKey);
  };


  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <span className={styles.errorMessage}>{errorMessage}</span>
      </div>

      
      <div className={styles.fieldContainer}>
        <input
          id={id}
          className={classNames(styles.field, {
            [styles.fieldError]: !!errorMessage,
            [styles.fieldSucceed]: isSucceed,
          })}
          value={value}
          type={type}
          name={name}
          onChange={handleChange}
        />

        {isActionAvailable && (
          <span className={styles.action} onClick={action.onClick}>
            {action.text}
          </span>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  isSucceed: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  action: PropTypes.object,
};

Input.defaultProps = {
  label: "",
  type: "default",
  errorMessage: "",
  onChange: () => {},
  isSucceed: false,
  name: "",
  action: {},
};


export default Input;