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
          <FormattedMessage id="press" />
        </div>
      </Text>
    </>
  );
};

export default IndexPage;
