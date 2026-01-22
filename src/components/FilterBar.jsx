export default function FilterBar({ filter = 'All', onChange }) {
  const options = ['All', 'Active', 'Completed'];
  return (
    <div className="filter-bar">
      {options.map((opt) => (
        <button key={opt} className={opt === filter ? 'active' : ''} onClick={() => onChange?.(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
