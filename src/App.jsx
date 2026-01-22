import "./App.css";
import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskCounter from "./components/TaskCounter.jsx";
import { createTask, normalizeTasksArray } from "./models/taskModel.js";
import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";

export default function App() {
  const [tasks, setTasks] = useState(() => normalizeTasksArray(loadTasksFromStorage()));
  const [filter, setFilter] = useState("All");

  // Save tasks whenever they change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  // Handlers passed down to child components
  const handleAdd = (text) => {
    try {
      const t = createTask(text);
      setTasks((prev) => [t, ...prev]);
    } catch (err) {
      // invalid input - ignore
      console.warn(err.message);
    }
  };

  const handleToggle = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (id, text) => {
    const trimmed = typeof text === 'string' ? text.trim() : '';
    if (!trimmed) return;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t)));
  };

  // Apply filter in parent and pass filtered list down
  const filteredTasks = tasks.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
      <TaskCounter count={tasks.filter((t) => !t.completed).length} />
    </div>
  );
}