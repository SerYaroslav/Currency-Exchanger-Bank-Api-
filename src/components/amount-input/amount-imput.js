import React from 'react';

import { connect } from 'react-redux';
import {onAmountChanged} from '../../actions';


const AmountImput = ({ amount, onAmountChanged }) => {
  return <input type="number" value={amount} onChange={e => {
    console.log(amount);
    onAmountChanged(e.target.value)}} />;
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