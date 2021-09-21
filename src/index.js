import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import reduxStore from "./store/reduxStore";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './App.scss'

ReactDOM.render(
    <Provider store={reduxStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider >,
  document.getElementById('root')
);
reportWebVitals();
