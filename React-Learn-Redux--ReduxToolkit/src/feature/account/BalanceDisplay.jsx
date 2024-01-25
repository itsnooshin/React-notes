import { useSelector } from 'react-redux';

function formatNumber(value) {
  const newNumber = Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
  return newNumber;
}

function BalanceDisplay() {
  const display = useSelector((store) => store.account.balance);
  console.log(display);

  return <div className="balance">{formatNumber(display)}</div>;
}

export default BalanceDisplay;
