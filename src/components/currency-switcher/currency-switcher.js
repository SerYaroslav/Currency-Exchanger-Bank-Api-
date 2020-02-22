import React from 'react';

import {connect} from 'react-redux';

import {onCurrencyChanged} from "../../actions";

import './currency-switcher.scss';

const CurrencySwitcher =({ onCurrencyChanged, currencyCode }) => {
    
  const currencyes = ["USD", "EUR", "GBP", "PLN"];
  
  return(
    <div className="radio-wrapper">
      {
        currencyes.map((cc)=>{
          return (
            <div key={cc} className="radio-container">
              <input
                type="radio"
                id={cc}
                name="currency"
                value={cc}
                defaultChecked={currencyCode === cc}
                onChange={changeEvent =>
                  onCurrencyChanged(changeEvent.target.value)
                }
                className="form-radio"
              />
              <label htmlFor={cc} className="form-radio-label">
                {cc}
              </label>
            </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = ({ currencyCode }) =>{
  return {currencyCode}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrencyChanged: currencyCode => dispatch(onCurrencyChanged(currencyCode))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);