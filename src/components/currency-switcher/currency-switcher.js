import React, { Component } from 'react';

import {connect} from 'react-redux';

import {onCurrencyChanged} from "../../actions";

import './currency-switcher.scss';

class CurrencySwitcher extends Component {
  state = {
    selectedOption: "option1"
  };
  handleOptionChange = changeEvent => {
    console.log(changeEvent.target.value);
  };

  render() {
    const { onCurrencyChanged, currencyCode } = this.props;
    return (
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="currency"
              value="USD"
              checked={currencyCode === "USD"}
              onChange={changeEvent =>
                onCurrencyChanged(changeEvent.target.value)
              }
              className="form-check-input"
            />
            USD
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="currency"
              value="EUR"
              checked={currencyCode === "EUR"}
              onChange={changeEvent =>
                onCurrencyChanged(changeEvent.target.value)
              }
              className="form-check-input"
            />
            EUR
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="currency"
              value="GBP"
              checked={currencyCode === "GBP"}
              onChange={changeEvent =>
                onCurrencyChanged(changeEvent.target.value)
              }
              className="form-check-input"
            />
            GBP
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="currency"
              value="PLN"
              checked={currencyCode === "PLN"}
              onChange={changeEvent =>
                onCurrencyChanged(changeEvent.target.value)
              }
              className="form-check-input"
            />
            PLN
          </label>
        </div>
      </form>
    );
  }
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