import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Logo from '../Logo';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
/* eslint-enable */

import './index.css';

const Header = ({ contact }) => {
  return (
    <div styleName="header">
      <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
      <div styleName="navbarLinks">
        <Link styleName="linkPt" to="/">
          Pt
        </Link>
        <span styleName="separator"> {'/'}</span>
        <Link styleName="linkEn" to="/en">
          En
        </Link>
        <Link styleName="hide" to="/">
          <a href="mailto:hello@fromkiberawithlove.com">{contact}</a>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  contact: PropTypes.string.isRequired
};
export default Header;
