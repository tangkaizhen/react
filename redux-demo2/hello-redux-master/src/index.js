import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

// store.subscribe(() => console.log("State updated!", store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
}

registerServiceWorker();
