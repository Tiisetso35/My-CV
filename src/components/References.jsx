// References: works the same way as Skills.
// The button uses the onToggle function to show or hide the references.
function References({ items, show, onToggle }) {
  return (
    <section className="section" id="references">
      <div className="section-top">
        <h2>References</h2>
        <button className="button" onClick={onToggle}>
          {show ? 'Hide References' : 'Show References'}
        </button>
      </div>

      {show && (
        <div className="grid">
          {items.map((person) => (
            <div className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p className="highlight">{person.position}</p>
              <p>{person.organisation}</p>
              <p>
                <a href={'mailto:' + person.email}>{person.email}</a>
              </p>
              <p>{person.phone}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default References;
