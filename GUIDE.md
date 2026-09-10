# Beginner Guide — Online CV (Web Design II, React Assignment)

This guide explains the project so you can present and defend it.

---

## 1. Project structure

```
my-cv/
  index.html               the single HTML page React loads into
  package.json             project name and the npm commands
  src/
    main.jsx               starts React and puts <App /> inside index.html
    App.jsx                the main component: holds the state and all sections
    App.css                the styles for the layout, cards and buttons
    index.css              the colours and basic page styles
    data/
      cvData.js            all my CV information (name, education, skills, ...)
    assets/
      profile.jpg          my profile photo
    components/
      Header.jsx           name, title, navigation links, Download CV button
      Profile.jsx          photo and professional summary
      Contact.jsx          email, phone, location
      Education.jsx        institution, programme, year
      Skills.jsx           list of skills + Show/Hide Skills button
      Experience.jsx       position, organisation, responsibilities
      Projects.jsx         three student projects
      References.jsx       two references + Show/Hide References button
      Footer.jsx           name, contact details, copyright
```

## 2. What each file does

| File | What it does |
| --- | --- |
| `index.html` | Has one empty `<div id="root">`. React puts the whole website inside it. |
| `src/main.jsx` | Finds that `div` and renders the `App` component into it. |
| `src/App.jsx` | The parent component. It keeps the `useState` values, the `useEffect`, the button functions, and it places all the other components on the page. |
| `src/data/cvData.js` | All my information in one place, exported as variables. Nothing about design is in this file. |
| `src/components/*.jsx` | Each one is a small component that receives information through props and returns JSX for that section. |
| `src/index.css` | Colour variables (`--bg`, `--card`, `--accent`, `--text`) and basic styles for `body`, headings and links. |
| `src/App.css` | Styles for the header, cards, grid, buttons, footer, the mobile layout and the print layout. |

## 3. How the components work together (composition)

`main.jsx` renders `App`. `App` renders the nine components inside it:

```
main.jsx
 └── App.jsx
      ├── Header
      ├── Profile
      ├── Contact
      ├── Education
      ├── Skills
      ├── Experience
      ├── Projects
      ├── References
      └── Footer
```

This is **component composition**: one bigger component (`App`) is built out of many
smaller components. `App` imports the data once, and each child component only receives
the part it needs.

## 4. Where props are used

Props are the information a parent component sends to a child component.

In `App.jsx` (the parent):

```jsx
<Header name={person.name} title={person.title} onDownload={handleDownload} />
<Education items={education} />
<Skills items={skills} show={showSkills} onToggle={handleShowSkills} />
```

In `Header.jsx` (the child) the props are received between curly brackets:

```jsx
function Header({ name, title, onDownload }) {
  return <h1 className="header-name">{name}</h1>;
}
```

So nothing is hard-coded inside the components — if I change `person.name` in
`cvData.js`, the Header, the Footer and the browser title all change.

The components that show a list (`Education`, `Skills`, `Experience`, `Projects`,
`References`) receive an array in the `items` prop and use `.map()` to create one card
for every item in the array. `key` is added so React can tell the items apart.

## 5. Where useState is used

`useState` remembers a value while the page is open. In `App.jsx`:

```jsx
const [showSkills, setShowSkills] = useState(true);
const [showReferences, setShowReferences] = useState(true);
```

- `showSkills` is the current value (`true` = the skills are visible).
- `setShowSkills` is the function used to change it.
- `useState(true)` means it starts as `true`.

When the value changes, React automatically redraws the page.

## 6. Where useEffect is used

Also in `App.jsx`:

```jsx
useEffect(() => {
  document.title = 'My CV - ' + person.name;
}, []);
```

`useEffect` runs code after the page loads. Here it changes the text on the browser tab
to "My CV - Tiisetso Rannyama". The empty array `[]` at the end means "run this only
once, when the application loads".

## 7. How the buttons work (event handling and DOM)

There are three interactive features.

**a) Show/Hide Skills**

`App.jsx` has the function:

```jsx
function handleShowSkills() {
  setShowSkills(!showSkills);
}
```

`!showSkills` means "the opposite": `true` becomes `false` and `false` becomes `true`.
The function is sent to `Skills` as the `onToggle` prop, and `Skills.jsx` attaches it to
the click event:

```jsx
<button className="button" onClick={onToggle}>
  {show ? 'Hide Skills' : 'Show Skills'}
</button>

{show && (
  <div className="card">... the list of skills ...</div>
)}
```

- `onClick={onToggle}` is the **event handling**: the click runs the function.
- `{show && ( ... )}` means "only put this part in the page if `show` is true". When
  `show` becomes false React removes those elements from the DOM — that is the **DOM
  manipulation**.
- `{show ? 'Hide Skills' : 'Show Skills'}` changes the text on the button.

**b) Show/Hide References** — exactly the same, using `showReferences` in `App.jsx` and
the same pattern inside `References.jsx`.

**c) Download CV**

```jsx
function handleDownload() {
  window.print();
}
```

`window.print()` is a browser (DOM) function that opens the print dialog. To download
the CV, choose **Save as PDF** as the destination — the file is saved with the document
title, "My CV - Tiisetso Rannyama". In `App.css`
there is a small print rule so the buttons and the navigation are not printed:

```css
@media print {
  .button,
  .nav {
    display: none;
  }
}
```

## 8. Responsive design

- The page content uses `max-width: 900px` and `margin: 0 auto`, so it stays centred.
- Cards use CSS Grid: `repeat(auto-fit, minmax(250px, 1fr))`, so they sit side by side on
  a big screen and stack on a small screen.
- A media query at `700px` puts the profile photo above the text and stacks the header.

## 9. Instructions

**1) Create the project with Vite** (only if you are starting from nothing — this
project already exists):

```bash
npm create vite@latest my-cv -- --template react
cd my-cv
```

**2) Install and run**

```bash
npm install
npm run dev
```

Open the link it prints (http://localhost:5173) in the browser. Press `Ctrl + C` in the
terminal to stop it.

**3) Which files to create**

Create the folders `src/components` and `src/data`, then create the nine `.jsx` files
listed in section 1 plus `src/data/cvData.js`, and put your photo in `src/assets`.

**4) Where to paste each piece of code**

- The component code goes in its matching file inside `src/components/`.
- The data goes in `src/data/cvData.js`.
- The state, the `useEffect` and the button functions go in `src/App.jsx`.
- The styles go in `src/App.css` and `src/index.css` (Vite already imports both).

**5) How to test the buttons**

- Click **Hide Skills** — the skills list disappears and the button says "Show Skills".
  Click it again to bring the list back.
- Click **Hide References** — the same happens with the references.
- Click **Download CV** — the print window opens; choose "Save as PDF" to download the
  CV. The buttons and the navigation are not on the saved page.
- Click the navigation links — the page scrolls to that section.
- Look at the browser tab — it says "My CV - Tiisetso Rannyama" (that is `useEffect`).
- Make the browser window narrow, or press `F12` and choose a phone size, to check that
  the layout is responsive.

**6) How to build the project for submission**

```bash
npm run build
```

This creates a `dist` folder with the finished website. For submission, zip the project
folder **without** `node_modules` and `dist`, and include a screenshot of the CV.

**7) How to upload it to GitHub**

```bash
git init
git add .
git commit -m "Online CV React assignment"
git branch -M main
git remote add origin https://github.com/Tiisetso35/My-CV.git
git push -u origin main
```

If the repository already has files, use `git pull origin main` first. After the first
time, uploading changes is just:

```bash
git add .
git commit -m "Describe the change"
git push
```
