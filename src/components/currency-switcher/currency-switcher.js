import React from 'react';

import {connect} from 'react-redux';

import {onCurrencyChanged} from "../../actions";

import './currency-switcher.scss';

const CurrencySwitcher =({ onCurrencyChanged, currencyCode }) => {
    
  const currencyes = ["USD", "EUR", "GBP", "PLN"];
  
  return(
  <form>
    {
      currencyes.map((cc)=>{
        return (
          <div className="form-check" key={cc}>
            <label>
              <input
                type="radio"
                name="currency"
                value={cc}
                defaultChecked={currencyCode === cc}
                onChange={changeEvent =>
                  onCurrencyChanged(changeEvent.target.value)
                }
                className="form-check-input"
              />
              {cc}
            </label>
          </div>
        );
      })
    }
  </form>
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