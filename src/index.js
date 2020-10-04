import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from "./reducers";


// creating store and passing reducer as movies 
const store = createStore(movies);
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log('After State',store.getState());
ReactDOM.render(
  <React.StrictMode>
  //app can take the movies from the store 
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

