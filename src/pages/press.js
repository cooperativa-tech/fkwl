import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import BankDetails from 'root/components/BankDetails';
import SocialDetails from 'root/components/SocialDetails';
import Text from 'root/components/Text';
import Logo from 'root/components/Logo';
import Header from 'root/components/Header';

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
          <FormattedMessage id="press" />
        </div>
      </Text>

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JnsMiuS-euc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
};

export default IndexPage;
