import React from 'react';

import { Link } from 'gatsby';
import { FormattedMessage, useIntl } from 'react-intl';

import Logo from '../Logo';
import MobileNav from '../MobileNav';
import NavLink from '../NavLink';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
/* eslint-enable */

import './index.css';

const Header = () => {
  const { locale } = useIntl();

  return (
    <>
      <div styleName="mobileWrapper">
        <MobileNav />
      </div>
      <div styleName="header">
        <div styleName="navbarLinks left">
          <span styleName="marginRigth hide">
            <NavLink to={`${locale === 'pt' ? '/aboutus' : '/en/aboutus'}`}>
              <FormattedMessage id="aboutUs" />
            </NavLink>
          </span>

          <span styleName="hide">
            <NavLink to={`${locale === 'pt' ? '/findus/' : '/en/findus'}`}>
              <FormattedMessage id="findUs" />
            </NavLink>
          </span>
        </div>

        <span styleName="logo hide">
          <Link to="/">
            <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
          </Link>
        </span>

        <div styleName="navbarLinks right">
          <span styleName="marginRigth hide">
            <Link
              to="https://us20.list-manage.com/contact-form?u=2cbdaed2bae12c72704145ae3&form_id=aa9f0dcc695ba93a4b6b1a885a6e14dd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span styleName="blue">
                <FormattedMessage id="contactUs" />
              </span>
            </Link>
          </span>

          <span styleName="marginRigth helpUs">
            <NavLink to={`${locale === 'pt' ? '/helpus/' : '/en/helpus'}`}>
              <span styleName="helpUs">
                <FormattedMessage id="helpUs" />
              </span>
            </NavLink>
          </span>
          <span
            styleName={`hide ${
              locale === 'pt' ? 'intlLinks' : 'intlLinks fade'
            }`}
          >
            <NavLink to="/">
              <FormattedMessage id="pt" />
            </NavLink>
          </span>

          <span styleName="separator hide">/</span>

          <span
            styleName={`hide ${
              locale === 'en' ? 'intlLinks fade' : 'intlLinks '
            } `}
          >
            <NavLink to="/en">
              <FormattedMessage id="en" />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
