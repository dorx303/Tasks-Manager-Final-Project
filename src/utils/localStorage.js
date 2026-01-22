import { TASKS_STORAGE_KEY, normalizeTasksArray } from '../models/taskModel.js';

export function loadTasksFromStorage() {
  try {
    const raw = localStorage.getItem(TASKS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return normalizeTasksArray(parsed);
  } catch (err) {
    // If data is invalid or parsing fails, return empty list
    console.warn('Failed to load tasks from LocalStorage, starting empty.', err);
    return [];
  }
}

export function saveTasksToStorage(tasks) {
  try {
    const serial = JSON.stringify(tasks);
    localStorage.setItem(TASKS_STORAGE_KEY, serial);
  } catch (err) {
    console.error('Failed to save tasks to LocalStorage', err);
  }
}
