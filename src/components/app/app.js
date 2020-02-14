import React from 'react';

import './app.scss';

import CurrencySwitcher from '../currency-switcher';
import AmountImput from '../amount-input';
import DateSwitcher from "../date-switcher";


const App = () => {
  return (
    <div className='wrapper'>
      <CurrencySwitcher/>
      <AmountImput/>
      <DateSwitcher/>
    </div>
  )
};

export default App;