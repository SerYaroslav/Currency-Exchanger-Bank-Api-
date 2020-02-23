import React, { useEffect } from "react";

import withBankService from "../hoc";

import { connect } from "react-redux";

import Spinner from "../spinner";

import { testFetchRate, unMountExchItem } from "../../actions";

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
    fetchRate(currencyCode, date, bankService)
    return function cleanup() {
      return unMountExchItem(date);
    };
  }, [currencyCode, date, bankService, fetchRate]);

  if (loading) {
    return (
    <div className="date-container">
      <Spinner />
    </div>
    )
  }

  const item = exchangeItems.find(item => item.settedDate === date);
  let Sum = (item.rate * amount).toFixed(2);

  
    return (
      <div className="date-container">
        <div>{`Currency: ${item.currencyCode}`}</div>
        <div>{`Rate: ${item.rate.toFixed(3)}`}</div>
        <div>{`Date: ${item.exchangeDate}`}</div>
        <div className="sum">{` HRN: ${Sum}`}</div>
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
      fetchRate: testFetchRate,
      unMountExchItem
    },
    daspatch
  );

export default withBankService()(
  connect(mapStateToProps, mapDispatchToProps)(ExhangeFieldsItem)
);