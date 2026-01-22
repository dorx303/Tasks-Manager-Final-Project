Task Manager – Development Checklist

[✅]1. Data Model

[✅] Define a task object with:

[✅] id (unique identifier)

[✅] text (task description)

[✅] completed (boolean)

[✅] Define a constant LocalStorage key for tasks

[✅]2. Component Structure (Minimum 4)

[✅] App – holds main state and logic

[✅] TaskInput – adds new tasks

[✅] TaskList – displays filtered tasks

[✅] TaskItem – single task UI and actions

[✅] FilterBar – filter selection UI

[✅] TaskCounter – active task count

[✅]3. State Management

[✅] Use useState for tasks

[✅] Use useState for filter state

[✅] Use useEffect for LocalStorage sync

[✅] Pass data via props only

[✅] Handle updates via callback functions

[✅]4. Add Task

[✅]Input field for task text

[✅] Prevent empty or whitespace-only tasks

[✅] Generate a unique task ID

[✅] Clear input after submission

[✅]5. Toggle Task Completion

[✅] Add checkbox or toggle control

[✅] Update task completion state immutably

6. Edit Task

[✅] Allow switching between view and edit mode

[✅] Save edited text

[✅] Prevent saving empty text

[✅] Preserve task ID

[✅]7. Delete Task

[✅] Add delete button to each task

[✅] Remove task by ID

[✅]8. Filtering

[✅] Implement All / Active / Completed filters

[✅] Highlight the active filter

[✅] Filter tasks in the parent component

[✅] Display only filtered tasks

[✅]9. Active Task Counter

[✅] Count tasks with completed === false

[✅] Update counter on every change

[✅]10. LocalStorage Persistence

[✅] Load tasks from LocalStorage on app mount

[✅] Save tasks to LocalStorage on change

[✅]Handle missing or invalid stored data safely

[✅]11. UI & Usability

[✅] Display message when no tasks exist

[✅] Basic, clear styling

[✅] Keyboard-friendly interactions

[✅]12. Code Quality

[✅] No console errors or warnings

[✅] Functional components only

[✅] No routing libraries

[✅] No external state management libraries

[✅] Clean and readable code

[]13. Bonus (Optional)

[] Clear completed tasks button

[] Unit tests with Vitest + React Testing Library

[]14. README

[] App description

[] Installation and run instructions

[] Component list and responsibilities

[] Known limitations or bugs