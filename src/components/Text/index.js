import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Text = ({ children }) => {
  return <div styleName="root">{children}</div>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired
};

export default Text;
