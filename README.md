# Details-Form (React + Vite)

Small React app (Vite) that collects user details via a form and shows them in a table with export options (Excel, PDF).

## Important files

- src/App.jsx

  - Central router and application state.
  - Maintains `data` (array of records) via useState.
  - Creates refs (useRef) for uncontrolled inputs: `firstNameRef`, `lastNameRef`, `emailRef`, `mobRef`, `skillRef`.
  - `handleSubmit`:
    - Prevents default form submit.
    - Reads values from refs.
    - Validates all fields are present and mobile is a 10-digit numeric string.
    - Builds object:
      {
      firstName: string,
      lastName: string,
      email: string,
      mobile: string,
      skills: string[] // produced by `skills.split(',')`
      }
    - Appends the object to `data` state.
    - Clears input values via refs.
    - Navigates to `/excel`.

- src/Pages/Form.jsx

  - Presentational form component that receives props:
    - `handleSubmit` (function)
    - `firstNameRef`, `lastNameRef`, `emailRef`, `mobRef`, `skillRef` (refs)
  - Uses uncontrolled inputs (ref on each input).
  - Fields:
    - First Name, Last Name (text)
    - Email (email)
    - Phone Number (text)
    - Skills (text) — user enters comma-separated values
  - Submits using the provided `handleSubmit`.

- src/Pages/Excel.jsx
  - Receives `data` prop (default empty array).
  - Renders a table (id="detail-table") showing:
    - SNo., Name, Email, Phone, Skills
  - Expects `item.skills` to be an array and maps over it to render badges.
  - Export features:
    - Export to Excel: uses `xlsx` + `file-saver`, converts DOM table to workbook and saves .xlsx.
    - Export to PDF: uses `jspdf` + `jspdf-autotable`, autoTable from HTML table and saves PDF.
  - Buttons:
    - Export to PDF
    - Export to Excel
    - - Add New Data (navigates back to form)

## Data flow summary

1. User fills the form (skills as comma-separated string) and submits.
2. App reads inputs from refs and validates them.
3. Skills string is split by comma into an array and included in the record object.
4. New record appended to `data` state in App.
5. App navigates to `/excel` and Excel.jsx reads `data` to render the table and enable exports.

## Data shape

Each record in `data` is:
{
firstName: string,
lastName: string,
email: string,
mobile: string,
skills: string[] // result of `skills.split(',')`
}

## Dependencies

- react, react-dom
- react-router-dom
- xlsx
- file-saver
- jspdf
- jspdf-autotable
- Tailwind CSS (styling)

## Notes / Gotchas

- Skills are split using `String.prototype.split(',')`. Currently values are not trimmed — consider trimming each skill (e.g., `.map(s => s.trim()).filter(Boolean)`) to avoid leading/trailing spaces or empty entries.
- Excel.jsx expects `item.skills` to be an array. If forward data contains a string, rendering will fail.
- Export-to-Excel uses the DOM table with id `detail-table`. Ensure that element exists in the DOM before exporting.
- Form uses uncontrolled inputs with refs. If you switch to controlled inputs, update App.handleSubmit to read values from component state instead of refs.
- Mobile validation is basic: checks length === 10 and numeric only. Adjust as needed for international numbers or formatting.
