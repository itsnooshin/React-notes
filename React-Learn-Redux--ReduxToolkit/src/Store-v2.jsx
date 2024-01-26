import { createStore, combineReducers, applyMiddleware } from 'redux';
import accountReducer from './feature/account/AccountRedux';
import customerReducer from './feature/customers/CustomerRedux';
import { thunk } from 'redux-thunk';
// Like useReducer we should create a initualState
import { composeWithDevTools } from 'redux-devtools-extension';
// add redux toolkit
// import { configureStore } from '@reduxjs/toolkit';
// store
// combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// This is classical Writhing Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
