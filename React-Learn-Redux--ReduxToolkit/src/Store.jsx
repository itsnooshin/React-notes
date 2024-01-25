import { createStore, combineReducers, applyMiddleware } from 'redux';
import accountReducer from './feature/account/AccountRedux';
import customerReducer from './feature/customers/CustomerRedux';
import { thunk } from 'redux-thunk';
// Like useReducer we should create a initualState

// store
// combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer , applyMiddleware(thunk));
