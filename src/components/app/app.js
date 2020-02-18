import React from 'react';

import './app.scss';

import CurrencySwitcher from '../currency-switcher';
import AmountImput from '../amount-input';
import DateSwitcher from "../date-switcher";
import ExchangeFields from '../exchange-fields';


const App = () => {
  return (
    <div className="wrapper">
      <CurrencySwitcher />
      <AmountImput />
      <DateSwitcher />
      <ExchangeFields />
    </div>
  );
};

export default App;