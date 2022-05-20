import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, type, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button type={type} onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "default",
  onClick: () => {},
};

export default Button;
