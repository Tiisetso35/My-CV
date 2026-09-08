import Section from './Section';

function References({ items, visible, onToggle }) {
  const action = (
    <button type="button" className="btn btn-small" onClick={onToggle}>
      {visible ? 'Hide References' : 'Show References'}
    </button>
  );

  return (
    <Section id="references" title="References" action={action}>
      {visible ? (
        <div className="grid">
          {items.map((person) => (
            <article key={person.id} className="card">
              <h3>{person.name}</h3>
              <p className="organisation">{person.role}</p>
              <p>{person.organisation}</p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </article>
          ))}
        </div>
      ) : (
        <p className="muted">References are available on request.</p>
      )}
    </Section>
  );
}

export default References;
