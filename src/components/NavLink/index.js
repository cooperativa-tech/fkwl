import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import './index.css';

const NavLink = ({ children, to, id }) => {
  const activeStyleOthers = {
    position: 'relative',
    transform: 'rotate(-5deg)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-grey)',
    boxShadow: '0px 3px 0px 0px var(--color-grey)'
  };

  const activeStyleHelpUs = {
    transform: 'rotate(-5deg)',
    fontWeight: 'bold',
    color: 'var(--color-bright-orange)',
    boxShadow: '0px 3px 0px 0px var(--color-grey)'
  };

  return (
    <>
      {id !== 'helpUs' ? (
        <Link to={to} activeStyle={activeStyleOthers}>
          {children}
        </Link>
      ) : (
        <Link to={to} activeStyle={activeStyleHelpUs}>
          <span styleName="helpUs">{childrenl}</span>
        </Link>
      )}
    </>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default NavLink;
