import { createStore, combineReducers } from 'redux';

// Like useReducer we should create a initualState

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '', // like buy a car house
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposite':
      return { ...state, balance: state.balance + action.playLoad };

    case 'account/withdraw':
      return { ...state, balance: state.balance - action.playLoad };

    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.playLoad.amount,
        loanPurpose: action.playLoad.purpose,
        balance: state.balance + action.playLoad.amount,
      };
    case 'account/payLoadBack':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
    //   throw new Error('') this is implement in useReducer Hook
    // but in redux we say back to original state
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.playLoad.fullName,
        nationalID: action.playLoad.nationalID,
        createdAt: action.playLoad.createdAt,
      };
    case 'customer/updateName':
      return { ...state, fullName: action.payLoad };
    default:
      return state;
  }
}

// store
// combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

function deposite(amount) {
  return { type: 'account/deposite', playLoad: amount };
}
function withdraw(amount) {
  return { type: 'account/withdraw', playLoad: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    playLoad: {
      amount,
      purpose,
    },
  };
}
function payLoan() {
  return { type: 'account/payLoadBack' };
}

store.dispatch(deposite(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'buy a car'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    playLoad: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: 'account/updateName',
    payLoad: fullName,
  };
}
store.dispatch(createCustomer('nooshin', 'er'));
console.log(store.getState());
