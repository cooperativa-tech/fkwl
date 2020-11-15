import React, { useState } from 'react';

import NavLink from '../NavLink';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';
import { Link } from 'gatsby';
import Logo from '../Logo';
import Overlay from './Overlay';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
import hamburguer from '!file-loader!../../assets/icons/hamburguer.png';
import closeIcon from '!file-loader!../../assets/icons/closeIcon.png';
/* eslint-enable */

import './index.css';

const Language = () => {
  const { locale } = useIntl();
  return (
    <div>
      <span styleName={`${locale === 'pt' ? 'intlLinks' : 'intlLinks fade'}`}>
        <NavLink to="/">
          <FormattedMessage id="pt" />
        </NavLink>
      </span>

      <span styleName="separator ">/</span>

      <span styleName={`${locale === 'en' ? 'intlLinks fade' : 'intlLinks '} `}>
        <NavLink to="/en">
          <FormattedMessage id="en" />
        </NavLink>
      </span>
    </div>
  );
};

const Helpus = () => {
  const { locale } = useIntl();
  return (
    <NavLink to={`${locale === 'pt' ? '/helpus/' : '/en/helpus'}`}>
      <span styleName="orange">
        <FormattedMessage id="footerColHelpUs" />
      </span>
    </NavLink>
  );
};

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div styleName="nav">
        <div styleName="hamburguer" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <img src={closeIcon} alt="Close Icon" />
          ) : (
            <img src={hamburguer} alt="hamburguer Menu" />
          )}
        </div>
        <div styleName="logoWrapper">
          <div styleName="logo">
            <Link to="/">
              <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
            </Link>
          </div>
          <div styleName="link">{!showMenu ? <Helpus /> : <Language />}</div>
        </div>

        <nav styleName="wrapper">{showMenu && <Overlay />}</nav>
      </div>
    </>
  );
};

export default MobileNav;
