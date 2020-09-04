import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Text from 'root/components/Text';
import Header from 'root/components/Header';
import Gallery from 'root/components/Gallery';
import SEO from 'root/components/SEO';
import Size from 'root/components/Text/size';

/* eslint-disable */
import spiderManAndFriends from '!file-loader!../../assets/photoKidFkwl.jpg';
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

      <div styleName="xlargeSpacing imageWrapper">
        <img
          styleName="image"
          src={spiderManAndFriends}
          alt="kids playing spider man"
        />
      </div>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="findusOne" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="findusTwo" />
        </div>
      </Text>
      <Gallery />
      <div styleName="coloredWrapper orange">
        <Text size={Size.large}>
          <div styleName="coloredSection">
            <FormattedMessage id="findusCta" />
            <br />
            <span styleName="bold">
              <FormattedMessage id="findusEmail" />
            </span>
          </div>
        </Text>
      </div>
    </>
  );
};

export default IndexPage;
