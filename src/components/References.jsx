// References shows two people who can talk about me.
// The button hides or shows them, same as the Skills button.
function References({ items, show, onToggle }) {
  return (
    <section className="section" id="references">
      <h2>References</h2>

      <button className="button" onClick={onToggle}>
        {show ? 'Hide References' : 'Show References'}
      </button>

      {show && (
        <div>
          {items.map((person) => (
            <div className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p>{person.position}</p>
              <p>{person.organisation}</p>
              <p>{person.phone}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default References;
