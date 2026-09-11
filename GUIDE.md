# My notes about this project

These are my own notes so I can explain the project.

## Project structure

```
src/
  components/
    Header.jsx
    Profile.jsx
    Contact.jsx
    Education.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    References.jsx
    Footer.jsx
  data/
    cvData.js
  assets/
    profile.jpg
  App.jsx
  App.css
  index.css
  main.jsx
```

## What each file does

- `main.jsx` - starts React and puts App inside the div in index.html.
- `App.jsx` - the main component. It has the two useState values, the useEffect and the
  three button functions, and it puts all the other components on the page.
- `cvData.js` - all my information (name, education, skills, experience, projects,
  references). If I change it here it changes on the page.
- The files in `components/` - each one is a small component for one section.
- `index.css` - the body, colours and font.
- `App.css` - the header, the boxes, the buttons, the footer, the phone size and the
  printing.

## Props

App sends the information to the small components, for example:

```jsx
<Education items={education} />
```

and Education uses it:

```jsx
function Education({ items }) { ... }
```

The sections with a list use `.map()` to make one box for every item in the array.

## useState

In App.jsx:

```jsx
const [showSkills, setShowSkills] = useState(true);
```

`showSkills` is true when the skills are shown. `setShowSkills` changes it.

## useEffect

In App.jsx:

```jsx
useEffect(() => {
  document.title = 'My CV - ' + person.name;
}, []);
```

It runs one time when the page opens and changes the browser tab title.

## The buttons (events and DOM)

```jsx
function handleShowSkills() {
  setShowSkills(!showSkills);
}
```

`!showSkills` is the opposite, so true becomes false and false becomes true. The
function is sent to Skills and used like this:

```jsx
<button className="button" onClick={onToggle}>
  {show ? 'Hide Skills' : 'Show Skills'}
</button>

{show && <div className="card">... the skills ...</div>}
```

When show is false React takes the skills out of the page. References works the same
way. The Download CV button calls `window.print()` and then I choose Save as PDF.

## Responsive

The container has `max-width: 800px` so it stays in the middle. There is a media query
at 700px that makes the menu links go one under the other on a phone.

## How I test it

- Click Hide Skills and Show Skills.
- Click Hide References and Show References.
- Click Download CV and choose Save as PDF.
- Click the menu links.
- Look at the browser tab, it says My CV - Tiisetso Rannyama.
- Make the window small to see the phone layout.

## Putting it on GitHub

```
git add .
git commit -m "My CV assignment"
git push
```
