// Task model utilities
// - TASKS_STORAGE_KEY: constant key for LocalStorage
// - createTask(text): returns a new task object with unique id
// - isValidTask(obj): basic runtime validation for stored tasks

export const TASKS_STORAGE_KEY = 'tasks_v1';

function generateId() {
  // Simple unique id suitable for client-only use: timestamp + random suffix
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createTask(text) {
  const trimmed = typeof text === 'string' ? text.trim() : '';
  if (!trimmed) {
    throw new Error('Task text must be a non-empty string');
  }
  return {
    id: generateId(),
    text: trimmed,
    completed: false,
  };
}

export function isValidTask(obj) {
  if (!obj || typeof obj !== 'object') return false;
  if (typeof obj.id !== 'string' || !obj.id) return false;
  if (typeof obj.text !== 'string') return false;
  if (typeof obj.completed !== 'boolean') return false;
  return true;
}

export function normalizeTasksArray(input) {
  if (!Array.isArray(input)) return [];
  return input.filter(isValidTask).map((t) => ({ id: String(t.id), text: String(t.text), completed: Boolean(t.completed) }));
}
