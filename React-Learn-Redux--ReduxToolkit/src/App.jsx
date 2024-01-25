import BalanceDisplay from './feature/account/BalanceDisplay';
import CreateCustomer from './feature/customers/CreateCustomer';
import Customer from './feature/customers/Customer';
import AcoountOperations from './feature/account/AcoountOperations';
import { useSelector } from 'react-redux';

function App() {
  const userName = useSelector((store) => store.customer.fullName);
  console.log(userName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {userName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AcoountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
