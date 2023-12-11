import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: action.id, items: action.items, done: false }];

    case 'DELETE_ITEM':
      return state.filter((list) => list.id !== action.id);
    case 'CHANGE_ITEM':
      return state.map((task) =>
        task.id === action.id ? { ...task, items: action.items } : task
      );

    default:
      throw Error('Unknown action: ' + action.type);
  }
}

function AppList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddTask(newItem) {
    dispatch({ type: 'ADD_ITEM', id: Date.now(), items: newItem });
  }

  function handleRemoveTask(id) {
    dispatch({ type: 'DELETE_ITEM', id: id });
  }
  function handleChangeTask(id, editing) {
    dispatch({ type: 'CHANGE_ITEM', items: editing, id: id });
  }

  return (
    <div>
      <h1>Todo App with React useReducer</h1>
      <AddTask AddHandle={handleAddTask} />
      <TaskList
        task={state}
        onRemove={handleRemoveTask}
        onChange={handleChangeTask}
      />
    </div>
  );
}

export default AppList;
