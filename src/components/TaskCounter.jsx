export default function TaskCounter({ count = 0 }) {
  return <div className="task-counter">{count} active task{count !== 1 ? 's' : ''}</div>;
}
