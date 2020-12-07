import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useIntl } from 'react-intl';

/* eslint-disable */
import arrow from '!file-loader!../../assets/arrowIcon.svg';
/* eslint-enable */
import './index.css';

const Cta = ({ children }) => {
  const { locale } = useIntl();
  return (
    <>
      <div styleName="root">
        <div styleName="text">{children}</div>
        <div styleName="imageContainer">
          <Link to={`${locale === 'pt' ? '/helpus/' : '/en/helpus'}`}>
            <img styleName="image" src={arrow} alt="arrowIcon" />
          </Link>
        </div>
      </div>
    </>
  );
};

Cta.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string
};

export default Cta;
