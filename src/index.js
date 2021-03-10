import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configJson } from './service/config';

import restApi from "./service/api";

restApi.baseURL = configJson.userUrl;

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
