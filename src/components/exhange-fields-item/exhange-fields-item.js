import React, { useEffect } from "react";

import withBankService from "../hoc";

import { connect } from "react-redux";

import Spinner from "../spinner";

import {
  testFetchRate
} from "../../actions";

import "./exhange-fields-item.scss";

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
  dates
}) => {
  useEffect(() => {
    fetchRate(currencyCode, date, bankService);
  }, [currencyCode, date, bankService, fetchRate]);

  if (loading) {
    return <Spinner />;
  }

  let Sum = (exchangeItems[idx].rate * amount).toFixed(2);
  const item = exchangeItems[idx];
  console.log(`items  ${exchangeItems[idx].settedDate}`);
  console.log(`date   ${dates}`);
  return (
    <div className="date-container">
      <div>{item.name}</div>
      <div>{item.rate.toFixed(3)}</div>
      <div>{item.currencyCode}</div>
      <div>{item.exchangeDate}</div>
      <div className="sum">{` Sum: ${Sum}`}</div>
    </div>
  );
};

const mapStateToProps = ({
  currencyCode,
  amount,
  exchangeItems,
  loading,
  dates
}) => {
  return { currencyCode, amount, exchangeItems, loading, dates };
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