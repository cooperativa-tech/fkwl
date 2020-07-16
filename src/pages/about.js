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
          <FormattedMessage id="about1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="about2" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="about3" />
        </div>
        <div styleName="textBlock">
        <FormattedMessage id="about4" />,
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="education" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="education1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="activities" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="activities1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="food" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="food1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="health" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="health1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="clothing" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="clothing1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="familySupport" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="familySupport1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="microcredit" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="microcredit1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="microcredit2" />
        </div>
      </Text>
    </>
  );
};

export default IndexPage;
