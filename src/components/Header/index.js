import React from 'react';
import { Link } from 'gatsby';
import { useIntl, FormattedMessage } from 'react-intl';

import Logo from '../Logo';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
/* eslint-enable */

import './index.css';

const Header = () => {
  const { locale } = useIntl();

  return (
    <div styleName="header">
      <Link
        to={`${locale === 'pt' ? '/' : '/en'}`}
      >
        <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
      </Link>
      <div styleName="navbarLinks">
        <Link
          styleName={`${locale === 'pt' ? 'linkPt' : 'linkPt fade'}`}
          to="/"
        >
          Pt
        </Link>
        <span styleName="separator">/</span>
        <Link
          styleName={`${locale === 'en' ? 'linkEn' : 'linkEn fade'}`}
          to="/en"
        >
          En
        </Link>
        <div styleName="hide">
          <a href="mailto:fromkiberawithlove@gmail.com">
            <FormattedMessage id="contactUs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
