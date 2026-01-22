import { useEffect, useRef, useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const inputRef = useRef(null);

  // Keep local text in sync if task prop changes externally
  useEffect(() => {
    setText(task.text);
  }, [task.text]);

  // Focus input when entering edit mode
  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus();
  }, [editing]);

  const save = () => {
    const trimmed = text.trim();
    if (!trimmed) return; // prevent empty saves
    onEdit?.(task.id, trimmed);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") {
      setEditing(false);
      setText(task.text);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle?.(task.id)} />
      {editing ? (
        <>
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Edit task"
          />
          <button onClick={save} disabled={!text.trim()}>
            Save
          </button>
          <button
            onClick={() => {
              setEditing(false);
              setText(task.text);
            }}
          >
            Cancel
          </button>
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
