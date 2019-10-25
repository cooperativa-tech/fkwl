import React from 'react';

import Logo from 'root/components/Logo';

/* eslint-disable */
import logoFacebook from '!file-loader!../../assets/logoFacebook.svg';
import logoInstagram from '!file-loader!../../assets/logoInstagram.svg';

import './index.css';
const SocialDetails = () => {
  return (
    <>
      <div styleName="textBlock">
        <div styleName="bold">
          <Logo src={logoFacebook} alt="From Kibera With Love Logo" />
          <a href="https://www.facebook.com/FromKiberaWithLove" target="_blank">
            Facebook
          </a>
        </div>
      </div>
      <div styleName="textBlock">
        <div styleName="bold">
          <Logo
            src={logoInstagram}
            alt="From Kibera With Love Logo"
            target="_blank"
          />
          <a
            href="https://www.instagram.com/fromkiberawithlove/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialDetails;
