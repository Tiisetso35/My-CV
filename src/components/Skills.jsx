import Section from './Section';

function Skills({ items, visible, onToggle }) {
  const action = (
    <button type="button" className="btn btn-small" onClick={onToggle}>
      {visible ? 'Hide Skills' : 'Show Skills'}
    </button>
  );

  return (
    <Section id="skills" title="Skills" action={action}>
      {visible ? (
        <ul className="skill-list">
          {items.map((skill) => (
            <li key={skill.id}>
              <div className="skill-row">
                <span>{skill.name}</span>
                <span className="percent">{skill.level}%</span>
              </div>
              <div className="bar" role="presentation">
                <div className="bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted">Skills are hidden. Use the button above to show them.</p>
      )}
    </Section>
  );
}

export default Skills;
