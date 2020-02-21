import React, { useEffect } from "react";

import withBankService from "../hoc";

import { connect } from "react-redux";

import Spinner from "../spinner";

import {
  testFetchRate
} from "../../actions";

import { bindActionCreators } from "redux";

const ExhangeFieldsItem = ({
  currencyCode,
  amount,
  exchangeItems,
  loading,
  fetchRate,
  bankService,
  idx,
  date,
}) => {
  useEffect(() => {
    fetchRate(currencyCode, date, bankService);
  }, []);
  
  if (loading) {
    return <Spinner />;
  }

  let Sum = (exchangeItems[idx].rate * amount).toFixed(2);
  const item = exchangeItems[idx];
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.rate}</div>
      <div>{item.currencyCode}</div>
      <div>{item.exchangeDate}</div>
      <div>{` Sum: ${Sum}`}</div>
    </div>
  );
};

const mapStateToProps = ({
  currencyCode,
  amount,
  exchangeItems,
  loading,
}) => {
  return { currencyCode, amount, exchangeItems, loading };
};

const mapDispatchToProps = daspatch =>
  bindActionCreators(
    {
      fetchRate: testFetchRate
    },
    daspatch
  );

export default withBankService()(
  connect(mapStateToProps, mapDispatchToProps)(ExhangeFieldsItem)
);