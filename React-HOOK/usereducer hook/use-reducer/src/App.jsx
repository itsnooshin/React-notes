import { useReducer } from 'react';
/* const [state, dispatch] = useReducer(reducer, initialArg, init?) */

const initalState = {
  count: 0,
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 };
    case 'dec': {
      const newCount = state.count - 1;
      const isError = newCount < 0;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? 'Minimum is reached' : null,
      };
    }

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  const { count } = state;

  return (
    <div>
      <p>Count :{count}</p>
      {state.error && <p className="error-text">{state.error}</p>}
      <div className="btn">
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      </div>
    </div>
  );
}

export default App;
