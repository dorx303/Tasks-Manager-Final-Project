import { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onEdit?.(task.id, trimmed);
    setEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle?.(task.id)} />
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={save}>Save</button>
          <button onClick={() => { setEditing(false); setText(task.text); }}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete?.(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
