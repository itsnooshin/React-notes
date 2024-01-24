const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    playLoad: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: 'account/updateName',
    payLoad: fullName,
  };
}
