const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '', // like buy a car house
  };


  export default function accountReducer(state = initialStateAccount, action) {
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



 export function deposite(amount) {
    return { type: 'account/deposite', playLoad: amount };
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