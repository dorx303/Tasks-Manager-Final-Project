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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
