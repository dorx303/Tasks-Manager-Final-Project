Task Manager Application (React)
1. Product Overview

The Task Manager application is a single-page React application that allows users to manage a personal list of tasks.
The goal of this project is to demonstrate understanding of core React concepts, including component architecture, state management, props, hooks, event handling, and data persistence using the browser’s LocalStorage.

This project is developed as a final assignment for a React course and must strictly follow the provided technical and functional requirements.

2. Goals & Objectives

Implement a fully functional task management application

Demonstrate correct React component design and data flow

Persist application state between browser sessions

Maintain clean, readable, and maintainable code

Ensure the application runs without errors or warnings

3. Target Users

React beginners and students

Users who need a simple, client-side task list application

4. In Scope

Create, read, update, and delete tasks

Filter tasks by completion status

Persist tasks using LocalStorage

Display the number of active (uncompleted) tasks

Use React functional components and hooks only

5. Out of Scope

Backend or server-side logic

Authentication or user accounts

Routing between pages

External state management libraries (Redux, Zustand, etc.)

External routing libraries

6. Functional Requirements
6.1 Task Management

The application must support the following task operations:

Add a new task with a text description

Toggle a task between completed and not completed

Edit the text of an existing task

Delete a task

Each task must have a unique identifier

6.2 Task Filtering

The application must support three filter states:

All – display all tasks

Active – display only tasks that are not completed

Completed – display only completed tasks

Additional requirements:

The currently selected filter must be visually highlighted

Filtering must be handled on the client side

6.3 Data Persistence (LocalStorage)

Tasks must be saved to LocalStorage whenever they change

On application load:

If saved tasks exist, they must be restored into state

If no saved data exists, the task list starts empty

Data must be stored as JSON strings

6.4 Active Task Counter

Display the number of active (not completed) tasks

The counter must update in real time when tasks change

7. Technical Requirements
7.1 Technologies

React 19

Vite as the build tool

Functional components only (no class components)

React Hooks (useState, useEffect)

LocalStorage for persistence

CSS, CSS Modules, or a CSS framework (developer’s choice)

7.2 Component Architecture

The application must contain at least 4 meaningful components with clear separation of responsibilities.

Recommended structure:

App – main state management and application logic

TaskInput – user input for adding new tasks

TaskList – renders the list of tasks based on the active filter

TaskItem – renders a single task with actions

FilterBar – controls task filtering

TaskCounter – displays number of active tasks

7.3 State Management & Data Flow

The main task list state must be stored in a parent component

State is passed down via props

Events and updates flow upward via callback props

No external state management libraries may be used

8. Non-Functional Requirements

No React errors or warnings in the console

Clean, readable, and consistently formatted code

Meaningful variable and component names

No business logic inside JSX

Application must run successfully with:

npm install
npm run dev

9. Optional Bonus Features

Unit Tests: Write tests for at least two components using Vitest and React Testing Library

Clear Completed Tasks: Add a button to remove all completed tasks at once

10. Success Criteria

All required features are implemented correctly

Tasks persist between page refreshes

Component structure follows React best practices

The developer can explain all code during review.