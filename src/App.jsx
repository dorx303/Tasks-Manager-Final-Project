import "./App.css";
import { useState } from "react";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskCounter from "./components/TaskCounter.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Minimal handlers (stage 2 skeletons) — real logic will be added in later stages
  const handleAdd = (text) => {
    // placeholder
  };
  const handleToggle = (id) => {
    // placeholder
  };
  const handleDelete = (id) => {
    // placeholder
  };
  const handleEdit = (id, text) => {
    // placeholder
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
      <TaskCounter count={tasks.filter((t) => !t.completed).length} />
    </div>
  );
}