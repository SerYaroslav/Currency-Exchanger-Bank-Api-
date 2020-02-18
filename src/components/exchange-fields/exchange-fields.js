import React, { Component } from 'react';

import withBankService  from "../hoc";

import './exchange-fields'
import { connect } from 'react-redux';

import Spinner from '../spinner';

import { rateDataLoaded, rateDataRequested,} from "../../actions";

import BankService from '../../bank-service';

class ExchangeFields extends Component {
   componentDidMount() {
    /* const { bankService } = this.props;
    const { currencyCode, dates, amount, exchangeItems } = this.props;
    
    
  bankService
    .getRate("EUR", "today")
    .then(data => rateDataLoaded(data))
    .then(data => console.log(data));  */
    this.updateRate()
  }
  
  testBankService = new BankService();

  updateRate = () => {
    this.testBankService
      .getRate("EUR", "today")
      .then(rateDataLoaded());
  }
  
  testFunc=(data)=>{
    return data;
  }

  render() {
    const { currencyCode, dates, amount, exchangeItems, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }
    console.log(exchangeItems);
    console.log(currencyCode);
    console.log(dates);
    console.log(amount);
    console.log(loading);
    return <div>{this.testFunc('test')}</div>;
  }
}

const mapStateToProps = ({
  currencyCode,
  dates,
  amount,
  exchangeItems,
  loading
}) => {
  return {
    currencyCode,
    dates,
    amount,
    exchangeItems,
    loading
  };
};


const mapDispatchToProps = dispatch => {
  return {
    rateDataRequested,
    rateDataLoaded: data => dispatch(rateDataLoaded(data))
  };
  
};



export default withBankService()(connect(mapStateToProps,mapDispatchToProps)(ExchangeFields));