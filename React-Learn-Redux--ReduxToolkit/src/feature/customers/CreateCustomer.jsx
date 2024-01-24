function CreateCustomer() {
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="">Customer full name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">National ID</label>
          <input type="text" />
        </div>
        <button>Create New Customer</button>
      </div>
    </div>
  );
}

export default CreateCustomer;
