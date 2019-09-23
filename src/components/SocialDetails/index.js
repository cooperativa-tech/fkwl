import React from 'react';

import Image from 'root/components/Image';

/* eslint-disable */
import logoFacebook from '!file-loader!../../assets/logoFacebook.svg';
import logoInstagram from '!file-loader!../../assets/logoInstagram.svg';

import './index.css';
const SocialDetails = () => {
  return (
    <>
      <div styleName="textBlock">
        <div styleName="bold">
          <Image src={logoFacebook} alt="From Kibera With Love Logo" />
          <a href="https://www.instagram.com/fromkiberawithlove/">Facebook</a>
        </div>
        <div styleName="textBlock">
          <div styleName="bold">
            <Image src={logoInstagram} alt="From Kibera With Love Logo" />
            <a href="https://www.facebook.com/FromKiberaWithLove">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialDetails;
