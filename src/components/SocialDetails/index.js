import React from 'react';

/* eslint-disable */
import logoFacebook from '!file-loader!../../assets/logoFacebook.svg';
import logoInstagram from '!file-loader!../../assets/logoInstagram.svg';

import './index.css';
const SocialDetails = () => {
  return (
    <>
      <div styleName="textBlock">
        <div styleName="bold">
          <a href="https://www.facebook.com/FromKiberaWithLove" target="_blank">
            <img
              styleName="logo"
              src={logoFacebook}
              alt="From Kibera With Love Logo"
              target="_blank"
            />
            Facebook
          </a>
        </div>
      </div>
      <div styleName="textBlock">
        <div styleName="bold">
          <a
            href="https://www.instagram.com/fromkiberawithlove/"
            target="_blank"
          >
            <img
              styleName="logo"
              src={logoInstagram}
              alt="From Kibera With Love Logo"
              target="_blank"
            />
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialDetails;
