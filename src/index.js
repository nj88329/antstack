import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import store from './store';




console.log('store',store.getState())


console.log('Astore',store.getState())

ReactDOM.render(
  <React.Fragment>
   <Provider store={store}>
     <App store={store}/>
  </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
