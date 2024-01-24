import { createStore, combineReducers } from 'redux';
import accountReducer from './feature/account/AccountRedux';
import customerReducer from './feature/customers/CustomerRedux';
// Like useReducer we should create a initualState

// store
// combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
