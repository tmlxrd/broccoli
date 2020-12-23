// import rerenderEntireTree from './render'
// import stateData from './redux/state'
// import {stateFunc} from './redux/state'
// rerenderEntireTree(stateData,stateFunc)


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
// import Head from './components/head';
// import Body from './components/body';
import store from './redux/store'
import App from './app';
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

