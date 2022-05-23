import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ label, type, isDisabled, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button 
      className={styles.button}
      type={type} 
      onClick={handleClick}
      disabled={isDisabled}>
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "default",
  onClick: () => {},
  isDisabled: false,
};

export default Button;
