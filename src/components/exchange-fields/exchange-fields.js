import React from "react";

import withBankService  from "../hoc";

import './exchange-fields.scss'

import { connect } from 'react-redux';

import ExhangeFieldsItem from "../exhange-fields-item";

const ExchangeFields = ({dates}) => {

  return (
    <div className="fields-wrapper">
      {
      dates.map((date, idx) => {
        return <ExhangeFieldsItem date={date} idx={idx} key={idx} />;
      })
      }
    </div>
  );
};

const mapStateToProps = ({
  dates,
}) => {
  return {  dates };
};

export default withBankService()(
  connect(mapStateToProps, null)(ExchangeFields)
);