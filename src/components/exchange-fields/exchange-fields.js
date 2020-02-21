import React, { Component, useEffect } from "react";

import withBankService  from "../hoc";

import './exchange-fields'
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ExhangeFieldsItem from "../exhange-fields-item";

import { rateDataLoaded, rateDataRequested, testFetchRate} from "../../actions";

import BankService from '../../bank-service';
import { bindActionCreators } from 'redux';

const ExchangeFields = ({
  dates
}) => {
return(
  dates.map((date, idx) => {
    return <ExhangeFieldsItem date={date} idx={idx} key={idx} />;
  }))
};

const mapStateToProps = ({
  dates,
}) => {
  return {  dates };
};



export default withBankService()(
  connect(mapStateToProps, null)(ExchangeFields)
);