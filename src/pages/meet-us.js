import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import BankDetails from 'root/components/BankDetails';
import SocialDetails from 'root/components/SocialDetails';
import Text from 'root/components/Text';
import Logo from 'root/components/Logo';
import Header from 'root/components/Header';
import { MeetUs } from 'root/components/Gallery';

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
        title="From Kibera With Love"
        description={formatMessage({ id: 'about1' })}
        keywords={formatMessage({ id: 'keywords' })}
      />

      <Header />

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="meetUs" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="meetUs1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="meetUs2" />
        </div>
      </Text>
      <MeetUs />
    </>
  );
};

export default IndexPage;
