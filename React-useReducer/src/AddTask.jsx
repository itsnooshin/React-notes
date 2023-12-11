import { useState } from 'react';

function AddTask({ AddHandle }) {
  const [text, setText] = useState('');
  return (
    <div className="addTask">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task..."
      />
      <button
        onClick={() => {
          setText('');
          AddHandle(text);
        }}
      >
        +
      </button>
    </div>
  );
}

export default AddTask;
