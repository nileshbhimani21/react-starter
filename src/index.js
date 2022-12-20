import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import * as _redux from "./redux/index";
import axios from "axios";
import { Provider } from 'react-redux';

const { PUBLIC_URL } = process.env;

_redux.setupAxios(axios, store);

ReactDOM.render(<Provider store={store}><App basename={PUBLIC_URL} /></Provider>, document.getElementById('root'));