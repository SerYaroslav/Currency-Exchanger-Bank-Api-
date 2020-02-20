import React, { useEffect } from "react";

import withBankService from "../hoc";

import "./exchange-fields";
import { connect } from "react-redux";

import Spinner from "../spinner";

import {
  testFetchRate
} from "../../actions";

import { bindActionCreators } from "redux";

const ExhangeFieldsItem = ({
  currencyCode,
  dates,
  amount,
  exchangeItems,
  loading,
  error
}) => {
  return (
    <div>
      {exchangeItems[0].name},{exchangeItems[0].rate},
      {exchangeItems[0].currencyCode},{exchangeItems[0].exchangeDate}
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
  connect(mapStateToProps, mapDispatchToProps)(ExhangeFieldsItem)
);