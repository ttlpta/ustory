import { applyMiddleware, createStore, compose } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import reducers from '../reducers';

const client = axios.create({
  baseURL: 'http://localhost:6969',
  responseType: 'json',
  timeout: 5000,
});

const axiosMW = axiosMiddleware(client);

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, axiosMW),
);

export default store;