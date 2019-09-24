import React from 'react';

import { Link } from 'gatsby';
import Logo from '../Logo';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
/* eslint-enable */

import './index.css';

const Header = () => {
  return (
    <div styleName="header">
      <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
      <div styleName="navbarLinks">
        <Link styleName="linkPt" to="/">
          Pt
        </Link>
        {'/'}
        <Link styleName="linkEn" to="/en">
          En
        </Link>
        <Link styleName="hide" to="/">
          Contacta-nos
        </Link>
      </div>
    </div>
  );
};
export default Header;
