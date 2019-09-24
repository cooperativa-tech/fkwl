import React from 'react';

import './index.css';

/* eslint-disable */
import fkwlGif from '../../assets/fkwlGif.gif';
import logo from '!file-loader!../../assets/logoFkwl.svg';
/* eslint-enable */

const Gif = () => {
  return (
    <div styleName="root">
      <div styleName="imageWrapper">
        <img src={logo} alt="From Kibera With Love Logo" />
      </div>
      <div styleName="gifWrapper">
        <img src={fkwlGif} alt="Happy kid fkwl" />
      </div>
    </div>
  );
};
export default Gif;
