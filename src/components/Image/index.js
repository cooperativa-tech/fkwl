import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Image = ({src, alt}) => (
  <div styleName="imageWrapper">
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
