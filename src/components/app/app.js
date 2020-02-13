import React from 'react';

import './app.scss';

import CurrencySwitcher from '../currency-switcher';
import AmountImput from '../amount-input';


const App = () => {
  return (
    <div className='wrapper'>
      <CurrencySwitcher/>
      <AmountImput/>
    </div>
  )
};

export default App;