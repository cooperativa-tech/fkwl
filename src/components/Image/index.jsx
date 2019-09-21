import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt }) => (
  <div styleName="">
    <img styleName="" src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
