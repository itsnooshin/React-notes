function formatNumber(value) {
  const newNumber = Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
  return newNumber;
}

function BalanceDisplay() {
  return <div className="balance">{formatNumber(123456)}</div>;
}

export default BalanceDisplay;
