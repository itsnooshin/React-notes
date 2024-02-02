import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '', // like buy a car house
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    deposite(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.loan;
      state.loanPurpose = '';
      state.balance = state.balance - state.loan;
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

export function deposite(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };

  return async function (dispatch, getState) {
    try {
      dispatch({ type: 'account/convertingCurrency' });
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      if (!res.ok) {
        throw new Error('Response Network was not ok');
      }
      const data = await res.json();
      const converted = data.rates.USD;
 
      dispatch({ type: 'account/deposite', payload: converted });
    } catch (error) {
      console.log('Error');
    }
  };
}
