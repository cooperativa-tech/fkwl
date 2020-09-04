import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Text from 'root/components/Text';
import Title from 'root/components/Title';
import Cta from 'root/components/Cta';
import Header from 'root/components/Header';
import SEO from 'root/components/SEO';
/* eslint-disable */
import spiderManAndFriends from '!file-loader!../assets/gallery/1.jpg';
/* eslint-enable */

import './index.css';

const IndexPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO
        title="From Kibera With Love"
        description={formatMessage({ id: 'home1' })}
        keywords={formatMessage({ id: 'keywords' })}
      />

      <Header />

      <Text>
        <div styleName="section xl">
          <FormattedMessage id="hello" />,
        </div>
        <div styleName="textBlock">
          <img
            styleName=" image section1"
            src={spiderManAndFriends}
            alt="kids playing spider man"
          />
          <FormattedMessage id="home1" />
        </div>
        <div styleName="textBlock">
          <img
            styleName="image section2"
            src={spiderManAndFriends}
            alt="kids playing spider man"
          />
          <span styleName="coloredText yellow ">
            <FormattedMessage id="coloredTextSection2" />
          </span>
          <FormattedMessage id="home2" />
        </div>
        <div styleName="textBlock">
          <span styleName="coloredText orange">
            <FormattedMessage id="coloredTextSection3" />
          </span>
          <FormattedMessage id="home3" />
        </div>
        <div styleName="textBlock">
          <span styleName="coloredText blue">
            <FormattedMessage id="coloredTextSection4" />
          </span>
          <FormattedMessage id="home4" />
        </div>
        <div styleName="textBlock section xl">
          <span styleName="coloredText red">
            <FormattedMessage id="coloredTextSection5" />
          </span>
          <FormattedMessage id="home5" />
        </div>

        <div styleName="section xxl">
          <Title>
            <FormattedMessage id="title" />
          </Title>
        </div>
      </Text>

      <div styleName="ctaSection">
        <Cta>
          <img
            styleName="image cta"
            src={spiderManAndFriends}
            alt="kids playing spider man"
          />
          <FormattedMessage id="ctaHomePage" />
        </Cta>
      </div>
    </>
  );
};

export default IndexPage;
