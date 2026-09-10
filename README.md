# Online Curriculum Vitae — React.js

Individual Assignment 2, Web Design II (DIWP3110)
Diploma in Software Engineering and Multimedia
Limkokwing University of Creative Technology

A single page professional CV built with React.js, JSX and plain CSS. No backend, no
database and no extra libraries.

## Run the project

```bash
npm install
npm run dev      # opens on http://localhost:5173
npm run build    # creates the dist folder for submission
```

## Sections

Header, Profile, Contact Information, Education, Skills, Work Experience, Projects,
References and Footer.

## Assignment requirements

- **Components and JSX** — nine components in `src/components/`.
- **Props and composition** — `App.jsx` imports the data from `src/data/cvData.js` and
  passes it to each component as props.
- **useState** — `showSkills` and `showReferences` in `App.jsx`.
- **useEffect** — sets the browser tab title to "My CV - Tiisetso Rannyama" when the
  application loads.
- **Event handling and DOM** — Show/Hide Skills, Show/Hide References and Print CV
  (`window.print()`).
- **Responsive CSS** — CSS Grid and a media query at 700px.
- **Navigation** — links in the header scroll to each section.

See [GUIDE.md](GUIDE.md) for a full beginner explanation of every file, where props,
useState and useEffect are used, how the buttons work, and the setup, build and GitHub
instructions.
