# Task Manager — Product Requirements Document (PRD)

Short description
- A single-page React application for creating and managing a personal task list.
- Purpose: teach and demonstrate React fundamentals (components, hooks, props, state, effects, LocalStorage).

Users
- React learners and course reviewers.
- Individuals who want a small client-side task list.

Key goals
- Complete CRUD for tasks with unique IDs.
- Client-side filtering (All / Active / Completed).
- Persist tasks in LocalStorage.
- Clean component architecture and no runtime errors.

Success criteria (must-haves)
- Add, edit, delete tasks.
- Toggle completion and clear completed tasks.
- Filter tasks and highlight active filter.
- Active task counter that updates in real time.
- Tasks persist between browser sessions via LocalStorage.
- App runs with `npm install` and `npm run dev` with no console errors.

Non-goals
- No backend, auth, or routing.
- No external global state libraries.

Technical constraints
- React 19 + Vite
- Functional components only (hooks allowed)
- Small, dependency-minimal project

Primary user flows
1. Add task: user enters text, presses Enter or Add, new task appears (new id, completed=false).
2. Toggle: user clicks checkbox to mark complete/uncomplete.
3. Edit: user opens inline edit, changes text, saves; empty saves disabled.
4. Delete: user removes a task by clicking Delete.
5. Filter: user switches among All/Active/Completed; UI updates.
6. Clear completed: user clicks button to remove all completed tasks.

Data model
- Task: { id: string, text: string, completed: boolean }
- LocalStorage key: `tasks_v1` (JSON array)

Quality & verification
- No ESLint or runtime warnings/errors.
- Build with `npm run build` succeeds.
- Manual smoke test: add/toggle/edit/delete tasks and refresh to check persistence.

Deliverables
- Source code in `src/` with components: App, TaskInput, TaskList, TaskItem, FilterBar, TaskCounter
- `README.md` with run instructions
- `tasks.md` checklist completed

Optional
- Unit tests (Vitest + Testing Library) — not required for the baseline.

Open questions
- Any preferred visual/design constraints (colors, fonts)?
- Anything else to include in README or acceptance tests?

*** End of PRD ***