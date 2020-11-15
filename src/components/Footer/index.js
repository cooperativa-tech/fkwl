import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import SocialDetails from 'root/components/SocialDetails';

import Logo from '../Logo';

/* eslint-disable */
import logoNavbar from '!file-loader!../../assets/logoNavbar.svg';
/* eslint-enable */

import './index.css';

const Footer = () => {
  return (
    <div styleName="footer">
      <div styleName="col one">
        <Logo src={logoNavbar} alt="From Kibera With Love Logo" />
      </div>
      <div styleName="col two">
        <div styleName="xsmallSpacing">
          <Link to="/">
            <FormattedMessage id="footerAboutUs" />
          </Link>
        </div>
        <div styleName="xsmallSpacing">
          <Link to="/">
            <FormattedMessage id="footerColFindUs" />
          </Link>
        </div>
      </div>
      <div styleName="col three">
        <div styleName="xsmallSpacing">
          <Link to="/" styleName="xsmallSpacing">
            <span styleName="helpUs">
              <FormattedMessage id="footerColHelpUs" />
            </span>
          </Link>
        </div>
        <div>
          <a href="mailto:hello@fromkiberawithlove.com" styleName="contact">
            <FormattedMessage id="footerColContact" />
          </a>
        </div>
      </div>
      <div styleName="col four">
        <SocialDetails />
      </div>
    </div>
  );
};

export default Footer;
