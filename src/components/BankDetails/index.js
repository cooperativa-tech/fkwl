import React from 'react';
import PropTypes from 'prop-types';
import Text from 'root/components/Text';

import './index.css';

const BankDetails = ({ nib, iban, swift }) => {
  return (
    <Text>
      <div styleName="textBlock">
        <div styleName="bankDetail">
          <span styleName="bold"> NIB: </span>
          {nib}
        </div>
        <div styleName="bankDetail">
          <span styleName="bold"> IBAN: </span>
          {iban}
        </div>
        <div styleName="bankDetail">
          <span styleName="bold"> SWIFT/BIC: </span>
          {swift}
        </div>
      </div>
    </Text>
  );
};

BankDetails.propTypes = {
  nib: PropTypes.string.isRequired,
  iban: PropTypes.string.isRequired,
  swift: PropTypes.string.isRequired
};

export default BankDetails;
