# Task Manager (React + Vite)

Small single-page task manager built with React (functional components + hooks) and Vite.

Features implemented
- Create, edit, delete tasks
- Toggle completion
- Filter (All / Active / Completed)
- Persist tasks to LocalStorage
- Active task counter
- Clear completed tasks

Tech
- React 19, Vite

Getting started
1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

Project structure
- `src/components/` - UI components (TaskInput, TaskList, TaskItem, FilterBar, TaskCounter)
- `src/models/taskModel.js` - task factory, validation and storage key
- `src/utils/localStorage.js` - safe load/save helpers
- `src/App.jsx` - app state, handlers, and wiring

Notes / Limitations
- This is a client-side demo app (no backend). LocalStorage is used for persistence.
- No authentication or multi-user support.
- Tests were intentionally not included in the final deliverable (optional).

If you want further changes (add tests, accessibility improvements, or CI), tell me which item to do next.

## Project Notes
- Built with React 19 using functional components and hooks only.
- No external state management or routing libraries were used.
