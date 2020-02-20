import React, { Component, useEffect } from "react";

import withBankService  from "../hoc";

import './exchange-fields'
import { connect } from 'react-redux';

import Spinner from '../spinner';

import { rateDataLoaded, rateDataRequested, testFetchRate} from "../../actions";

import BankService from '../../bank-service';
import { bindActionCreators } from 'redux';

/* class ExchangeFields extends Component {
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
} */

/* ------------------------------------------- */
/* const ExchangeFields = ({
  currencyCode,
  dates,
  amount,
  exchangeItems,
  loading,
  error,
  fetchRate,
  bankService
}) => {
  useEffect(() => {
    fetchRate(currencyCode, dates[0], bankService);
    fetchRate(currencyCode, dates[1], bankService);
    console.log(`То шо треба ${exchangeItems[0]}`);
  }, []);
exchangeItems.map(item=>{
  if(item === undefined){
    return <h3>Choose a date</h3>;
  }
  if(loading){
    return <Spinner/>;
  }

  return (
    <div>
      <div>
        {exchangeItems[0].name},{exchangeItems[0].rate},
        {exchangeItems[0].currencyCode},{exchangeItems[0].exchangeDate}
      </div>
      <div>
        {exchangeItems[1].name},{exchangeItems[1].rate},
        {exchangeItems[1].currencyCode},{exchangeItems[1].exchangeDate}
      </div> 
    </div>
  );

})
  if(loading){
    return <Spinner/>;
  }else{return (
          <div>
            {exchangeItems[0].name},
            {exchangeItems[0].rate}, 
            {exchangeItems[0].currencyCode},
            {exchangeItems[0].exchangeDate}
          </div>
        ); }
  
};

const mapStateToProps = ({ currencyCode, dates, amount, exchangeItems, loading, error }) => {
  return { currencyCode, dates, amount, exchangeItems, loading, error };
};

const mapDispatchToProps = daspatch => bindActionCreators({
  fetchRate: testFetchRate
}, daspatch)


export default withBankService()(
  connect(mapStateToProps, mapDispatchToProps)(ExchangeFields)
); */

/* ------------------------------------------- */



const ExchangeFields = ({
  currencyCode,
  dates,
  amount,
  exchangeItems,
  loading,
  error,
  fetchRate,
  bankService
}) => {
  useEffect(() => {
    test()
  }, []);

  const test = () => {
    dates.map(item=>fetchRate(currencyCode, item, bankService))
  }
  const testRender = () =>{

  }
    if (loading) {
      return <Spinner />;
    }
console.log(exchangeItems);
    return (
      <div>
        <div>
          {exchangeItems[0].name},{exchangeItems[0].rate},
          {exchangeItems[0].currencyCode},{exchangeItems[0].exchangeDate}
        </div>
        {/* <div>
          {exchangeItems[1].name},{exchangeItems[1].rate},
          {exchangeItems[1].currencyCode},{exchangeItems[1].exchangeDate}
        </div> */}
        {/*  
        <div>
          {exchangeItems[2].name},{exchangeItems[2].rate},
          {exchangeItems[2].currencyCode},{exchangeItems[2].exchangeDate}
        </div> */}
      </div>
    );
};

const mapStateToProps = ({
  currencyCode,
  dates,
  amount,
  exchangeItems,
  loading,
  error
}) => {
  return { currencyCode, dates, amount, exchangeItems, loading, error };
};

const mapDispatchToProps = daspatch =>
  bindActionCreators(
    {
      fetchRate: testFetchRate
    },
    daspatch
  );

export default withBankService()(
  connect(mapStateToProps, mapDispatchToProps)(ExchangeFields)
);