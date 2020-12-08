import React from 'react';
import { Link } from 'gatsby';

import { FormattedMessage, useIntl } from 'react-intl';
import SocialDetails from 'root/components/SocialDetails';

import NavLink from '../../NavLink';

import './index.css';

const Overlay = () => {
  const { locale } = useIntl();
  return (
    <>
      <div styleName="root">
        <div styleName="hamburguer" />

        <div styleName="col two">
          <div styleName="xsmallSpacing">
            <NavLink to={`${locale === 'pt' ? '/aboutus' : '/en/aboutus'}`}>
              <FormattedMessage id="footerColAboutUs" />
            </NavLink>
          </div>
          <div styleName="xsmallSpacing">
            <NavLink to={`${locale === 'pt' ? '/findus/' : '/en/findus'}`}>
              <FormattedMessage id="footerColFindUs" />
            </NavLink>
          </div>
          <div styleName="xsmallSpacing ">
            <Link
              to="https://us20.list-manage.com/contact-form?u=2cbdaed2bae12c72704145ae3&form_id=aa9f0dcc695ba93a4b6b1a885a6e14dd"
              target="_blank"
              rel="noopener noreferrer"
              styleName="xsmallSpacing"
            >
              <span styleName="blue">
                <FormattedMessage id="contactUs" />
              </span>
            </Link>
          </div>
          <div styleName="xsmallSpacing">
            <NavLink to={`${locale === 'pt' ? '/helpus/' : '/en/helpus'}`}>
              <span styleName="orange">
                <FormattedMessage id="footerColHelpUs" />
              </span>
            </NavLink>
          </div>
        </div>
        <div styleName="col three">
          <div styleName="xsmallSpacing">
            <a href="mailto:hello@fromkiberawithlove.com" styleName="contact">
              <span styleName="blue">
                <FormattedMessage id="footerContact" />
              </span>
              <FormattedMessage id="footerContactEmail" />
            </a>
          </div>
          <div styleName="xsmallSpacing">
            <a
              href="mailto:volunteers@fromkiberawithlove.com"
              styleName="contact"
            >
              <span styleName="blue">
                <FormattedMessage id="footerVolunteer" />
              </span>
              <FormattedMessage id="footerVolunteerEmail" />
            </a>
          </div>
          <div styleName="xsmallSpacing">
            <a
              href="mailto:sponsors@fromkiberawithlove.com"
              styleName="contact"
            >
              <span styleName="blue">
                <FormattedMessage id="footerSponsor" />
              </span>
              <FormattedMessage id="footerSponsorEmail" />
            </a>
          </div>
          <div styleName="xsmallSpacing">
            <a href="mailto:tour@fromkiberawithlove.com" styleName="contact">
              <span styleName="blue">
                <FormattedMessage id="footerTour" />
              </span>
              <FormattedMessage id="footerTourEmail" />
            </a>
          </div>
        </div>
        <div styleName="col four">
          <SocialDetails />
        </div>
      </div>
    </>
  );
};

export default Overlay;
