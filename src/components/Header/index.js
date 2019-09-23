import React from 'react';

import { Link } from 'gatsby';
import Image from '../Image';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';

import './index.css';

const Header = () => {
  return (
    <div styleName="header">
      <Image src={logoNavbar} alt="From Kibera With Love Logo" />
      <div styleName="navbarLinks">
        <Link styleName="linkPt" to="/">
          Pt
        </Link>
        {'/'}
        <Link styleName="linkEn" to="/en">
          En
        </Link>
        <Link to="/">Contacte-nos</Link>{' '}
      </div>
    </div>
  );
};
export default Header;
