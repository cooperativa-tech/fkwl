import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Logo = ({ src, alt }) => (
  <div styleName="imageWrapper">
    <img styleName="imageStyle" src={src} alt={alt} />
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
