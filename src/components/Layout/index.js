import React from 'react';
import PropTypes from 'prop-types';
import SEO from 'root/components/SEO';
import Header from 'root/components/Header';

import './index.css';

function Layout({ children }) {
  return (
    <div styleName="root">
      <SEO title="From Kibera with love" />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Layout;
