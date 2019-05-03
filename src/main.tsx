import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'app/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css';

// prepare store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
