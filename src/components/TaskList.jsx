import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks = [], onToggle, onDelete, onEdit }) {
  if (!tasks || tasks.length === 0) {
    return <p className="empty">No tasks yet.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}
