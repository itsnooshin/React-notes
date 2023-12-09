import { useReducer } from 'react';
/* const [state, dispatch] = useReducer(reducer, initialArg, init?) */

const initalState = {
  // count: 0,
  // error: null,
  age: 42,
  name: 'Taylor',
};
function reducer(state, action) {
  switch (action.type) {
    // case 'inc':
    //   return { ...state, age: state.count + 1 };
    case 'dec': {
      const newCount = state.count - 1;
      const isError = newCount < 0;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? 'Minimum is reached' : null,
      };
    }

    case 'change_name':
      return { ...state, name: action.name };
    case 'inc':
      return { ...state, age: state.age + 1 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  const { age, name } = state;

  return (
    <div>
      {/* <p>Count :{count}</p> */}
      <input
        type="text"
        value={name}
        onChange={(e) =>
          dispatch({ type: 'change_name', name: e.target.value })
        }
      />
      {/* {state.error && <p className="error-text">{state.error}</p>}
      <div className="btn">
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      </div> */}
      <button onClick={() => dispatch({ type: 'inc' })}>Increment age</button>
      <p>
        {' '}
        Hello, {state.name} is {state.age} years old
      </p>
    </div>
  );
}

export default App;
