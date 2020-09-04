import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
import arrow from '!file-loader!../../assets/arrowIcon.svg';
/* eslint-enable */
import './index.css';

const Cta = ({ children }) => {
  return (
    <div styleName="root">
      <div styleName="text">{children}</div>
      <img src={arrow} alt="arrowIcon" />
    </div>
  );
};

Cta.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cta;
