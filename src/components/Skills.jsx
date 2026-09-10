// Skills: shows the list of skills.
// "show" tells the component if the list must be visible,
// "onToggle" is the function that runs when the button is clicked.
function Skills({ items, show, onToggle }) {
  return (
    <section className="section" id="skills">
      <div className="section-top">
        <h2>Skills</h2>
        <button className="button" onClick={onToggle}>
          {show ? 'Hide Skills' : 'Show Skills'}
        </button>
      </div>

      {show && (
        <div className="card">
          <ul className="skill-list">
            {items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;
