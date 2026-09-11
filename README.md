# My CV - React Assignment

Web Design II assignment. A one page CV website made with React.

## How to run it

```
npm install
npm run dev
```

Then open http://localhost:5173 in the browser.

To make the final files for submission:

```
npm run build
```

## What is inside

- `src/App.jsx` - the main component, it has the useState, the useEffect and the button functions
- `src/components/` - Header, Profile, Contact, Education, Skills, Experience, Projects, References, Footer
- `src/data/cvData.js` - all my CV information
- `src/App.css` and `src/index.css` - the styles

## What it does

- The menu at the top jumps to each section.
- The Show/Hide Skills and Show/Hide References buttons use useState.
- useEffect changes the browser tab title when the page opens.
- The Download CV button uses `window.print()`, then I choose Save as PDF.
