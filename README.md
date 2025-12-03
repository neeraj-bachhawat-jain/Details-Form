# Details-Form (React + Vite)

A small React app (Vite) that collects user details in a form and shows them in a table which can be exported to Excel.

## Project structure (important files)

- src/App.jsx
  - Router and app state (data).
  - Holds refs for form inputs and handleSubmit which:
    - reads values from refs,
    - converts skills (comma-separated) into an array,
    - appends the new record to state,
    - clears inputs and navigates to /excel.
- src/Pages/Form.jsx
  - Form UI using uncontrolled inputs with refs passed from App.
  - Fields: firstName, lastName, email, phone (mob), skills (comma-separated).
  - Submits via the handleSubmit prop.
- src/Pages/Excel.jsx
  - Table view of collected data.
  - Renders skills as badges (expects item.skills to be an array).
  - Exports the rendered table to an .xlsx file using xlsx + file-saver.
  - Buttons: "Export to Excel" and "+ Add New Data" (navigates back to form).
  - Table has id="detail-table" (used for export).

## Data flow

1. User fills Form (skills as comma-separated string).
2. App.handleSubmit reads ref values and creates:
   { firstName, lastName, email, mobile, skills: skills.split(',') }
3. New object appended to App's data state and user is routed to /excel.
4. Excel.jsx reads data prop and renders rows; export uses DOM table -> workbook.

## Dependencies

- react, react-dom
- react-router-dom
- xlsx
- file-saver
- Tailwind CSS (used for styling in components)

Install:

```
npm install
npm install react-router-dom xlsx file-saver
```

## Run

```
npm run dev
# build
npm run build
# preview production build
npm run preview
```

## Notes / Gotchas

- Skills must be entered as comma-separated values in the form; App splits by comma into an array.
- Excel.jsx expects item.skills to be an array; rendering will break if it's a plain string.
- Export uses the DOM table (id="detail-table") — ensure table markup is present before exporting.
- Refs are used (uncontrolled inputs); if you convert to controlled inputs, update App.handleSubmit accordingly.
