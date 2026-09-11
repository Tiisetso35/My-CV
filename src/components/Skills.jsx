// Skills shows my skills and a button that hides or shows them
function Skills({ items, show, onToggle }) {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>

      <button className="button" onClick={onToggle}>
        {show ? 'Hide Skills' : 'Show Skills'}
      </button>

      {show && (
        <div className="card">
          <ul>
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
