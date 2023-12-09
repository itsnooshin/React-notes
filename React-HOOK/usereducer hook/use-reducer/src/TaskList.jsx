import { useState } from 'react';

function TaskList({ task, onRemove, onChange }) {
  const [editing, setEditing] = useState('');
  const [SelectedId, setSelectedId] = useState(null);
  return (
    <ul className="ul-list">
      {task.map((list) => (
        <li className="list-item" key={list.id}>
          <div className="inputs">
            {SelectedId === list.id ? (
              <>
                <input
                  type="text"
                  value={editing}
                  onChange={(e) => setEditing(e.target.value)}
                />
                <div>
                  <button className="btn-edit"
                    onClick={() => {
                      onChange(list.id, editing);
                      setSelectedId(null);
                    }}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>{list.items}</p>
                <div>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      setSelectedId(list.id);
                      setEditing(list.items);
                    }}
                  >
                    Edit
                  </button>
                  {''}
                </div>
              </>
            )}
            <button onClick={() => onRemove(list.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
