import React from 'react';
import PropTypes from 'prop-types';

import Size from './size';

import './index.css';

const Text = ({ children, size }) => {
  return <div styleName={`root ${size ? size : ''}`}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([Size.normal, Size.large])
};

export default Text;
