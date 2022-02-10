import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from "./appRedux/store"
import {Provider} from "react-redux"
import {IntlProvider} from 'react-intl';
import English from './lang/en.json';

// setting up an I18n package and set up an English locale
const locale = navigator.language;
let lang;
if (locale==="en") {
   lang = English;
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <IntlProvider locale ={locale} messages={English}>
          <App />
        </IntlProvider>,
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
