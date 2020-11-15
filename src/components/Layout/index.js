import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import en from 'root/i18n/en';
import pt from 'root/i18n/pt';

import './index.css';
import Footer from '../Footer';

const messages = { en, pt };

function Layout({ children, pageContext }) {
  const locale = pageContext && pageContext.locale;

  if (!locale) {
    return <div styleName="root">{children}</div>;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div styleName="root">{children}</div>
      <div styleName="line" />
      <Footer />
    </IntlProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
