import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({ children }) => {
  return (
    <button type="button" styleName="root">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
