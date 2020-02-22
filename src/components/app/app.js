import React from 'react';

import './app.scss';

import CurrencySwitcher from '../currency-switcher';
import AmountInput from '../amount-input';
import DateSwitcher from "../date-switcher";
import ExchangeFields from '../exchange-fields';


const App = () => {
  return (
    <div className="wrapper">
      <div className="header-row">
        <CurrencySwitcher />
        <AmountInput />
      </div>
      <div className="body-row">
        <DateSwitcher />
        <ExchangeFields />
      </div>
    </div>
  );
};

export default App;