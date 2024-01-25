import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposite, payLoan, requestLoan, withdraw } from './AccountRedux';

function AcoountOperations() {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('USD');

  const dispatch = useDispatch();
  const x = useSelector((state) => state.account);
  console.log(x);
  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposite(depositAmount));
    setDepositAmount('');
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount('');
  }

  function handleRequestLoan() {
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanPurpose('');
    setLoanAmount('');
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollers</option>
            <option value="EUR">Euro</option>
            <option value="GBP">Biritish Pound</option>
          </select>
          <button onClick={handleDeposit}>Deposite {depositAmount}</button>
        </div>
        <div>
          <label>Withdraw</label>
          <input
            type="text"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>
        <div>
          <label htmlFor="">Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input
            type="text"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {x.loan > 0 ? (
          <div>
            <span>
              Pay back ${x.loan} ({x.loanPurpose}){' '}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
export default AcoountOperations;
