import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'; //Provider hooks up store and app

//STORE: globalized state
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//ACTION: describes what you want to do- actions[like increent is incrementing an accounter]
//doesnt have to do anything, just need to describe
// const increment = () => {
//   return {
//     type: 'INCREMENT' //name
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT' //name
//   };
// };

// //REDUCER: see how your action affects the store, check what to do
// const counter = (state=0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state +1;
//     case 'DECREMENT':
//       return state -1;
//   }
// };


// let store = createStore(counter);

// //DISPLAY: display it to console
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH: send action to reducer
// store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
