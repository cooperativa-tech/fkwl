import React from 'react';
import PropTypes from 'prop-types';

import Size from './size';

import './index.css';

const TextAbout = ({ children, size }) => {
  return <div styleName={`root ${size || ''}`}>{children}</div>;
};

TextAbout.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([Size.normal, Size.large])
};

export default TextAbout;
