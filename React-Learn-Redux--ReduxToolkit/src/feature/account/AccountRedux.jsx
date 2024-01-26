const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '', // like buy a car house
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposite':
      return { ...state, balance: state.balance + action.playLoad , isLoading :false };

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
    case 'account/convertCurreny':
      return { ...state, isLoading: true };
    default:
      return state;
    //   throw new Error('') this is implement in useReducer Hook
    // but in redux we say back to original state
  }
}

export function deposite(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposite', playLoad: amount };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: 'account/convertCurreny' });
      //API call
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      if (!res.ok) {
        throw new Error('Response Network was not ok');
      }

      const data = await res.json();
      const converted = data.rates.USD;
      console.log(data);
      dispatch({ type: 'account/deposite', playLoad: converted });
    } catch (Error) {
      console.log(Error);
    }

    // return action
  };
}
export function withdraw(amount) {
  return { type: 'account/withdraw', playLoad: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    playLoad: {
      amount,
      purpose,
    },
  };
}
export function payLoan() {
  return { type: 'account/payLoadBack' };
}
