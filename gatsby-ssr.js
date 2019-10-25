const React = require('react');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
