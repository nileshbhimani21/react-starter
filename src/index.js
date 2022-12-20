import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import * as _redux from "./redux/index";
import axios from "axios";

const { PUBLIC_URL } = process.env;

_redux.setupAxios(axios, store);

ReactDOM.render(<App store={store} basename={PUBLIC_URL} />, document.getElementById('root'));