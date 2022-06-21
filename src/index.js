import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store/store';
import i18n from "i18next";
import i18next from '../src/i18n/config/i18n'

// i18next.t('my.key')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
