import React from 'react';
import Layout from './src/components/Layout';

require('./src/styles/reset.css');

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }

  if (typeof Map === 'undefined') {
    await import('core-js/es6/map');
  }

  if (typeof Set === 'undefined') {
    await import('core-js/es6/set');
  }

  if (typeof window.requestAnimationFrame === 'undefined') {
    import('raf/polyfill');
  }

  await import('babel-polyfill');
};

export const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
