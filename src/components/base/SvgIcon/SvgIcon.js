import React from "react";
import PropTypes from "prop-types";

// base icons
import { ReactComponent as Logo } from "../../../assets/img/logo.svg";

const FIRMWARES_ICONS = {
  logo: Logo,
};

const SVG_BY_TYPE = {
  ...FIRMWARES_ICONS,
};

const SvgIcon = ({ type, className }) => {
  const CustomSvg = SVG_BY_TYPE[type];

  return <CustomSvg className={className} />;
};

SvgIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SvgIcon.defaultProps = {
  className: "",
};

export default SvgIcon;