# Online Curriculum Vitae (React.js)

Individual Assignment 2 — Web Design II (DIWP3110), Diploma in Software Engineering and Multimedia, Limkokwing University of Creative Technology.

A professional online CV built with React.js functional components and JSX.

## Running the project

```bash
npm install
npm run dev      # start the development server (http://localhost:5173)
npm run build    # production build
npm run lint     # lint the source files
```

## Project structure

```
src/
  App.jsx                 application shell, state and hooks
  App.css                 layout, component and print styles
  index.css               theme variables (light/dark) and base styles
  data/cvData.js          all CV content (profile, contact, education, skills, ...)
  components/
    Header.jsx            sticky navigation, theme toggle and print button
    Profile.jsx           photo, name, professional title, summary, contact details
    Section.jsx           reusable section wrapper (title + optional action button)
    Education.jsx         qualifications, institutions and years
    Skills.jsx            six skills with proficiency bars, show/hide
    Experience.jsx        positions, organisations and responsibilities
    Projects.jsx          three projects with technologies and descriptions
    References.jsx        two references, show/hide
    Footer.jsx            name, contact information and copyright
```

## Assignment requirements

- **Functional components and JSX** — every component is a function returning JSX.
- **Component composition and props** — `App` composes eight components and passes all
  content down as props; `Section` receives an `action` element and `children`, so
  `Skills` and `References` compose their toggle buttons into a shared section layout.
- **useState** — theme, skills visibility, references visibility and the interaction
  counter are managed with `useState`.
- **useEffect** — one effect sets `document.title` from the profile data when the
  application loads; a second effect applies the `dark` class to `document.body`
  whenever the theme changes.
- **DOM manipulation and event handling** — four interactive features: Dark/Light Mode
  toggle (`classList.toggle` on the body), Show/Hide Skills, Show/Hide References, and
  Print CV (`window.print()` with a dedicated `@media print` stylesheet). Every click
  also updates the interaction counter shown in the profile.
- **Responsive design** — fluid grids plus breakpoints at 760px and 480px for tablet
  and mobile layouts.

## Editing the content

All personal information lives in `src/data/cvData.js`. Update the values there and the
components render the new content automatically.
