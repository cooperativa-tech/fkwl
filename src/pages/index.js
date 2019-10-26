import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import BankDetails from 'root/components/BankDetails';
import SocialDetails from 'root/components/SocialDetails';
import Text from 'root/components/Text';
import Logo from 'root/components/Logo';
import Header from 'root/components/Header';
import Gallery from 'root/components/Gallery';
import SEO from 'root/components/SEO';

import kids from '../assets/kids.mp4';
/* eslint-disable */
import logo from '!file-loader!../assets/logoFkwl.svg';
/* eslint-enable */

import './index.css';

const IndexPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO
        title="From Kibera with love"
        description={formatMessage({ id: 'home1' })}
        keywords={formatMessage({ id: 'keywords' })}
      />

      <Header contact="Contacta-nos" />
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="hello" />,
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="home1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="home2" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="home3" />
        </div>
      </Text>
      <Gallery />
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="speakWithUs" />
          <p styleName="bold text ">
            <a
              styleName="emailAddress"
              href="mailto:fromkiberawithlove@gmail.com"
            >
              hello@fromkiberawithlove.com
            </a>
          </p>
        </div>
      </Text>
      <Text>
        <FormattedMessage id="donatives" />
      </Text>
      <BankDetails
        nib=" 0065 0921 00292680007 14"
        iban="PT50 006509210029268000714"
        swift="BESZ PT PL"
      />
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="moreInfo" />
        </div>
        <SocialDetails />
        Asante Sana(Muito obrigado),
        <p>From Kibera with Love</p>
      </Text>
      <div styleName="imageSection ">
        <div styleName="logo">
          <Logo src={logo} alt="From Kibera With Love Logo" />
        </div>
        <video muted autoPlay loop styleName="video">
          <source src={kids} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default IndexPage;
