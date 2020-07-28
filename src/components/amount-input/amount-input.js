import React from 'react';

import { connect } from 'react-redux';
import {onAmountChanged} from '../../actions';

import './amount-input.scss';

const AmountImput = ({ amount, onAmountChanged }) => {
  return (
    <div className="amount-wrapper">
      <label htmlFor="amount" className="amount-label">
        Enter the amount:
      </label>
      <input
        type="number"
        value={amount}
        className="amount-input"
        id="amount"
        placeholder="..."
        onChange={e => {
          onAmountChanged(e.target.value);
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ amount }) => {
  return {amount};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAmountChanged: input => dispatch(onAmountChanged(input))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AmountImput);
