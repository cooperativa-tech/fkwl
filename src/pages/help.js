import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Text from 'root/components/Text';
import Header from 'root/components/Header';

import SEO from 'root/components/SEO';

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
          <FormattedMessage id="help" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="help1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="sponsoring" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="sponsoring1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="donations" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="donations1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="donations2" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="volunteering" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="volunteering1" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="volunteering2" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="volunteeringPortugal" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="volunteeringPortugal1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="partners" />
        </div>
      </Text>
      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="partners1" />
        </div>
      </Text>

      <Text>
        <div styleName="textBlock">
          <FormattedMessage id="questions" />
        </div>
      </Text>
    </>
  );
};

export default IndexPage;
