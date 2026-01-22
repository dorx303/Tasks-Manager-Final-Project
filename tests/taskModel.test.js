import { createTask, isValidTask } from '../src/models/taskModel.js';

test('createTask returns a valid task', () => {
  const t = createTask('hello');
  expect(typeof t.id).toBe('string');
  expect(t.text).toBe('hello');
  expect(t.completed).toBe(false);
  expect(isValidTask(t)).toBe(true);
});
