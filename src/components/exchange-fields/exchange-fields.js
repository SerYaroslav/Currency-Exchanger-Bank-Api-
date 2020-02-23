import React from "react";

import withBankService  from "../hoc";

import './exchange-fields.scss'

import { connect } from 'react-redux';

import ExhangeFieldsItem from "../exhange-fields-item";

const ExchangeFields = ({ dates, exchangeItems }) => {

  
    return (
      <div className="fields-wrapper">
        {
        dates.map((date, idx) => {
          return <ExhangeFieldsItem date={date} idx={idx} key={idx} />;
        })}
      </div>
    );
};

const mapStateToProps = ({ dates, exchangeItems }) => {
  return { dates, exchangeItems };
};

export default withBankService()(
  connect(mapStateToProps, null)(ExchangeFields)
);