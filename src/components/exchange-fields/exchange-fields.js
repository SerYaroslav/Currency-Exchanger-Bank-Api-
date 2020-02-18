import React, { Component, useEffect } from "react";

import withBankService  from "../hoc";

import './exchange-fields'
import { connect } from 'react-redux';

import Spinner from '../spinner';

import { rateDataLoaded, rateDataRequested, testFetchRate} from "../../actions";

import BankService from '../../bank-service';
import { bindActionCreators } from 'redux';

class ExchangeFields extends Component {
  componentWillMount() {
    const {
      fetchRate,
      bankService,
      dates,
      exchangeItems,
      currencyCode
    } = this.props;
    console.log(dates, exchangeItems);
    fetchRate(currencyCode, dates, bankService);
    console.log(dates, exchangeItems);
  }
  useEffect(() => {document.title = `You clicked ${count} times`;})
  useEffect(() => {
    const {
      fetchRate,
      bankService,
      dates,
      exchangeItems,
      currencyCode
    } = this.props;
    if (
      this.props.currencyCode !== prevProps.currencyCode ||
      this.props.dates !== prevProps.dates ||
      this.props.exchangeItems !== prevProps.exchangeItems
    ) {
      console.log(dates, exchangeItems);
      fetchRate(currencyCode, dates, bankService);
      console.log(dates, exchangeItems);
    }
  })

  render() {
    const {
      currencyCode,
      dates,
      amount,
      exchangeItems,
      loading,
      error
    } = this.props;
    return (
      <div>
        {currencyCode}
        {exchangeItems}
      </div>
    );
  }
}

const mapStateToProps = ({ currencyCode, dates, amount, exchangeItems, loading, error }) => {
  return { currencyCode, dates, amount, exchangeItems, loading, error };
};

const mapDispatchToProps = daspatch => bindActionCreators({
  fetchRate: testFetchRate
}, daspatch)


export default withBankService()(
  connect(mapStateToProps, mapDispatchToProps)(ExchangeFields)
);