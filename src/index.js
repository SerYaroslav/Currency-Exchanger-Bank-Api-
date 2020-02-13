import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import { ServiceProvider } from './components/service-context';


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider>
        <App />
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
