import BalanceDisplay from './feature/account/BalanceDisplay';
import CreateCustomer from './feature/customers/CreateCustomer';
import Customer from './feature/customers/Customer';
import AcoountOperations from './feature/account/AcoountOperations';

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
     <AcoountOperations/>
      <BalanceDisplay />
    </div>
  );
}

export default App;
