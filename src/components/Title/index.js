import React from 'react';
import PropTypes from 'prop-types';
import Size from '../Text/size';

import './index.css';

const Title = ({ children, size }) => {
  return <div styleName={` root ${size || ''}`}>{children}</div>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([Size.normal, Size.large])
};

export default Title;
